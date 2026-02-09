
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onClick: (tool: Tool) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <button
      onClick={() => onClick(tool)}
      className={`
        ${tool.fullWidth ? 'col-span-2' : 'col-span-1'}
        ${tool.bgClass}
        ${tool.colorClass}
        border-2
        rounded-3xl
        p-4
        flex
        flex-col
        items-start
        text-left
        transition-all
        hover:scale-[1.02]
        active:scale-[0.98]
        shadow-sm
        relative
        overflow-hidden
        h-full
      `}
    >
      <div className={`p-2 rounded-xl bg-white mb-3 shadow-sm`}>
        {tool.icon}
      </div>
      <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">
        {tool.name}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed">
        {tool.description}
      </p>
      
      {/* Decorative background element for full-width cards to match the screenshot style */}
      {tool.fullWidth && (
        <div className="absolute right-0 top-0 opacity-10 p-4">
          {React.cloneElement(tool.icon as React.ReactElement, { size: 80 })}
        </div>
      )}
    </button>
  );
};
