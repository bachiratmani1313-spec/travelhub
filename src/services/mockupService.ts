import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export type ProductType = 't-shirt' | 'hoodie' | 'mug' | 'cap' | 'tote-bag' | 'phone-case';

export interface MockupRequest {
  logoBase64: string;
  logoMimeType: string;
  productType: ProductType;
  color?: string;
}

export async function generateLogo(brandName: string) {
  const model = "gemini-2.5-flash-image";
  
  const prompt = `Create a professional, minimalist, and modern logo for a boutique brand named "${brandName}". 
  The logo should be elegant, high-end, and suitable for luxury merchandise. 
  It should be a clean vector-style graphic on a solid white background. 
  Focus on sophisticated typography and a simple, iconic symbol. 
  No realistic photos, just a clean logo design.`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  throw new Error("Failed to generate logo image.");
}

export async function generateMockup({ logoBase64, logoMimeType, productType, color = 'white' }: MockupRequest) {
  const model = "gemini-2.5-flash-image";
  
  const prompt = `Create a professional, high-quality studio product mockup of a ${color} ${productType}. 
  The provided image is a logo. Place this logo naturally and realistically on the ${productType}. 
  Ensure the lighting, shadows, and fabric/material textures are realistic. 
  The background should be a clean, minimalist studio setting. 
  The logo should be centered and clearly visible.`;

  const response = await ai.models.generateContent({
    model,
    contents: {
      parts: [
        {
          inlineData: {
            data: logoBase64.split(',')[1] || logoBase64,
            mimeType: logoMimeType,
          },
        },
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  throw new Error("Failed to generate mockup image.");
}
