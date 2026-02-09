
// Fix: Import React to provide the 'React' namespace for React.ReactNode
import React from 'react';

export enum ToolType {
  KEYWORD_GENERATOR = 'Keyword Generator',
  TITLE_GENERATOR = 'Title Generator',
  SEO_ANALYSIS = 'SEO Analysis',
  TRENDING_IDEAS = 'Trending Video Ideas',
  CONTENT_GENERATOR = 'Content Generator',
  BEST_TIME = 'Best Time to Post',
  CONTENT_EXTRACTOR = 'Content Extractor',
  VIRAL_VIDEO_IDEAS = 'Viral Video Ideas',
  THUMBNAIL_MAKER = 'Thumbnail Maker',
  VIRAL_HOOK_WRITER = 'Viral Hook Writer',
  THUMBNAIL_CLICK_SCORE = 'Thumbnail Click Score',
  SEO_CHECKLIST = 'SEO Checklist',
  CHANNEL_DETAILS = 'Channel Details',
  TRENDING_VIDEOS = 'Trending Videos'
}

export interface Tool {
  id: string;
  name: ToolType;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
  fullWidth?: boolean;
}

export interface GenerationResult {
  content: string;
  type: ToolType;
}
