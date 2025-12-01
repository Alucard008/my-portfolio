import React, { useState } from 'react';
import { Fab, Tooltip } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanel from './AdminPanel';
import { motion, AnimatePresence } from 'framer-motion';

const AdminButton = () => {
  const [open, setOpen] = useState(false);

  // Check if admin mode is enabled
  // Access methods:
  // 1. Add ?admin=true to URL
  // 2. Set localStorage.setItem('adminMode', 'true') in browser console
  // 3. For development: uncomment the return true line below
  const isAdminMode = () => {
    // Option 1: Always show (for development - uncomment this)
    // return true;
    
    // Option 2: Check URL parameter or localStorage
    return window.location.search.includes('admin=true') || 
           localStorage.getItem('adminMode') === 'true';
  };

  if (!isAdminMode()) {
    return null;
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: 90,
          right: 20,
          zIndex: 1200,
        }}
      >
        <Tooltip title="Admin Panel" arrow>
          <Fab
            color="secondary"
            onClick={() => setOpen(!open)}
            sx={{
              background: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
              boxShadow: '0 4px 20px rgba(244, 114, 182, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
                boxShadow: '0 6px 25px rgba(244, 114, 182, 0.5)',
              },
            }}
          >
            <AdminPanelSettingsIcon />
          </Fab>
        </Tooltip>
      </motion.div>

      <AnimatePresence>
        {open && <AdminPanel onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default AdminButton;

