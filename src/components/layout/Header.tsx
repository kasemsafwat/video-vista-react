
import { Link } from "react-router-dom";
import { Search, Menu, Bell, Upload, Mic, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-youtube-dark border-b border-gray-800 px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-1">
            <svg className="h-6 w-6 text-youtube-red" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span className="hidden md:inline-block text-xl font-semibold text-white">VideoVista</span>
          </Link>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Input
                className="w-full bg-youtube-dark border-gray-700 text-white pl-4 pr-10 py-2 rounded-l-full"
                placeholder="Search"
              />
              <Button className="absolute right-0 h-full rounded-r-full bg-gray-800 hover:bg-gray-700 px-4 border border-gray-700 border-l-0">
                <Search className="h-4 w-4 text-white" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="ml-2 text-white">
              <Mic className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Upload className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
