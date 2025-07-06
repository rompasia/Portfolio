import React, { useState, useEffect, useCallback, useRef } from 'react';
import Patty from './Patty.jpg';

const ForHer = () => {
  const [showHeartContainer, setShowHeartContainer] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(true);
  const [showFireworks, setShowFireworks] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  
  // Refs for DOM elements
  const flowersHeartRef = useRef(null);
  const fireworksContainerRef = useRef(null);

  const createSparkles = useCallback(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 1.5 + 's';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
      }, i * 100);
    }
  }, []);

  const showHeart = useCallback(() => {
    setShowHeartContainer(true);
    
    // Wait for the next tick to ensure the element is rendered
    setTimeout(() => {
      const flowersHeart = flowersHeartRef.current;
      if (!flowersHeart) return;
      
      const heartPoints = calculateHeartPoints(175, 150, 120, 90);
      
      heartPoints.forEach((point, index) => {
        setTimeout(() => {
          const flower = document.createElement("div");
          flower.classList.add("flower");
          flower.style.left = `${point.x}px`;
          flower.style.top = `${point.y}px`;
          flower.style.animationDelay = `${index * 0.05}s`;
          flower.addEventListener('click', () => {
            flower.style.animation = 'flowerBloom 0.5s ease-out';
            createSparkles();
          });
          flowersHeart.appendChild(flower);
        }, index * 50);
      });

      setTimeout(() => {
        setShowMessage(true);
      }, heartPoints.length * 50);
    }, 100);
  }, [createSparkles]);

  const startFireworks = useCallback(() => {
    const fireworksContainer = fireworksContainerRef.current;
    if (!fireworksContainer) return;
    
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#ff6347', '#98fb98', '#87ceeb'];
    
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => firework.remove(), 2000);
      }, i * 200);
    }
    
    setTimeout(() => {
      setShowLoadingText(false);
      setShowFireworks(false);
      showHeart();
    }, 4000);
  }, [showHeart]);

  useEffect(() => {
    createSparkles();
    // Delay fireworks to ensure container is rendered
    setTimeout(() => {
      startFireworks();
    }, 100);
  }, [createSparkles, startFireworks]);

  const calculateHeartPoints = (cx, cy, width, height) => {
    const points = [];
    for (let angle = 0; angle < 360; angle += 8) {
      const radian = (angle * Math.PI) / 180;
      const x = cx + width * Math.sin(radian) ** 3;
      const y = cy - height * (0.9 * Math.cos(radian) - 0.3 * Math.cos(2 * radian) - 0.2 * Math.cos(3 * radian) - 0.1 * Math.cos(4 * radian));
      points.push({ x, y });
    }
    return points;
  };

  const showLoveMessage = () => {
    const messages = [
      "You make every day brighter just by being in it! ✨",
      "I fall in love with you all over again every single day 💕",
      "You're not just my girlfriend, you're my best friend and soulmate 💖",
      "Thank you for being the most amazing person I know! 🌟",
      "Every moment with you is a treasure I'll keep forever 💎",
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    createSparkles();
  };

  const createMoreFireworks = () => {
    const fireworksContainer = fireworksContainerRef.current;
    if (!fireworksContainer) return;
    
    fireworksContainer.style.display = "block";
    
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#ff6347', '#98fb98', '#87ceeb', '#dda0dd'];
    
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.boxShadow = `0 0 30px ${colors[Math.floor(Math.random() * colors.length)]}`;
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => firework.remove(), 2000);
      }, i * 100);
    }
    
    setTimeout(() => {
      fireworksContainer.style.display = "none";
    }, 3000);
  };

  const playMusic = () => {
    if (!musicPlaying) {
      const musicNotes = ['🎵', '🎶', '🎼', '🎤', '🎸'];
      
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const note = document.createElement('div');
          note.innerHTML = musicNotes[Math.floor(Math.random() * musicNotes.length)];
          note.style.position = 'absolute';
          note.style.fontSize = '24px';
          note.style.left = Math.random() * 100 + '%';
          note.style.top = Math.random() * 100 + '%';
          note.style.animation = 'float 3s ease-in-out forwards';
          note.style.zIndex = '100';
          document.body.appendChild(note);
          
          setTimeout(() => note.remove(), 3000);
        }, i * 200);
      }
      
      alert("🎵 Playing our favorite song in my heart! 🎵");
      setMusicPlaying(true);
      
      setTimeout(() => {
        setMusicPlaying(false);
      }, 10000);
    }
  };

  const showSurprise = () => {
    const surprises = [
      "You clicked on your beautiful photo! 📸✨",
      "That's my favorite picture of you! 😍",
      "You look absolutely stunning! 💕",
      "This photo always makes me smile! 😊"
    ];
    
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    alert(randomSurprise);
    createSparkles();
  };

  // Add ambient sparkles effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (showHeartContainer) {
        createSparkles();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [showHeartContainer, createSparkles]);

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      backgroundAttachment: "fixed",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      overflowX: "hidden",
      overflowY: "auto",
      position: "relative",
      padding: "20px 0"
    }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');
        
        body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 192, 203, 0.3) 0%, transparent 50%);
          animation: backgroundShift 8s ease-in-out infinite alternate;
        }

        @keyframes backgroundShift {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }

        .floating-heart {
          position: absolute;
          color: rgba(255, 182, 193, 0.6);
          font-size: 20px;
          animation: float 6s ease-in-out infinite;
          z-index: 1;
        }

        .floating-heart:nth-child(odd) {
          animation-delay: -3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        .firework {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: explode 2s ease-out forwards;
        }

        @keyframes explode {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }

        .forher-containerFadeIn {
          animation: forher-containerFadeIn 1s ease-out forwards;
        }

        @keyframes forher-containerFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .flower {
          position: absolute;
          width: 25px;
          height: 25px;
          background: radial-gradient(circle, #ff69b4, #ff1493);
          border-radius: 50%;
          opacity: 0;
          animation: flowerBloom 1s ease-out forwards;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .flower:hover {
          transform: scale(1.3);
          filter: brightness(1.2);
        }

        .flower::before {
          content: '🌸';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
        }

        @keyframes flowerBloom {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 0.8; transform: scale(1.2) rotate(180deg); }
          100% { opacity: 1; transform: scale(1) rotate(360deg); }
        }

        .forher-messageSlideIn {
          animation: forher-messageSlideIn 1s ease-out forwards;
        }

        @keyframes forher-messageSlideIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .forher-title {
          margin: 20px 0;
          font-size: 3em;
          font-family: 'Dancing Script', cursive;
          font-weight: 700;
          background: linear-gradient(45deg, #ff69b4, #ff1493, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 105, 180, 0.5);
          animation: forher-textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes forher-textGlow {
          from { filter: brightness(1); }
          to { filter: brightness(1.2); }
        }

        .forher-message-p {
          margin: 15px 0;
          font-size: 1.3em;
          line-height: 1.6;
          font-weight: 300;
          opacity: 0;
          animation: forher-fadeInUp 1s ease-out 0.5s forwards;
        }

        @keyframes forher-fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .patty-photo {
          margin-top: 30px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
          border: 4px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          animation: patty-imageReveal 1s ease-out 1s forwards;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .patty-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 60px rgba(255, 105, 180, 0.6);
        }

        @keyframes patty-imageReveal {
          from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .forher-interactive-buttons {
          margin-top: 30px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          animation: forher-fadeInUp 1s ease-out 1.5s forwards;
        }

        .forher-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          background: linear-gradient(45deg, #ff69b4, #ff1493);
          color: white;
          font-size: 1em;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
          position: relative;
          overflow: hidden;
        }

        .forher-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
        }

        .forher-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .forher-btn:hover::before {
          left: 100%;
        }

        .loading-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2em;
          font-family: 'Dancing Script', cursive;
          z-index: 5;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffd700;
          border-radius: 50%;
          animation: sparkle 1.5s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .forher-title { font-size: 2.5em; }
          .forher-message-p { font-size: 1.1em; }
          .patty-photo { width: 200px; height: 200px; }
          .forher-interactive-buttons { gap: 10px; }
          .forher-btn { padding: 10px 20px; font-size: 0.9em; }
        }
      `}</style>

      {/* Loading Text */}
      {showLoadingText && (
        <div className="loading-text">Creating something special for you... 💕</div>
      )}

      {/* Floating Hearts Background */}
      <div className="floating-heart" style={{ top: '10%', left: '10%' }}>💕</div>
      <div className="floating-heart" style={{ top: '20%', left: '85%' }}>💖</div>
      <div className="floating-heart" style={{ top: '70%', left: '15%' }}>💗</div>
      <div className="floating-heart" style={{ top: '80%', left: '80%' }}>💝</div>
      <div className="floating-heart" style={{ top: '30%', left: '60%' }}>💞</div>
      <div className="floating-heart" style={{ top: '60%', left: '40%' }}>💓</div>

      {/* Fireworks Container */}
      <div 
        ref={fireworksContainerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none',
          display: showFireworks ? 'block' : 'none'
        }}
      />

      {/* Main Content */}
      {showHeartContainer && (
        <div 
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1000px',
            zIndex: 20
          }}
          className="forher-containerFadeIn"
        >
          <div 
            ref={flowersHeartRef}
            style={{
              width: '350px',
              height: '300px',
              position: 'relative',
              background: 'transparent',
              marginBottom: '30px',
              filter: 'drop-shadow(0 0 20px rgba(255, 182, 193, 0.5))'
            }}
          />
          
          {showMessage && (
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: '90%',
                zIndex: 30
              }}
              className="forher-messageSlideIn"
            >
              <h1 className="forher-title">Happy Girlfriend's Day, Pat! 💕</h1>
              <p className="forher-message-p">
                Every day with you feels like a celebration, but today is extra special because I get to remind you how much you mean to me. You bring so much joy, love, and laughter into my life.
              </p>
              <p className="forher-message-p">
                Thank you for being my partner-in-crime, my bestfriend, and my greatest adventure. Here's to many more moments together! 🌸
              </p>
              <p className="forher-message-p">
                Trauma Troopers for LIFE! 💪
              </p>
              <img 
                src={Patty}
                alt="Pat's portrait" 
                className="patty-photo"
                onClick={showSurprise}
              />
              
              <div className="forher-interactive-buttons">
                <button className="forher-btn" onClick={showLoveMessage}>💝 Love Note</button>
                <button className="forher-btn" onClick={createMoreFireworks}>🎆 More Magic</button>
                <button className="forher-btn" onClick={playMusic}>🎵 Our Song</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ForHer;