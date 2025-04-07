"use client";

import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      // Set initial value
      setMatches(media.matches);

      // Create event listener
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

      // Add the listener
      media.addEventListener("change", listener);

      // Clean up
      return () => media.removeEventListener("change", listener);
    }

    return () => {};
  }, [query]);

  return matches;
};
