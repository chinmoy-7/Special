import React, { useEffect, useState } from 'react';
import "./LoveLoadingScreen.css"
const LoveLoadingScreen = ({loading,set}) => {
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
      setLoadingMessage((prevMessage) =>
        prevMessage === 'Loading...' ? 'Still Loading...' : 'Loading...'
      );
      set(false)
    }, 7000);
    // console.log(props)
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="love-loading-screen">
      <div className="background" />
      <div className="loading-content">
        <div className="heart-icon">❤️</div>
        <div className="loading-bar" style={{ width: `${progress}%` }} />
        <p className="loading-message">{loadingMessage}</p>
      </div>
    </div>
  );
};

export default LoveLoadingScreen;
