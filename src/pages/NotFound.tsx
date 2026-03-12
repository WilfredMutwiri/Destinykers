import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/seo/PageSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-slate-950">
      <PageSEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        robots="noindex, nofollow"
      />
      <div className="text-center max-w-lg surface-panel p-10">
        <h1 className="mb-3 text-5xl font-bold text-white">404</h1>
        <p className="mb-6 text-lg text-slate-300">This page does not exist or was moved.</p>
        <Link to="/" className="inline-flex items-center px-6 h-11 rounded-full gradient-bg text-white font-medium">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
