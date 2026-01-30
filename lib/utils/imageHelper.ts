/**
 * Image path helper for consistent absolute paths across the application
 * Ensures images work correctly during development and production deployment
 */

const BASE_PATH = '/newsite';

export const IMAGE_PATHS = {
  // Hero and About Images
  HERO_PROFILE: `${BASE_PATH}/images/hero-profile.jpg`,
  ABOUT_ICON: `${BASE_PATH}/images/apple-icon.png`,

  // Project Images
  PROJECTS: {
    LLM_FINETUNING: `${BASE_PATH}/images/projects/llm-finetuning.jpg`,
    LLM_SCRATCH: `${BASE_PATH}/images/projects/llm-scratch.jpg`,
    VISA_PREDICTION: `${BASE_PATH}/images/projects/visa-prediction.jpg`,
    ML_VISUALIZER: `${BASE_PATH}/images/projects/ml-visualizer.jpg`,
    URL_DETECTION: `${BASE_PATH}/images/projects/url-detection.jpg`,
    CUSTOMER_SATISFACTION: `${BASE_PATH}/images/projects/customer-satisfaction.jpg`,
    LLM_PRODUCTION: `${BASE_PATH}/images/projects/llm-production.jpg`,
    DEEP_LEARNING: `${BASE_PATH}/images/projects/deep-learning.jpg`,
    RAG_CHATBOT: `${BASE_PATH}/images/projects/rag-chatbot.jpg`,
    TIME_SERIES: `${BASE_PATH}/images/projects/time-series.jpg`,
    OBJECT_DETECTION: `${BASE_PATH}/images/projects/object-detection.jpg`,
    SENTIMENT_ANALYSIS: `${BASE_PATH}/images/projects/sentiment-analysis.jpg`,
  },
} as const;

/**
 * Get absolute image path with fallback
 * @param imagePath - The image path from data
 * @param fallback - Optional fallback image path
 * @returns Absolute image path
 */
export const getImagePath = (imagePath: string | undefined, fallback: string = `${BASE_PATH}/images/placeholder.svg`): string => {
  if (!imagePath || !imagePath.trim()) {
    return fallback;
  }
  
  // If path already has BASE_PATH, return as is
  if (imagePath.startsWith(BASE_PATH)) {
    return imagePath;
  }
  
  // If path starts with /images/, add BASE_PATH
  if (imagePath.startsWith('/images/')) {
    return `${BASE_PATH}${imagePath}`;
  }
  
  // Otherwise return as is
  return imagePath;
};