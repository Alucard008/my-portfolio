// import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import FadeInItem from './FadeInItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ImageBlob = ({
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  showCloud,
  messageVisible,
  messageIndex,
  messages,
}) => {
//   const theme = useTheme();

  return (
    <FadeInItem delay={0.3}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Top hover section for md and above with fixed height to avoid layout shift */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '120px', // fixed height to reserve space
            mb: 2,
            zIndex: 10,
          }}
        >
          {!isHovered && (
            <>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 1,
                }}
              >
                Hover Image
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ fontSize: '1.5rem', color: '#2563eb' }}
              />
            </>
          )}
          {isHovered && showCloud && (
            <Box
              sx={{
                position: 'relative',
                background: 'white',
                borderRadius: '20px',
                padding: '10px 16px',
                marginBottom: '10px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                border: '2px solid #e0e7ef',
                width: 'fit-content',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  textAlign: 'center',
                  letterSpacing: '0.3px',
                  opacity: messageVisible ? 1 : 0,
                  transform: messageVisible
                    ? 'translateY(0)'
                    : 'translateY(-10px)',
                  transition: 'all 0.3s ease-in-out',
                  minHeight: '1.2rem',
                }}
              >
                {messages[messageIndex]}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Main Image Container */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: 280, sm: 350, md: 400, lg: 500 },
            height: { xs: 280, sm: 350, md: 400, lg: 500 },
            cursor: 'pointer',
            mx: 'auto',
            mb: { xs: 1, md: 0 },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Original Picture */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isHovered ? 0 : 1,
              transform: isHovered
                ? 'rotate(-360deg) scale(0.8)'
                : 'rotate(0deg) scale(1)',
              transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 2,
            }}
          >
            <svg
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%' }}
            >
              <mask id="blobMask" mask-type="alpha">
                <path
                  d="M9.2 146C34 76.6 115 54.7 184 29.5C246 7 312 -15 371 14.1C431 44 468 108 477 174C486 237 455 294 417 345C374 401 326 463 255 466C179 470 112 422 65.2 362C17.5 299.8 -17.2 219.6 9.2 146Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#blobMask)">
                <path
                  d="M9.2 146C34 76.6 115 54.7 184 29.5C246 7 312 -15 371 14.1C431 44 468 108 477 174C486 237 455 294 417 345C374 401 326 463 255 466C179 470 112 422 65.2 362C17.5 299.8 -17.2 219.6 9.2 146Z"
                  fill="#2563eb"
                />
                <image
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  href="/picture.jpg"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </Box>

          {/* Ghibli Picture */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? 'rotate(360deg) scale(1.1)'
                : 'rotate(0deg) scale(0.9)',
              transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1,
            }}
          >
            <svg
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%' }}
            >
              <mask id="blobMaskGhibli" mask-type="alpha">
                <path
                  d="M9.2 146C34 76.6 115 54.7 184 29.5C246 7 312 -15 371 14.1C431 44 468 108 477 174C486 237 455 294 417 345C374 401 326 463 255 466C179 470 112 422 65.2 362C17.5 299.8 -17.2 219.6 9.2 146Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#blobMaskGhibli)">
                <path
                  d="M9.2 146C34 76.6 115 54.7 184 29.5C246 7 312 -15 371 14.1C431 44 468 108 477 174C486 237 455 294 417 345C374 401 326 463 255 466C179 470 112 422 65.2 362C17.5 299.8 -17.2 219.6 9.2 146Z"
                  fill="#9333ea"
                />
                <image
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  href="/ghibli_pic.png"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </Box>

          {/* Glow */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              right: -20,
              bottom: -20,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: 0,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
            }}
          />
        </Box>

        {/* Mobile hover icon and message */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            mt: 2,
            zIndex: 10,
          }}
        >
          {!isHovered && (
            <>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 1,
                }}
              >
                Hover Image
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ fontSize: '1.5rem', color: '#2563eb' }}
              />
            </>
          )}
          {isHovered && showCloud && (
            <Box
              sx={{
                mt: 2,
                position: 'relative',
                background: 'white',
                borderRadius: '20px',
                padding: '10px 16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                border: '2px solid #e0e7ef',
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  textAlign: 'center',
                  letterSpacing: '0.3px',
                  opacity: messageVisible ? 1 : 0,
                  transform: messageVisible
                    ? 'translateY(0)'
                    : 'translateY(-10px)',
                  transition: 'all 0.3s ease-in-out',
                  minHeight: '1.2rem',
                }}
              >
                {messages[messageIndex]}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </FadeInItem>
  );
};

export default ImageBlob;
