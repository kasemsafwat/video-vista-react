
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { VideoCard } from "@/components/video/VideoCard";
import { VideoActions } from "@/components/video/VideoActions";
import { useQuery } from "@tanstack/react-query";
import { fetchVideoById, fetchVideos } from "@/services/videoService";

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: video, isLoading: isVideoLoading } = useQuery({
    queryKey: ['video', id],
    queryFn: () => fetchVideoById(id || ""),
  });

  const { data: relatedVideos, isLoading: isRelatedLoading } = useQuery({
    queryKey: ['relatedVideos', id],
    queryFn: () => fetchVideos(),
    select: (videos) => videos.filter(v => v.id !== id).slice(0, 5),
  });

  if (isVideoLoading || !video) {
    return (
      <Layout>
        <div className="container mx-auto py-10 px-4 text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
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
              <h1 className="text-xl md:text-2xl font-bold mt-4">{video.title}</h1>
              
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
                </div>
              </div>

              <VideoActions videoId={video.id} initialLikes={video.likes} />
              
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-medium">{video.views} views</p>
                  <span className="text-xs">•</span>
                  <p className="text-sm font-medium">{video.timestamp}</p>
                </div>
                <p className="text-sm whitespace-pre-line">{video.description}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-96">
            <h2 className="text-lg font-bold mb-4">Related Videos</h2>
            {isRelatedLoading ? (
              <p>Loading related videos...</p>
            ) : (
              <div className="flex flex-col gap-3">
                {relatedVideos?.map((video) => (
                  <VideoCard key={video.id} video={video} compact />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;
