import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout showSidebar={false}>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-7xl font-bold text-youtube-red mb-4">404</h1>
          <p className="text-2xl text-white mb-4">This page isn't available. Sorry about that.</p>
          <p className="text-gray-400 mb-8">Try searching for something else.</p>
          <Link to="/">
            <Button className="bg-youtube-red hover:bg-red-700 flex items-center gap-2">
              <Home size={16} />
              Return to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
