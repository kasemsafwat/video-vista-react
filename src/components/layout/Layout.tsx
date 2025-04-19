
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function Layout({ children, showSidebar = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-youtube-dark text-white">
      <Header />
      {showSidebar && <Sidebar />}
      <main className={`${showSidebar ? 'sm:pl-16 lg:pl-64' : ''} pt-16`}>
        {children}
      </main>
    </div>
  );
}
