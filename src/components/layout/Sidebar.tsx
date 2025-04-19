
import { Link } from "react-router-dom";
import { Home, Compass, Clock, ThumbsUp, History, PlaySquare, Film, Zap, Flame, Music, Gamepad, Trophy, Newspaper, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-4 px-3 py-3 text-sm rounded-lg transition-colors",
        active 
          ? "bg-gray-800 text-white" 
          : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
      )}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </Link>
  );
};

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-16 lg:w-64 bg-youtube-dark pt-16 hidden sm:block">
      <div className="h-full overflow-y-auto px-3 py-4">
        <nav className="flex flex-col gap-1">
          <SidebarItem icon={<Home className="h-5 w-5" />} label="Home" href="/" active />
          <SidebarItem icon={<Compass className="h-5 w-5" />} label="Explore" href="/explore" />
          <SidebarItem icon={<Zap className="h-5 w-5" />} label="Shorts" href="/shorts" />
          <SidebarItem icon={<PlaySquare className="h-5 w-5" />} label="Subscriptions" href="/subscriptions" />
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <SidebarItem icon={<Clock className="h-5 w-5" />} label="Watch Later" href="/playlist/watch-later" />
            <SidebarItem icon={<ThumbsUp className="h-5 w-5" />} label="Liked Videos" href="/playlist/liked" />
            <SidebarItem icon={<History className="h-5 w-5" />} label="History" href="/history" />
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 hidden lg:block">EXPLORE</h3>
            <SidebarItem icon={<Flame className="h-5 w-5" />} label="Trending" href="/trending" />
            <SidebarItem icon={<Music className="h-5 w-5" />} label="Music" href="/music" />
            <SidebarItem icon={<Film className="h-5 w-5" />} label="Movies" href="/movies" />
            <SidebarItem icon={<Gamepad className="h-5 w-5" />} label="Gaming" href="/gaming" />
            <SidebarItem icon={<Newspaper className="h-5 w-5" />} label="News" href="/news" />
            <SidebarItem icon={<Trophy className="h-5 w-5" />} label="Sports" href="/sports" />
            <SidebarItem icon={<Lightbulb className="h-5 w-5" />} label="Learning" href="/learning" />
          </div>
        </nav>
      </div>
    </aside>
  );
}
