
import { Layout } from "@/components/layout/Layout";
import { VideoCard } from "@/components/video/VideoCard";
import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "@/services/videoService";

const Home = () => {
  const { data: videos, isLoading } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
  });

  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Recommended</h1>
        {isLoading ? (
          <p>Loading videos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos?.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
