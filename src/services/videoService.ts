
import { Video } from "@/lib/data";

// Simulate API endpoint URL (would be replaced with real endpoint in production)
const API_BASE_URL = "https://api.example.com/v1";

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate fetching all videos from API
export async function fetchVideos(): Promise<Video[]> {
  try {
    // Simulate network delay
    await delay(800);
    
    // In production, this would be: const response = await fetch(`${API_BASE_URL}/videos`);
    const response = await import("@/lib/data").then(m => m.videos);
    return response;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw new Error("Failed to fetch videos");
  }
}

// Simulate fetching a single video by ID from API
export async function fetchVideoById(id: string): Promise<Video | undefined> {
  try {
    // Simulate network delay
    await delay(600);
    
    // In production, this would be: const response = await fetch(`${API_BASE_URL}/videos/${id}`);
    const response = await import("@/lib/data").then(m => m.getVideoById(id));
    
    if (!response) {
      throw new Error("Video not found");
    }
    
    return response;
  } catch (error) {
    console.error("Error fetching video:", error);
    throw new Error("Failed to fetch video");
  }
}
