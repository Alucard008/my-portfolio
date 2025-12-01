/**
 * API Configuration
 * 
 * This file centralizes all API-related configuration.
 * It automatically detects the environment and uses the appropriate API endpoint.
 * 
 * Environment variables:
 * - REACT_APP_API_URL: Override the API base URL (optional)
 * - NODE_ENV: Automatically set by Create React App (development/production)
 */

// Determine if we're in development or production
const isDevelopment = process.env.NODE_ENV === 'development';

// Get API URL from environment variable or use defaults
const getApiBaseUrl = () => {
  // If REACT_APP_API_URL is explicitly set, use it (highest priority)
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }

  // Otherwise, use environment-based defaults
  if (isDevelopment) {
    // Development: use local backend
    return 'http://localhost:8000';
  } else {
    // Production: use production backend
    return 'http://51.20.68.44:8000';
  }
};

// API Configuration object
const apiConfig = {
  baseURL: getApiBaseUrl(),
  endpoints: {
    chat: '/api/v1/chat/',
    documents: {
      upload: '/api/v1/documents/upload',
      count: '/api/v1/documents/count',
    },
  },
  // Admin API Key (optional, for admin features)
  adminApiKey: process.env.REACT_APP_ADMIN_API_KEY || '',
};

// Helper function to get full URL for an endpoint
export const getApiUrl = (endpoint) => {
  // Handle both string endpoints and nested endpoint objects
  if (typeof endpoint === 'string') {
    return `${apiConfig.baseURL}${endpoint}`;
  }
  return `${apiConfig.baseURL}${endpoint}`;
};

// Export the config and helper functions
export default apiConfig;

// Export commonly used values for convenience
export const API_BASE_URL = apiConfig.baseURL;
export const ADMIN_API_KEY = apiConfig.adminApiKey;

