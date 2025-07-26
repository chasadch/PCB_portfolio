"use client"

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with ssr: false to prevent server-side rendering
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div style={{ width: '95%', height: '300px' }} />
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only update on client-side to avoid hydration mismatch
    setIsMounted(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  // Return a placeholder with same dimensions during SSR
  if (!isMounted) {
    return <div style={{ width: '95%', height: '300px' }} />; 
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;