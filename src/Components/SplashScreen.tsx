import React, { useEffect } from 'react';
import anime from 'animejs';

interface SplashScreenProps {
  finishLoading: () => void;  // Define the type of the finishLoading prop
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    const animation = anime.timeline({
      complete: () => finishLoading(),
    });

    animation.add({
      targets: "#logo",
      delay: 0,
      scale: 3,
      duration: 2000,
      easing: "easeInOutExpo",
    });

    return () => {
      
      animation.pause();
    };
  }, [finishLoading]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <p id="logo" className='text-xl text-black'>Buskily</p>
    </div>
  );
};

export default SplashScreen;
