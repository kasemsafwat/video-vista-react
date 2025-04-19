
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  videoUrl: string;
  autoPlay?: boolean;
}

export function VideoPlayer({ videoUrl, autoPlay = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = muted ? 0 : volume;
    }
  }, [volume, muted]);

  const handleMouseMove = () => {
    setIsControlsVisible(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setIsControlsVisible(false);
      }
    }, 3000);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] > 0 && muted) {
      setMuted(false);
    }
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;

    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div 
      ref={playerRef}
      className="video-container relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setIsControlsVisible(false)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full"
        autoPlay={autoPlay}
        onClick={togglePlay}
      />
      
      {/* Overlay for play/pause on click */}
      <div 
        className="absolute inset-0 cursor-pointer z-10"
        onClick={togglePlay}
      />
      
      {/* Video controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transition-opacity duration-300 z-20 ${
          isControlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress bar */}
        <Slider
          value={[currentTime]}
          min={0}
          max={duration || 100}
          step={0.1}
          onValueChange={handleSeek}
          className="mb-2"
        />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="text-white hover:text-gray-300">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="text-white hover:text-gray-300">
              <SkipBack size={20} />
            </button>
            <button className="text-white hover:text-gray-300">
              <SkipForward size={20} />
            </button>
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="text-white hover:text-gray-300">
                {muted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <div className="w-20">
                <Slider
                  value={[muted ? 0 : volume]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                />
              </div>
            </div>
            <div className="text-xs text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="text-white hover:text-gray-300">
              <Settings size={20} />
            </button>
            <button onClick={toggleFullscreen} className="text-white hover:text-gray-300">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Big play button when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button 
            onClick={togglePlay}
            className="bg-white/20 text-white rounded-full p-5 backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Play size={32} fill="white" />
          </button>
        </div>
      )}
    </div>
  );
}
