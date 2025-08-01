"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    // Disable scroll on page while loading
    document.body.style.overflow = "hidden";

    // shrink after 3s, fade in rest of site after that
    const shrinkLogo = setTimeout(() => setShrink(true), 3000);
    const fadeLogo = setTimeout(() => setFade(true), 3700);
     const hideLogo = setTimeout(() => {
    document.body.style.overflow = "";
    setLoading(false);
  }, 4000);

    return () => {
      clearTimeout(fadeLogo);
      clearTimeout(hideLogo);
      clearTimeout(shrinkLogo);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center opacity-10 justify-center bg-white transition-opacity duration-300 ${
        fade ? "opacity-0" : "opacity-100"
      } `}
    >
      <img
        src="./logo/logo_ani_nobg.gif"
        alt="Mathilda Logo"
        className={`transition-all duration-700 ${shrink ? "w-0" : "w-40"}`}
      />
    </div>
  );
}
