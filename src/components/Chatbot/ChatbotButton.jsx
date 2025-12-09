import React, { useState, useEffect } from 'react';
import { Fab, Badge, Box } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Chatbot from './Chatbot';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Prevent body scroll when chatbot is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
    // Prevent any scroll behavior
    if (e.target) {
      e.target.blur();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1200,
        }}
      >
        <Fab
          color="primary"
          onClick={handleToggle}
          onMouseDown={(e) => e.preventDefault()}
          sx={{
            background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
              boxShadow: '0 6px 25px rgba(99, 102, 241, 0.5)',
            },
            '&:focus': {
              outline: 'none',
            },
          }}
        >
          <SmartToyIcon />
        </Fab>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleClose();
              }
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1299,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Chatbot onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;

