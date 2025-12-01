import React, { useState } from 'react';
import { Fab, Badge } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Chatbot from './Chatbot';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(!open)}
          sx={{
            background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
              boxShadow: '0 6px 25px rgba(99, 102, 241, 0.5)',
            },
          }}
        >
          <SmartToyIcon />
        </Fab>
      </motion.div>

      <AnimatePresence>
        {open && <Chatbot onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;

