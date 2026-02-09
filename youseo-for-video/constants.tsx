
import React from 'react';
import { 
  Hash, 
  Type, 
  BarChart3, 
  Zap, 
  PenTool, 
  Clock, 
  FileSearch, 
  Video, 
  Image as ImageIcon, 
  Anchor, 
  MousePointerClick, 
  CheckSquare, 
  Users, 
  Flame 
} from 'lucide-react';
import { Tool, ToolType } from './types';

export const TOOLS: Tool[] = [
  {
    id: 'keyword-gen',
    name: ToolType.KEYWORD_GENERATOR,
    description: 'Generate winning keywords to boost views!',
    icon: <Hash className="w-6 h-6" />,
    colorClass: 'border-pink-200 text-pink-600',
    bgClass: 'bg-pink-50'
  },
  {
    id: 'title-gen',
    name: ToolType.TITLE_GENERATOR,
    description: 'Get the best video titles to boost your rank!',
    icon: <Type className="w-6 h-6" />,
    colorClass: 'border-orange-200 text-orange-600',
    bgClass: 'bg-orange-50'
  },
  {
    id: 'seo-analysis',
    name: ToolType.SEO_ANALYSIS,
    description: 'Check your video\'s SEO score and fix issues quickly to get organic traffic!',
    icon: <BarChart3 className="w-6 h-6" />,
    colorClass: 'border-purple-200 text-purple-600',
    bgClass: 'bg-purple-50',
    fullWidth: true
  },
  {
    id: 'trending-ideas',
    name: ToolType.TRENDING_IDEAS,
    description: 'Discover trending topics and get video ideas to grow and monetize your channel faster!',
    icon: <Flame className="w-6 h-6" />,
    colorClass: 'border-green-200 text-green-600',
    bgClass: 'bg-green-50',
    fullWidth: true
  },
  {
    id: 'content-gen',
    name: ToolType.CONTENT_GENERATOR,
    description: 'Create all your video content in one click!',
    icon: <PenTool className="w-6 h-6" />,
    colorClass: 'border-red-200 text-red-600',
    bgClass: 'bg-red-50'
  },
  {
    id: 'best-time',
    name: ToolType.BEST_TIME,
    description: 'Find the best time to post to maximize reach!',
    icon: <Clock className="w-6 h-6" />,
    colorClass: 'border-blue-200 text-blue-600',
    bgClass: 'bg-blue-50'
  },
  {
    id: 'content-extractor',
    name: ToolType.CONTENT_EXTRACTOR,
    description: 'Extract any YouTube video\'s content to boost your video rank!',
    icon: <FileSearch className="w-6 h-6" />,
    colorClass: 'border-orange-200 text-orange-600',
    bgClass: 'bg-orange-50'
  },
  {
    id: 'viral-ideas',
    name: ToolType.VIRAL_VIDEO_IDEAS,
    description: 'Viral video ideas to grow and monetize faster!',
    icon: <Video className="w-6 h-6" />,
    colorClass: 'border-indigo-200 text-indigo-600',
    bgClass: 'bg-indigo-50'
  },
  {
    id: 'thumbnail-maker',
    name: ToolType.THUMBNAIL_MAKER,
    description: 'Create eye-catching video thumbnails that attract viewers and boost views!',
    icon: <ImageIcon className="w-6 h-6" />,
    colorClass: 'border-rose-200 text-rose-600',
    bgClass: 'bg-rose-50',
    fullWidth: true
  },
  {
    id: 'hook-writer',
    name: ToolType.VIRAL_HOOK_WRITER,
    description: 'Generate intro lines that keep viewers watching!',
    icon: <Anchor className="w-6 h-6" />,
    colorClass: 'border-blue-200 text-blue-600',
    bgClass: 'bg-blue-50',
    fullWidth: true
  },
  {
    id: 'click-score',
    name: ToolType.THUMBNAIL_CLICK_SCORE,
    description: 'Predict thumbnail clicks before you even upload and optimize for maximum...',
    icon: <MousePointerClick className="w-6 h-6" />,
    colorClass: 'border-amber-200 text-amber-600',
    bgClass: 'bg-amber-50'
  },
  {
    id: 'seo-checklist',
    name: ToolType.SEO_CHECKLIST,
    description: 'Ensure video follows all best practices!',
    icon: <CheckSquare className="w-6 h-6" />,
    colorClass: 'border-cyan-200 text-cyan-600',
    bgClass: 'bg-cyan-50'
  },
  {
    id: 'channel-details',
    name: ToolType.CHANNEL_DETAILS,
    description: 'Get every detail of any channel instantly!',
    icon: <Users className="w-6 h-6" />,
    colorClass: 'border-sky-200 text-sky-600',
    bgClass: 'bg-sky-50'
  },
  {
    id: 'trending-videos',
    name: ToolType.TRENDING_VIDEOS,
    description: 'See what\'s trending, and learn from it!',
    icon: <Zap className="w-6 h-6" />,
    colorClass: 'border-lime-200 text-lime-600',
    bgClass: 'bg-lime-50'
  }
];
