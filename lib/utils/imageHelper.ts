/**
 * Image path helper for consistent absolute paths across the application
 * Ensures images work correctly during development and production deployment
 */

export const IMAGE_PATHS = {
  // Hero and About Images
  HERO_PROFILE: '/images/hero-profile.jpg',
  ABOUT_ICON: '/images/about-icon.jpg',

  // Project Images
  PROJECTS: {
    LLM_FINETUNING: '/images/projects/llm-finetuning.jpg',
    LLM_SCRATCH: '/images/projects/llm-scratch.jpg',
    VISA_PREDICTION: '/images/projects/visa-prediction.jpg',
    ML_VISUALIZER: '/images/projects/ml-visualizer.jpg',
    URL_DETECTION: '/images/projects/url-detection.jpg',
    CUSTOMER_SATISFACTION: '/images/projects/customer-satisfaction.jpg',
    LLM_PRODUCTION: '/images/projects/llm-production.jpg',
    DEEP_LEARNING: '/images/projects/deep-learning.jpg',
    RAG_CHATBOT: '/images/projects/rag-chatbot.jpg',
    TIME_SERIES: '/images/projects/time-series.jpg',
    OBJECT_DETECTION: '/images/projects/object-detection.jpg',
    SENTIMENT_ANALYSIS: '/images/projects/sentiment-analysis.jpg',
  },
} as const;

/**
 * Get absolute image path with fallback
 * @param imagePath - The image path from data
 * @param fallback - Optional fallback image path
 * @returns Absolute image path
 */
export const getImagePath = (imagePath: string, fallback: string = '/images/placeholder.svg'): string => {
  return imagePath && imagePath.trim() ? imagePath : fallback;
};
