import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000); // Star Density
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size
        x: Math.random() * 100, // Random horizontal position
        y: Math.random() * 100, // Random vertical position
        opacity: Math.random() * 0.5 + 0.5, // Random opacity
        animationDuration: Math.random() * 4 + 2, // Random animation duration
      });
    }

    setStars(newStars)
  }

  const generateMeteors = () => {
    const numberOfMeteors = 4; 
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Random size between 1 and 3
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15, // Random delay before the meteor starts
        animationDuration: Math.random() * 3 + 3, // Random animation duration between 3 and 6 seconds
        color: `hsl(${Math.floor(Math.random() * 360)}, 90%, 70%)`,
      });
    }

    setMeteors(newMeteors)
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="star animate-pulse-subtle" 
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div 
          key={meteor.id} 
          className="meteor animate-meteor" 
          style={{
            width: meteor.size * 50 + 'px',
            height: meteor.size * 2 + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDelay : meteor.delay,
            animationDuration: meteor.animationDuration + 's',
            background: `linear-gradient(90deg, ${meteor.color}, transparent)`,
            boxShadow: `0 0 15px ${meteor.color}`,
          }}
        />
      ))}
    </div>
  );
};