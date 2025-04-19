
import { Link } from "react-router-dom";
import { Video } from "@/lib/data";

interface VideoCardProps {
  video: Video;
  compact?: boolean;
}

export function VideoCard({ video, compact = false }: VideoCardProps) {
  if (compact) {
    return (
      <Link to={`/video/${video.id}`} className="group flex gap-2 hover:bg-gray-800/50 p-2 rounded-lg">
        <div className="video-thumbnail flex-shrink-0 w-40">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover rounded-lg"
          />
          <span className="video-duration">{video.duration}</span>
        </div>
        <div className="flex-1">
          <h3 className="video-title">{video.title}</h3>
          <p className="text-xs text-gray-400 mt-1">{video.channel.name}</p>
          <div className="video-meta flex items-center gap-1">
            <span>{video.views} views</span>
            <span className="text-xs">•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
        <div className="video-thumbnail">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="video-duration">{video.duration}</span>
        </div>
        <div className="flex gap-3 mt-3">
          <div className="flex-shrink-0">
            <img 
              src={video.channel.avatar} 
              alt={video.channel.name} 
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="video-title">{video.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{video.channel.name}</p>
            <div className="video-meta flex items-center gap-1">
              <span>{video.views} views</span>
              <span className="text-xs">•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
