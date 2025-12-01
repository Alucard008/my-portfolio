import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  LinearProgress,
  Alert,
  Snackbar,
  List,
  ListItem,
  ListItemText,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { motion } from 'framer-motion';
import { API_BASE_URL, ADMIN_API_KEY } from '../../config/api';

const AdminPanel = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [documentCount, setDocumentCount] = useState(0);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, docId: null });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    fetchDocumentCount();
  }, []);

  const fetchDocumentCount = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/documents/count`);
      if (response.ok) {
        const data = await response.json();
        setDocumentCount(data.total_chunks || 0);
      }
    } catch (error) {
      console.error('Error fetching document count:', error);
    }
  };

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(
      (file) => file.type === 'application/pdf' || file.type === 'text/plain'
    );
    setFiles(validFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    // Check if admin API key is configured
    if (!ADMIN_API_KEY) {
      setSnackbar({
        open: true,
        message: 'Admin API key not configured. Please set REACT_APP_ADMIN_API_KEY in .env',
        severity: 'warning',
      });
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    setUploadStatus(null);

    const uploadPromises = files.map(async (file, index) => {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/documents/upload`, {
          method: 'POST',
          headers: {
            'X-Admin-API-Key': ADMIN_API_KEY,
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Upload failed');
        }

        const data = await response.json();
        setUploadProgress(((index + 1) / files.length) * 100);
        return { success: true, file: file.name, data };
      } catch (error) {
        return { success: false, file: file.name, error: error.message };
      }
    });

    try {
      const results = await Promise.all(uploadPromises);
      const successCount = results.filter((r) => r.success).length;
      const failCount = results.filter((r) => !r.success).length;

      if (successCount > 0) {
        setUploadStatus({
          type: 'success',
          message: `Successfully uploaded ${successCount} document(s)${failCount > 0 ? `, ${failCount} failed` : ''}`,
        });
        setSnackbar({
          open: true,
          message: `Successfully uploaded ${successCount} document(s)!`,
          severity: 'success',
        });
        fetchDocumentCount();
      } else {
        setUploadStatus({
          type: 'error',
          message: `Failed to upload documents: ${results[0]?.error || 'Unknown error'}`,
        });
        setSnackbar({
          open: true,
          message: 'Upload failed. Please try again.',
          severity: 'error',
        });
      }
    } catch (error) {
      setUploadStatus({
        type: 'error',
        message: `Upload error: ${error.message}`,
      });
      setSnackbar({
        open: true,
        message: 'Upload error. Please try again.',
        severity: 'error',
      });
    } finally {
      setUploading(false);
      setFiles([]);
      setTimeout(() => {
        setUploadProgress(0);
        setUploadStatus(null);
      }, 3000);
    }
  };

  const handleDelete = async () => {
    // Note: Delete functionality would need to be implemented in the backend
    // For now, this is a placeholder
    setSnackbar({
      open: true,
      message: 'Delete functionality requires backend implementation',
      severity: 'info',
    });
    setDeleteDialog({ open: false, docId: null });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Paper
        elevation={8}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95vw', sm: '90vw', md: '800px', lg: '900px' },
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          overflow: 'hidden',
          zIndex: 1400,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            color: 'white',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Admin Panel - Document Management
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 3,
            backgroundColor: '#F8FAFC',
          }}
        >
          {/* Stats */}
          <Box sx={{ mb: 3 }}>
            <Paper sx={{ p: 2, backgroundColor: 'white' }}>
              <Typography variant="h6" gutterBottom>
                Knowledge Base Statistics
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Chip
                  icon={<DescriptionIcon />}
                  label={`${documentCount} Document Chunks`}
                  color="primary"
                  sx={{ fontSize: '0.9rem', p: 1 }}
                />
              </Box>
            </Paper>
          </Box>

          {/* Upload Section */}
          <Paper sx={{ p: 3, mb: 3, backgroundColor: 'white' }}>
            <Typography variant="h6" gutterBottom>
              Upload Documents
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Supported formats: PDF, TXT. Documents will be processed and indexed for the chatbot.
            </Typography>

            {/* Drag and Drop Area */}
            <Box
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              sx={{
                border: '2px dashed',
                borderColor: files.length > 0 ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                backgroundColor: files.length > 0 ? 'primary.50' : 'grey.50',
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'primary.50',
                },
              }}
            >
              <input
                type="file"
                multiple
                accept=".pdf,.txt"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                  }}
                >
                  <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      {files.length > 0
                        ? `${files.length} file(s) selected`
                        : 'Drag & drop files here or click to browse'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      PDF, TXT files up to 10MB each
                    </Typography>
                  </Box>
                </Box>
              </label>
            </Box>

            {/* Selected Files List */}
            {files.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Selected Files:
                </Typography>
                <List dense>
                  {files.map((file, index) => (
                    <ListItem key={index} sx={{ backgroundColor: 'grey.50', mb: 0.5, borderRadius: 1 }}>
                      <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <ListItemText
                        primary={file.name}
                        secondary={`${(file.size / 1024 / 1024).toFixed(2)} MB`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {/* Upload Progress */}
            {uploading && (
              <Box sx={{ mt: 2 }}>
                <LinearProgress variant="determinate" value={uploadProgress} />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                  Uploading... {Math.round(uploadProgress)}%
                </Typography>
              </Box>
            )}

            {/* Upload Status */}
            {uploadStatus && (
              <Alert
                severity={uploadStatus.type}
                icon={uploadStatus.type === 'success' ? <CheckCircleIcon /> : <ErrorIcon />}
                sx={{ mt: 2 }}
              >
                {uploadStatus.message}
              </Alert>
            )}

            {/* Upload Button */}
            <Button
              variant="contained"
              fullWidth
              onClick={handleUpload}
              disabled={files.length === 0 || uploading}
              sx={{ mt: 2 }}
              startIcon={<CloudUploadIcon />}
            >
              {uploading ? 'Uploading...' : `Upload ${files.length} File(s)`}
            </Button>
          </Paper>

          {/* Instructions */}
          <Paper sx={{ p: 2, backgroundColor: 'white' }}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Instructions:
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2" color="text.secondary">
                Upload PDF or text files containing information you want the chatbot to know
              </Typography>
              <Typography component="li" variant="body2" color="text.secondary">
                Documents are automatically processed and split into chunks
              </Typography>
              <Typography component="li" variant="body2" color="text.secondary">
                Each chunk is indexed in the vector database for fast retrieval
              </Typography>
              <Typography component="li" variant="body2" color="text.secondary">
                The chatbot will use these documents to answer questions
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, docId: null })}>
          <DialogTitle>Delete Document?</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete this document? This action cannot be undone.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialog({ open: false, docId: null })}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </motion.div>
  );
};

export default AdminPanel;

