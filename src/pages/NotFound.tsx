import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found (404) — Sakhr Software";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const restorers = [
      setMeta(
        'meta[name="description"]',
        "name",
        "description",
        "The page you are looking for could not be found. Return to the Sakhr Software homepage."
      ),
      setMeta(
        'meta[property="og:title"]',
        "property",
        "og:title",
        "Page Not Found — Sakhr Software"
      ),
      setMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        "The page you are looking for could not be found."
      ),
    ];

    return () => {
      document.title = prevTitle;
      restorers.forEach((r) => r());
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
