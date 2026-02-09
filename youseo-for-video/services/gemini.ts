
import { GoogleGenAI } from "@google/genai";
import { ToolType } from "../types";

// Fix: Always use the exact initialization pattern with process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateToolContent(type: ToolType, input: string): Promise<string> {
  const model = "gemini-3-flash-preview";
  
  let prompt = "";
  switch (type) {
    case ToolType.KEYWORD_GENERATOR:
      prompt = `Act as a YouTube SEO expert. Generate a list of 10 high-ranking, low-competition keywords for a video about "${input}". Format as a clear list with reasoning for each.`;
      break;
    case ToolType.TITLE_GENERATOR:
      prompt = `Generate 5 viral, high-CTR YouTube video titles for the topic: "${input}". Use emotional triggers and curiosity gaps.`;
      break;
    case ToolType.VIRAL_HOOK_WRITER:
      prompt = `Write 3 different viral opening hooks (first 10 seconds) for a YouTube video about "${input}". Each hook should use a different psychological trigger (Conflict, Curiosity, Benefit).`;
      break;
    case ToolType.SEO_ANALYSIS:
      prompt = `Analyze the following YouTube video draft: "${input}". Provide an SEO score out of 100 and suggest 3 specific improvements for the title, description, and tags.`;
      break;
    case ToolType.VIRAL_VIDEO_IDEAS:
      prompt = `Based on the niche "${input}", suggest 5 unique, trending video ideas that have high potential for going viral on YouTube right now.`;
      break;
    case ToolType.CONTENT_GENERATOR:
      prompt = `Create a detailed video script outline, including intro, key points, and call to action for a video titled "${input}".`;
      break;
    default:
      prompt = `Help me with my YouTube channel about "${input}". Specifically, give me ideas related to ${type}.`;
  }

  try {
    // Fix: Using generateContent with model name and prompt directly in parameters
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    // Fix: Use the .text property directly instead of calling it as a method
    return response.text || "Sorry, I couldn't generate content at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please check your connection and try again.";
  }
}
