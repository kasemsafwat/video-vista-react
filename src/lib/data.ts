
// Mock data for videos
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  channel: {
    name: string;
    avatar: string;
    subscribers: string;
  };
  views: string;
  timestamp: string;
  duration: string;
  likes: string;
  tags: string[];
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Beautiful Mountain Landscapes - 4K Drone Footage",
    description: "Experience the majestic beauty of mountain landscapes captured in stunning 4K resolution using the latest drone technology. This breathtaking footage showcases some of the most spectacular mountain ranges from around the world.",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Nature Explorers",
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      subscribers: "1.2M"
    },
    views: "1.4M",
    timestamp: "2 weeks ago",
    duration: "10:35",
    likes: "124K",
    tags: ["nature", "mountains", "4k", "drone", "footage"]
  },
  {
    id: "2",
    title: "Learn React in 1 Hour - Full Course for Beginners",
    description: "A comprehensive introduction to React.js for complete beginners. Learn the core concepts of React including JSX, components, props, and state in just 1 hour.",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Code Masters",
      avatar: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      subscribers: "850K"
    },
    views: "2.1M",
    timestamp: "3 months ago",
    duration: "1:02:45",
    likes: "87K",
    tags: ["programming", "react", "tutorial", "beginner", "javascript"]
  },
  {
    id: "3",
    title: "The Ultimate Pasta Carbonara Recipe - Italian Cuisine",
    description: "Learn how to make the perfect pasta carbonara with this authentic Italian recipe. Chef Mario guides you through each step to create this classic Roman dish that's creamy and delicious.",
    thumbnail: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Gourmet Kitchen",
      avatar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1444&q=80",
      subscribers: "3.5M"
    },
    views: "876K",
    timestamp: "1 month ago",
    duration: "15:22",
    likes: "45K",
    tags: ["cooking", "italian", "pasta", "recipe", "food"]
  },
  {
    id: "4",
    title: "Modern House Tour - $10M Luxury Mansion with Ocean View",
    description: "Take a tour of this stunning $10 million luxury mansion featuring breathtaking ocean views, minimalist design, and cutting-edge smart home technology.",
    thumbnail: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Luxury Living",
      avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
      subscribers: "542K"
    },
    views: "3.2M",
    timestamp: "6 months ago",
    duration: "24:18",
    likes: "156K",
    tags: ["luxury", "mansion", "house tour", "real estate", "architecture"]
  },
  {
    id: "5",
    title: "Advanced CSS Animations - Create Stunning Effects",
    description: "Master advanced CSS animation techniques to create impressive visual effects for your websites. This tutorial covers keyframes, transitions, 3D transforms, and more.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Web Design Pro",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      subscribers: "720K"
    },
    views: "695K",
    timestamp: "2 months ago",
    duration: "42:11",
    likes: "35K",
    tags: ["css", "web design", "animations", "coding", "tutorial"]
  },
  {
    id: "6",
    title: "Tokyo Street Food Tour - Exploring Tsukiji Market",
    description: "Join this immersive tour of Tokyo's famous Tsukiji food market, where we sample some of the best street food Japan has to offer, from fresh sushi to delicious taiyaki.",
    thumbnail: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Travel Taste",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      subscribers: "2.1M"
    },
    views: "1.8M",
    timestamp: "1 year ago",
    duration: "18:45",
    likes: "92K",
    tags: ["japan", "food", "travel", "street food", "tokyo"]
  },
  {
    id: "7",
    title: "5 Morning Habits of Successful People",
    description: "Discover the 5 morning habits that highly successful people practice daily. Implementing these simple routines can dramatically improve your productivity and well-being.",
    thumbnail: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "Success Mindset",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      subscribers: "4.8M"
    },
    views: "5.4M",
    timestamp: "9 months ago",
    duration: "12:51",
    likes: "421K",
    tags: ["productivity", "habits", "success", "motivation", "lifestyle"]
  },
  {
    id: "8",
    title: "Building a Modern AI Assistant with OpenAI and React",
    description: "Learn how to build your own intelligent assistant app by leveraging OpenAI's powerful API with React. This comprehensive tutorial covers everything from setup to deployment.",
    thumbnail: "https://images.unsplash.com/photo-1677442135796-6a3522cfa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1432&q=80",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    channel: {
      name: "AI Developers",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      subscribers: "925K"
    },
    views: "423K",
    timestamp: "2 weeks ago",
    duration: "1:28:34",
    likes: "38K",
    tags: ["ai", "react", "openai", "programming", "web development"]
  }
];

// Get video by ID
export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

// Get related videos (excluding the current video)
export function getRelatedVideos(id: string, limit: number = 5): Video[] {
  return videos.filter(video => video.id !== id).slice(0, limit);
}
