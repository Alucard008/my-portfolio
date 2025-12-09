import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            <Paper
              elevation={message.role === 'user' ? 2 : 1}
              sx={{
                p: 1.5,
                maxWidth: '75%',
                borderRadius: 2,
                backgroundColor:
                  message.role === 'user'
                    ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)'
                    : message.error
                    ? 'rgba(220, 38, 38, 0.2)'
                    : 'rgba(255, 255, 255, 0.05)',
                background:
                  message.role === 'user'
                    ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)'
                    : message.error
                    ? 'rgba(220, 38, 38, 0.2)'
                    : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: message.role !== 'user' ? 'blur(10px)' : 'none',
                border: message.role !== 'user' ? '1px solid rgba(99, 102, 241, 0.3)' : 'none',
                color:
                  message.role === 'user'
                    ? 'white'
                    : message.error
                    ? '#FCA5A5'
                    : 'rgba(255, 255, 255, 0.9)',
                boxShadow:
                  message.role === 'user'
                    ? '0 2px 8px rgba(99, 102, 241, 0.3)'
                    : '0 1px 3px rgba(99, 102, 241, 0.2)',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  lineHeight: 1.6,
                }}
              >
                {message.content}
              </Typography>
              {message.confidence && (
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mt: 0.5,
                    opacity: 0.7,
                    fontSize: '0.65rem',
                    color: message.role === 'user' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  Confidence: {Math.round(message.confidence * 100)}%
                </Typography>
              )}
            </Paper>
          </Box>
        </motion.div>
      ))}
    </>
  );
};

export default MessageList;

