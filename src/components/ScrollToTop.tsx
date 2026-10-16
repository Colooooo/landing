import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // A malformed percent escape in a shared URL must not crash navigation.
      }
      document.getElementById(id)?.scrollIntoView();
    } else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}
