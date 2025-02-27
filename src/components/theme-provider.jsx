import React, { useEffect } from "react";

// Simplified theme provider that only applies dark mode
export function ThemeProvider({
  children,
  forcedTheme = "dark",
}) {
  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");
    
    // Add dark theme class
    root.classList.add(forcedTheme);
    body.classList.add(forcedTheme);
  }, [forcedTheme]);

  return <>{children}</>;
}
