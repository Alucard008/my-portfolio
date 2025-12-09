import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

const SnakeGame = ({ onClose }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const directionRef = useRef(INITIAL_DIRECTION);
  const gameLoopRef = useRef(null);

  // Generate random food position
  const generateFood = useCallback((snakeBody) => {
    let newFood;
    let isOnSnake = true;
    
    while (isOnSnake) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      isOnSnake = snakeBody.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    }
    
    return newFood;
  }, []);

  // Check collision
  const checkCollision = useCallback((head, snakeBody) => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
    for (let segment of snakeBody) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }
    return false;
  }, []);

  // Game loop
  const gameLoop = useCallback(() => {
    if (isPaused || gameOver) return;

    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] };
      const newDirection = directionRef.current;
      
      head.x += newDirection.x;
      head.y += newDirection.y;

      // Check collision
      if (checkCollision(head, prevSnake)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      // Check if food eaten
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10);
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [food, checkCollision, generateFood, isPaused, gameOver]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;

      // Spacebar to pause/resume
      if (key === ' ' || key === 'Spacebar') {
        e.preventDefault();
        if (!gameOver) {
          setIsPaused(prev => !prev);
        }
        return;
      }

      if (gameOver || isPaused) return;

      const currentDir = directionRef.current;

      if (key === 'ArrowUp' && currentDir.y === 0) {
        e.preventDefault();
        directionRef.current = { x: 0, y: -1 };
        setDirection({ x: 0, y: -1 });
      } else if (key === 'ArrowDown' && currentDir.y === 0) {
        e.preventDefault();
        directionRef.current = { x: 0, y: 1 };
        setDirection({ x: 0, y: 1 });
      } else if (key === 'ArrowLeft' && currentDir.x === 0) {
        e.preventDefault();
        directionRef.current = { x: -1, y: 0 };
        setDirection({ x: -1, y: 0 });
      } else if (key === 'ArrowRight' && currentDir.x === 0) {
        e.preventDefault();
        directionRef.current = { x: 1, y: 0 };
        setDirection({ x: 1, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, isPaused]);

  // Start game loop
  useEffect(() => {
    if (!gameOver && !isPaused) {
      gameLoopRef.current = setInterval(gameLoop, GAME_SPEED);
    } else {
      clearInterval(gameLoopRef.current);
    }

    return () => clearInterval(gameLoopRef.current);
  }, [gameLoop, gameOver, isPaused]);

  // Reset game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90vw', sm: '500px' },
        maxWidth: '500px',
        zIndex: 2000,
        background: 'rgba(15, 12, 41, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(99, 102, 241, 0.5)',
        borderRadius: 3,
        p: 3,
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography
          variant="h5"
          sx={{
            background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}
        >
          Snake Game
        </Typography>
        <Button
          onClick={onClose}
          sx={{
            minWidth: 'auto',
            p: 1,
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              color: '#A855F7',
              background: 'rgba(168, 85, 247, 0.1)',
            },
          }}
        >
          <CloseIcon />
        </Button>
      </Box>

      {/* Score */}
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#E0E7EF',
            fontWeight: 600,
          }}
        >
          Score: {score}
        </Typography>
      </Box>

      {/* Game Board */}
      <Box
        sx={{
          width: '100%',
          height: `${GRID_SIZE * CELL_SIZE}px`,
          background: '#030014',
          border: '2px solid rgba(99, 102, 241, 0.3)',
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
          mb: 2,
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              background: index === 0
                ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)'
                : 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%)',
              border: index === 0 ? '2px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(99, 102, 241, 0.5)',
              borderRadius: 2,
              boxShadow: index === 0
                ? '0 0 10px rgba(99, 102, 241, 0.6)'
                : '0 0 5px rgba(168, 85, 247, 0.4)',
            }}
          />
        ))}

        {/* Food */}
        <Box
          sx={{
            position: 'absolute',
            left: `${food.x * CELL_SIZE}px`,
            top: `${food.y * CELL_SIZE}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(168, 85, 247, 0.8) 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)',
            animation: 'foodPulse 1s ease-in-out infinite',
            '@keyframes foodPulse': {
              '0%, 100%': {
                transform: 'scale(1)',
              },
              '50%': {
                transform: 'scale(1.2)',
              },
            },
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#E0E7EF',
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Game Over!
            </Typography>
            <Typography variant="h6" sx={{ color: '#E0E7EF', mb: 3 }}>
              Final Score: {score}
            </Typography>
            <Button
              onClick={resetGame}
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                color: 'white',
                fontWeight: 600,
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
                },
              }}
            >
              Play Again
            </Button>
          </Box>
        )}

        {/* Paused Overlay */}
        {isPaused && !gameOver && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#E0E7EF',
                fontWeight: 700,
              }}
            >
              Paused
            </Typography>
          </Box>
        )}
      </Box>

      {/* Controls */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            mb: 1,
          }}
        >
          Use Arrow Keys to Control | Spacebar to Pause
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button
            onClick={() => setIsPaused(!isPaused)}
            variant="outlined"
            size="small"
            sx={{
              borderColor: 'rgba(99, 102, 241, 0.5)',
              color: '#E0E7EF',
              '&:hover': {
                borderColor: '#A855F7',
                background: 'rgba(168, 85, 247, 0.1)',
              },
            }}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
          <Button
            onClick={resetGame}
            variant="outlined"
            size="small"
            sx={{
              borderColor: 'rgba(99, 102, 241, 0.5)',
              color: '#E0E7EF',
              '&:hover': {
                borderColor: '#A855F7',
                background: 'rgba(168, 85, 247, 0.1)',
              },
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SnakeGame;

