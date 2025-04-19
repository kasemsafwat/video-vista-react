
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { VideoCard } from "@/components/video/VideoCard";
import { getVideoById, getRelatedVideos } from "@/lib/data";
import { ThumbsUp, ThumbsDown, Share, Download, Flag, MessageSquare } from "lucide-react";

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const video = getVideoById(id || "");
  const relatedVideos = getRelatedVideos(id || "");

  if (!video) {
    return (
      <Layout>
        <div className="container mx-auto py-10 px-4 text-center">
          <h1 className="text-2xl font-bold">Video not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <VideoPlayer videoUrl={video.videoUrl} />
            <div className="video-details">
              <h1 className="text-xl md:text-2xl font-bold">{video.title}</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={video.channel.avatar} 
                    alt={video.channel.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{video.channel.name}</h3>
                    <p className="text-sm text-gray-400">{video.channel.subscribers} subscribers</p>
                  </div>
                  <button className="ml-4 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200">
                    Subscribe
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <div className="flex rounded-full bg-gray-800 overflow-hidden">
                    <button className="flex items-center gap-1 px-4 py-2 hover:bg-gray-700">
                      <ThumbsUp size={18} />
                      <span>{video.likes}</span>
                    </button>
                    <div className="w-px bg-gray-700"></div>
                    <button className="px-4 py-2 hover:bg-gray-700">
                      <ThumbsDown size={18} />
                    </button>
                  </div>
                  
                  <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700">
                    <Share size={18} />
                    <span>Share</span>
                  </button>
                  
                  <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700">
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  
                  <button className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                    <Flag size={18} />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-medium">{video.views} views</p>
                  <span className="text-xs">•</span>
                  <p className="text-sm font-medium">{video.timestamp}</p>
                  <span className="text-xs">•</span>
                  <div className="flex flex-wrap gap-1">
                    {video.tags.map((tag) => (
                      <span key={tag} className="text-xs text-blue-400">#{tag}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm whitespace-pre-line">{video.description}</p>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Comments</h3>
                  <button className="flex items-center gap-1">
                    <MessageSquare size={18} />
                    <span>485</span>
                  </button>
                </div>
                
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="w-full bg-transparent border-b border-gray-700 pb-2 focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-96">
            <h2 className="text-lg font-bold mb-4">Related Videos</h2>
            <div className="flex flex-col gap-3">
              {relatedVideos.map((video) => (
                <VideoCard key={video.id} video={video} compact />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;
