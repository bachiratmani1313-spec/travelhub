import React, { useState, useRef } from 'react';
import { Upload, X, Sparkles, Loader2 } from 'lucide-react';
import { generateLogo } from '../services/mockupService';

interface LogoUploadProps {
  onUpload: (base64: string, mimeType: string) => void;
}

export const LogoUpload: React.FC<LogoUploadProps> = ({ onUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [showGenerator, setShowGenerator] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPreview(base64);
        onUpload(base64, file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateLogo = async () => {
    if (!brandName.trim()) return;
    setIsGenerating(true);
    try {
      const result = await generateLogo(brandName);
      setPreview(result);
      onUpload(result, 'image/png');
      setShowGenerator(false);
    } catch (error) {
      console.error(error);
      alert("Failed to generate logo. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const clearFile = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="brutalist-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display text-xl font-bold uppercase">1. Logo</h3>
        {!preview && (
          <button 
            onClick={() => setShowGenerator(!showGenerator)}
            className="text-[10px] font-mono uppercase tracking-widest font-bold flex items-center gap-1 hover:underline"
          >
            <Sparkles className="w-3 h-3" />
            {showGenerator ? 'Back to upload' : 'Generate with AI'}
          </button>
        )}
      </div>

      {showGenerator ? (
        <div className="space-y-4">
          <input 
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Enter brand name (e.g. TravelHub)"
            className="w-full p-3 border-2 border-black font-mono text-xs uppercase tracking-widest focus:outline-none focus:bg-zinc-50"
          />
          <button 
            onClick={handleGenerateLogo}
            disabled={isGenerating || !brandName.trim()}
            className="w-full brutalist-button py-2 text-xs flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Generate Logo
          </button>
        </div>
      ) : !preview ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-zinc-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-black transition-colors bg-zinc-50"
        >
          <Upload className="w-12 h-12 mb-4 text-zinc-400" />
          <p className="text-sm font-medium text-zinc-600">Click or drag your logo here</p>
          <p className="text-xs text-zinc-400 mt-1">PNG, JPG or SVG (Max 5MB)</p>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative group">
          <img 
            src={preview} 
            alt="Logo preview" 
            className="w-full h-48 object-contain bg-zinc-100 rounded-lg p-4 border border-zinc-200"
          />
          <button 
            onClick={clearFile}
            className="absolute top-2 right-2 bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
