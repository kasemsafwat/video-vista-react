
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Star, BookmarkPlus, Download, Share } from "lucide-react";
import { toast } from "sonner";

interface VideoActionsProps {
  videoId: string;
  initialLikes: string;
}

export function VideoActions({ videoId, initialLikes }: VideoActionsProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [rating, setRating] = useState(0);
  
  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Like removed" : "Video liked!");
  };

  const handleSave = () => {
    setSaved(!saved);
    toast.success(saved ? "Removed from library" : "Saved to library!");
  };

  const handleDownload = () => {
    toast.success("Download started!");
    // Implement actual download logic here
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleRating = (value: number) => {
    setRating(value);
    toast.success(`Rated ${value} stars!`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 py-4 border-t border-b border-gray-800">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLike}
        className={`gap-2 ${liked ? 'text-blue-500' : ''}`}
      >
        <ThumbsUp size={20} />
        <span>{liked ? 'Liked' : 'Like'}</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleSave}
        className={`gap-2 ${saved ? 'text-yellow-500' : ''}`}
      >
        <BookmarkPlus size={20} />
        <span>{saved ? 'Saved' : 'Save'}</span>
      </Button>

      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            variant="ghost"
            size="sm"
            onClick={() => handleRating(star)}
            className={`p-1 ${rating >= star ? 'text-yellow-500' : ''}`}
          >
            <Star size={16} />
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleDownload}
        className="gap-2"
      >
        <Download size={20} />
        <span>Download</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleShare}
        className="gap-2"
      >
        <Share size={20} />
        <span>Share</span>
      </Button>
    </div>
  );
}
