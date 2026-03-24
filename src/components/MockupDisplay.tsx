import React from 'react';
import { Download, Loader2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MockupDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  onGenerate: () => void;
}

export const MockupDisplay: React.FC<MockupDisplayProps> = ({ imageUrl, isLoading, onGenerate }) => {
  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `merch-mockup-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="brutalist-card h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display text-xl font-bold uppercase">3. Preview</h3>
        {imageUrl && !isLoading && (
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        )}
      </div>

      <div className="flex-1 bg-zinc-100 border-2 border-black relative overflow-hidden min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <Loader2 className="w-12 h-12 animate-spin text-black" />
              <p className="font-mono text-xs uppercase tracking-widest animate-pulse">AI is crafting your mockup...</p>
            </motion.div>
          ) : imageUrl ? (
            <motion.img 
              key="image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={imageUrl} 
              alt="Mockup result" 
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-8"
            >
              <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">No preview generated yet</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button 
        onClick={onGenerate}
        disabled={isLoading}
        className="brutalist-button mt-6 w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <RefreshCw className="w-5 h-5" />
        )}
        {imageUrl ? 'Regenerate' : 'Generate Mockup'}
      </button>
    </div>
  );
};
