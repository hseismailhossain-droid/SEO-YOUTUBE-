
import React, { useState } from 'react';
import { X, Send, Loader2, Copy, Check } from 'lucide-react';
import { Tool, ToolType } from '../types';
import { generateToolContent } from '../services/gemini';

interface ToolModalProps {
  tool: Tool | null;
  onClose: () => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({ tool, onClose }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!tool) return null;

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const content = await generateToolContent(tool.name, input);
    setResult(content);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className={`p-6 ${tool.bgClass} flex items-center justify-between border-b ${tool.colorClass}`}>
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl">
              {tool.icon}
            </div>
            <div>
              <h2 className="font-bold text-gray-800 text-xl">{tool.name}</h2>
              <p className="text-xs text-gray-500">{tool.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {tool.name === ToolType.SEO_ANALYSIS ? "Enter Video Details" : "Enter Topic or Keywords"}
            </label>
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={tool.name === ToolType.SEO_ANALYSIS ? "Paste your title and description here..." : "e.g., How to cook pasta"}
                className="w-full border-2 border-gray-100 rounded-2xl p-4 pr-12 focus:border-indigo-400 focus:outline-none transition-all resize-none h-32"
              />
              <button
                disabled={loading || !input.trim()}
                onClick={handleGenerate}
                className="absolute bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {result && (
            <div className="animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Result</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  {copied ? (
                    <><Check className="w-3.5 h-3.5" /> Copied!</>
                  ) : (
                    <><Copy className="w-3.5 h-3.5" /> Copy Result</>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-gray-700 text-sm whitespace-pre-wrap max-h-60 overflow-y-auto custom-scrollbar">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
