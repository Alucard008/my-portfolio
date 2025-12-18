import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';

const GRID_SIZE = 30; // Bigger board
const CELL_SIZE = 25; // Bigger cells
const MAX_SNAKE_LENGTH = 10; // Maximum snake length
// Create initial snake with 10 segments
const createInitialSnake = (startX, startY, direction = 'right') => {
  const segments = [];
  for (let i = 0; i < 10; i++) {
    if (direction === 'right') {
      segments.push({ x: startX - i, y: startY });
    } else if (direction === 'left') {
      segments.push({ x: startX + i, y: startY });
    } else if (direction === 'down') {
      segments.push({ x: startX, y: startY - i });
    } else {
      segments.push({ x: startX, y: startY + i });
    }
  }
  return segments;
};
const GAME_SPEED = 60; // Smoother, faster updates

const BackgroundSnake = () => {
  // Snake 1 (Purple/Indigo - Square shape)
  const [snake1, setSnake1] = useState(createInitialSnake(10, 10, 'right'));
  const [food1, setFood1] = useState({ x: 15, y: 15 });
  const directionRef1 = useRef({ x: 1, y: 0 });
  const foodRef1 = useRef({ x: 15, y: 15 });
  const snakeRef1 = useRef(createInitialSnake(10, 10, 'right'));
  const gameLoopRef1 = useRef(null);

  // Snake 2 (Cyan/Teal - Circular/Diamond shape)
  const [snake2, setSnake2] = useState(createInitialSnake(20, 20, 'left'));
  const [food2, setFood2] = useState({ x: 5, y: 5 });
  const directionRef2 = useRef({ x: -1, y: 0 });
  const foodRef2 = useRef({ x: 5, y: 5 });
  const snakeRef2 = useRef(createInitialSnake(20, 20, 'left'));
  const gameLoopRef2 = useRef(null);

  // AI: Calculate best direction towards food (with collision avoidance for other snake and walls)
  const calculateDirection = (head, foodPos, currentDir, snakeBody, otherSnakeBody = []) => {
    // Possible directions
    const directions = [
      { x: 1, y: 0 },   // Right
      { x: -1, y: 0 },  // Left
      { x: 0, y: 1 },   // Down
      { x: 0, y: -1 },  // Up
    ];
    
    // Filter out reverse direction (can't go backwards)
    const validDirections = directions.filter(dir => 
      !(dir.x === -currentDir.x && dir.y === -currentDir.y)
    );
    
    // Score each direction
    const scoredDirections = validDirections.map(dir => {
      let newHeadX = head.x + dir.x;
      let newHeadY = head.y + dir.y;
      
      // Check wall collision (no wrapping)
      const willHitWall = newHeadX < 0 || newHeadX >= GRID_SIZE || 
                          newHeadY < 0 || newHeadY >= GRID_SIZE;
      
      if (willHitWall) {
        return { dir, score: -1000 }; // Avoid walls
      }
      
      // Check collision with own body (excluding tail since it will move)
      const willCollideSelf = snakeBody.slice(0, -1).some(segment => 
        segment.x === newHeadX && segment.y === newHeadY
      );
      
      // Check collision with other snake
      const willCollideOther = otherSnakeBody.some(segment => 
        segment.x === newHeadX && segment.y === newHeadY
      );
      
      if (willCollideSelf || willCollideOther) {
        return { dir, score: -1000 }; // Avoid collision
      }
      
      // Calculate distance to food (no wrapping)
      const dx = foodPos.x - newHeadX;
      const dy = foodPos.y - newHeadY;
      const distance = Math.abs(dx) + Math.abs(dy);
      
      // Prefer directions that get closer to food
      const score = -distance;
      
      return { dir, score };
    });
    
    // Sort by score (highest first)
    scoredDirections.sort((a, b) => b.score - a.score);
    
    // Return best direction (or current if all are bad)
    return scoredDirections[0]?.dir || currentDir;
  };

  // Generate random food position (avoiding both snakes)
  const generateFood = (snakeBody1, snakeBody2 = []) => {
    let newFood;
    let isOnSnake = true;
    let attempts = 0;
    
    while (isOnSnake && attempts < 100) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      isOnSnake = snakeBody1.some(segment => segment.x === newFood.x && segment.y === newFood.y) ||
                   snakeBody2.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      attempts++;
    }
    
    return newFood || { x: 10, y: 10 };
  };

  // Refs to store current snake states for cross-snake collision detection
  const snake1StateRef = useRef(createInitialSnake(10, 10, 'right'));
  const snake2StateRef = useRef(createInitialSnake(20, 20, 'left'));

  // Game loop for Snake 1
  const gameLoopRefFn1 = useRef(() => {
    setSnake1((prevSnake1) => {
      const head1 = { ...prevSnake1[0] };
      const currentFood1 = foodRef1.current;
      const otherSnake = snake2StateRef.current;
      
      // AI: Calculate best direction towards food (avoiding other snake and walls)
      const newDirection1 = calculateDirection(head1, currentFood1, directionRef1.current, prevSnake1, otherSnake);
      directionRef1.current = newDirection1;
      
      head1.x += newDirection1.x;
      head1.y += newDirection1.y;

      // Check wall collision - if hit wall, recalculate direction or reset
      if (head1.x < 0 || head1.x >= GRID_SIZE || head1.y < 0 || head1.y >= GRID_SIZE) {
        // Try to find a safe direction that doesn't hit walls
        const safeDirections = [
          { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }
        ].filter(dir => {
          const testX = prevSnake1[0].x + dir.x;
          const testY = prevSnake1[0].y + dir.y;
          return testX >= 0 && testX < GRID_SIZE && testY >= 0 && testY < GRID_SIZE;
        });
        
        if (safeDirections.length > 0) {
          // Use first safe direction
          directionRef1.current = safeDirections[0];
          head1.x = prevSnake1[0].x + directionRef1.current.x;
          head1.y = prevSnake1[0].y + directionRef1.current.y;
        } else {
          // No safe direction, reset snake
          const resetSnake1 = createInitialSnake(10, 10, 'right');
          directionRef1.current = { x: 1, y: 0 };
          const resetFood1 = generateFood(resetSnake1, otherSnake);
          foodRef1.current = resetFood1;
          setFood1(resetFood1);
          snake1StateRef.current = resetSnake1;
          return resetSnake1;
        }
      }

      let newSnake1 = [head1, ...prevSnake1];

      // Check if food eaten
      if (head1.x === currentFood1.x && head1.y === currentFood1.y) {
        // Only grow if under max length, otherwise just move
        if (newSnake1.length < MAX_SNAKE_LENGTH) {
          // Don't pop - snake grows!
        } else {
          // At max length, always pop tail
          newSnake1.pop();
        }
        const newFood1 = generateFood(newSnake1, otherSnake);
        foodRef1.current = newFood1;
        setFood1(newFood1);
      } else {
        // Always remove tail if food not eaten
        newSnake1.pop();
      }

      snake1StateRef.current = newSnake1;
      return newSnake1;
    });
  });

  // Game loop for Snake 2
  const gameLoopRefFn2 = useRef(() => {
    setSnake2((prevSnake2) => {
      const head2 = { ...prevSnake2[0] };
      const currentFood2 = foodRef2.current;
      const otherSnake = snake1StateRef.current;
      
      // AI: Calculate best direction towards food (avoiding other snake and walls)
      const newDirection2 = calculateDirection(head2, currentFood2, directionRef2.current, prevSnake2, otherSnake);
      directionRef2.current = newDirection2;
      
      head2.x += newDirection2.x;
      head2.y += newDirection2.y;

      // Check wall collision - if hit wall, recalculate direction or reset
      if (head2.x < 0 || head2.x >= GRID_SIZE || head2.y < 0 || head2.y >= GRID_SIZE) {
        // Try to find a safe direction that doesn't hit walls
        const safeDirections = [
          { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }
        ].filter(dir => {
          const testX = prevSnake2[0].x + dir.x;
          const testY = prevSnake2[0].y + dir.y;
          return testX >= 0 && testX < GRID_SIZE && testY >= 0 && testY < GRID_SIZE;
        });
        
        if (safeDirections.length > 0) {
          // Use first safe direction
          directionRef2.current = safeDirections[0];
          head2.x = prevSnake2[0].x + directionRef2.current.x;
          head2.y = prevSnake2[0].y + directionRef2.current.y;
        } else {
          // No safe direction, reset snake
          const resetSnake2 = createInitialSnake(20, 20, 'left');
          directionRef2.current = { x: -1, y: 0 };
          const resetFood2 = generateFood(otherSnake, resetSnake2);
          foodRef2.current = resetFood2;
          setFood2(resetFood2);
          snake2StateRef.current = resetSnake2;
          return resetSnake2;
        }
      }

      let newSnake2 = [head2, ...prevSnake2];

      // Check if food eaten
      if (head2.x === currentFood2.x && head2.y === currentFood2.y) {
        // Only grow if under max length, otherwise just move
        if (newSnake2.length < MAX_SNAKE_LENGTH) {
          // Don't pop - snake grows!
        } else {
          // At max length, always pop tail
          newSnake2.pop();
        }
        const newFood2 = generateFood(otherSnake, newSnake2);
        foodRef2.current = newFood2;
        setFood2(newFood2);
      } else {
        // Always remove tail if food not eaten
        newSnake2.pop();
      }

      snake2StateRef.current = newSnake2;
      return newSnake2;
    });
  });

  // Initialize food refs and sync snake state refs
  useEffect(() => {
    foodRef1.current = food1;
  }, [food1]);

  useEffect(() => {
    foodRef2.current = food2;
  }, [food2]);

  // Sync snake state refs with state
  useEffect(() => {
    snake1StateRef.current = snake1;
  }, [snake1]);

  useEffect(() => {
    snake2StateRef.current = snake2;
  }, [snake2]);

  // Start game loops for both snakes
  useEffect(() => {
    const interval1 = setInterval(() => {
      gameLoopRefFn1.current();
    }, GAME_SPEED);
    
    const interval2 = setInterval(() => {
      gameLoopRefFn2.current();
    }, GAME_SPEED);
    
    gameLoopRef1.current = interval1;
    gameLoopRef2.current = interval2;
    
    return () => {
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${GRID_SIZE * CELL_SIZE}px`,
        height: `${GRID_SIZE * CELL_SIZE}px`,
        maxWidth: '90vw',
        maxHeight: '90vh',
        opacity: 0.25,
        pointerEvents: 'none',
        zIndex: 1,
        display: { xs: 'none', md: 'block' }, // Hide on mobile
      }}
    >
      {/* Snake 1 - Purple/Indigo (Square shape) */}
      {snake1.map((segment, index) => (
        <Box
          key={`snake1-${index}`}
          sx={{
            position: 'absolute',
            left: `${segment.x * CELL_SIZE}px`,
            top: `${segment.y * CELL_SIZE}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            background: index === 0
              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.6) 0%, rgba(168, 85, 247, 0.6) 100%)'
              : 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.4) 100%)',
            border: index === 0 ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: 1, // Square with slight roundness
            boxShadow: index === 0
              ? '0 0 8px rgba(99, 102, 241, 0.4)'
              : '0 0 4px rgba(168, 85, 247, 0.3)',
            transition: 'all 0.06s ease-out',
          }}
        />
      ))}

      {/* Snake 2 - Cyan/Teal (Circular/Diamond shape) */}
      {snake2.map((segment, index) => (
        <Box
          key={`snake2-${index}`}
          sx={{
            position: 'absolute',
            left: `${segment.x * CELL_SIZE}px`,
            top: `${segment.y * CELL_SIZE}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            background: index === 0
              ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.6) 0%, rgba(20, 184, 166, 0.6) 100%)'
              : 'linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(20, 184, 166, 0.4) 100%)',
            border: index === 0 ? '1px solid rgba(6, 182, 212, 0.5)' : '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: index === 0 ? '50%' : '30%', // Head is circular, body is diamond-like
            transform: index === 0 ? 'rotate(0deg)' : 'rotate(45deg)', // Diamond shape for body
            boxShadow: index === 0
              ? '0 0 8px rgba(6, 182, 212, 0.4)'
              : '0 0 4px rgba(20, 184, 166, 0.3)',
            transition: 'all 0.06s ease-out',
          }}
        />
      ))}

      {/* Food 1 - Purple (for Snake 1) */}
      <Box
        sx={{
          position: 'absolute',
          left: `${food1.x * CELL_SIZE}px`,
          top: `${food1.y * CELL_SIZE}px`,
          width: `${CELL_SIZE}px`,
          height: `${CELL_SIZE}px`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(168, 85, 247, 0.3) 100%)',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
          animation: 'foodPulse1 1.5s ease-in-out infinite',
          '@keyframes foodPulse1': {
            '0%, 100%': {
              transform: 'scale(1)',
            },
            '50%': {
              transform: 'scale(1.3)',
            },
          },
        }}
      />

      {/* Food 2 - Cyan (for Snake 2) */}
      <Box
        sx={{
          position: 'absolute',
          left: `${food2.x * CELL_SIZE}px`,
          top: `${food2.y * CELL_SIZE}px`,
          width: `${CELL_SIZE}px`,
          height: `${CELL_SIZE}px`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(6, 182, 212, 0.3) 100%)',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)',
          animation: 'foodPulse2 1.5s ease-in-out infinite',
          '@keyframes foodPulse2': {
            '0%, 100%': {
              transform: 'scale(1)',
            },
            '50%': {
              transform: 'scale(1.3)',
            },
          },
        }}
      />
    </Box>
  );
};

export default BackgroundSnake;

