import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {
  const canvasRef = useRef(null);
  const [typingText, setTypingText] = useState("DSA Problem Solver");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const texts = ["DSA Problem Solver", "Web Developer"];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = 150;

    const typeText = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typingSpeed = 100;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typingSpeed = 150;
      }

      setTypingText(currentText);

      if (!isDeleting && currentText === fullText) {
        // Pause when text is complete
        setTimeout(() => {
          isDeleting = true;
          typeText();
        }, 4000);
        return;
      } else if (isDeleting && currentText === "") {
        // Move to next text when deletion is complete
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(() => {
          typeText();
        }, 1000);
        return;
      }

      setTimeout(typeText, typingSpeed);
    };

    // Start the animation after a delay
    const timer = setTimeout(typeText, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 70%)`;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity * (0.5 + 0.5 * Math.sin(this.pulse));
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0005;
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time) * 20}, 70%, 15%)`);
      gradient.addColorStop(0.3, `hsl(${220 + Math.sin(time * 0.7) * 15}, 60%, 25%)`);
      gradient.addColorStop(0.7, `hsl(${240 + Math.sin(time * 0.5) * 25}, 50%, 20%)`);
      gradient.addColorStop(1, `hsl(${260 + Math.sin(time * 0.3) * 30}, 40%, 18%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines between nearby particles
      particles.forEach((particle, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = (120 - distance) / 120 * 0.4;
            ctx.strokeStyle = '#4e7ad2';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="home-section" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      
      {/* Additional animated overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
        `,
        animation: 'pulse 8s ease-in-out infinite alternate',
        zIndex: 1
      }} />

      <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '100vh', 
        position: 'relative', 
        zIndex: 2, 
        gap: 32, 
        padding: '2.5em 0'
      }}>
        {/* Left: Textual content */}
        <div style={{ 
          flex: '1 1 480px', 
          minWidth: 340, 
          maxWidth: 700, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 18, 
          alignItems: 'flex-start', 
          justifyContent: 'center', 
          paddingLeft: 32 
        }}>
          <span style={{ 
            background: 'rgba(44, 62, 80, 0.8)', 
            color: '#b3cfff', 
            borderRadius: 18, 
            padding: '0.4em 1.2em', 
            fontSize: '1em', 
            fontWeight: 500, 
            marginBottom: 10, 
            border: '1.5px solid #4e7ad2',
            backdropFilter: 'blur(10px)',
            animation: 'slideInLeft 1s ease-out'
          }}>
            Available for Opportunities
          </span>
          <div style={{ 
            fontSize: '1.6em', 
            color: '#e3e9f7', 
            fontWeight: 500, 
            marginBottom: 0, 
            marginTop: 10,
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            Hi, I'm
          </div>
          <h1 style={{ 
            fontWeight: 800, 
            fontSize: '3.2em', 
            color: '#fff', 
            margin: 0, 
            lineHeight: 1.1, 
            letterSpacing: -1,
            textShadow: '0 0 20px rgba(78, 122, 210, 0.5)',
            animation: 'fadeInUp 1s ease-out 0.4s both'
          }}>
            Satyam Jaiswal
          </h1>
          <div style={{ 
            fontWeight: 800, 
            fontSize: '2.5em', 
            color: '#fff', 
            margin: '0 0 18px 0', 
            textShadow: '2px 2px 8px #0003',
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            <span className="typing-effect">
              {typingText}
              <span className="blinking-cursor">|</span>
            </span>
          </div>
          <div style={{ 
            color: '#e3e9f7', 
            fontSize: '1.18em', 
            fontWeight: 500, 
            lineHeight: 1.6, 
            marginBottom: 8, 
            maxWidth: 600,
            animation: 'fadeInUp 1s ease-out 0.8s both'
          }}>
            Computer Science student with expertise in IoT and Full-Stack Development. Passionate about creating innovative solutions that drive real-world impact.
          </div>
          <div style={{ 
            color: '#e3e9f7', 
            fontSize: '1.05em', 
            marginTop: 4, 
            maxWidth: 600,
            animation: 'fadeInUp 1s ease-out 1s both'
          }}>
            Currently pursuing B.Tech at PSIT Kanpur with 8.1 CGPA and actively participating in hackathons and competitive programming.
          </div>
        </div>
        
        {/* Right: Avatar and info cards */}
        <div style={{ 
          flex: '1 1 340px', 
          minWidth: 320, 
          maxWidth: 420, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 32, 
          justifyContent: 'center', 
          paddingRight: 32,
          animation: 'slideInRight 1s ease-out 0.5s both'
        }}>
          {/* Avatar with initials and animated ring */}
          <div style={{ position: 'relative', width: 170, height: 170, marginBottom: 18 }}>
            <div style={{
              position: 'absolute',
              width: 170,
              height: 170,
              borderRadius: '50%',
              border: '4px solid #4e7ad2',
              boxShadow: '0 0 0 8px #b3cfff33, 0 0 20px rgba(78, 122, 210, 0.3)',
              animation: 'spin 8s linear infinite, glow 2s ease-in-out infinite alternate',
              zIndex: 0,
            }} />
            <div style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f5f8ff 0%, #e3e9f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3em',
              fontWeight: 700,
              color: '#2952a3',
              border: '6px solid #fff',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 4px 32px #4e7ad255, 0 0 20px rgba(78, 122, 210, 0.2)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              SJ
            </div>
          </div>
          
          {/* 2x2 Info Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 18, 
            width: '100%', 
            maxWidth: 370 
          }}>
            {[
              { label: 'EDUCATION', value: 'B.Tech CSE' },
              { label: 'LOCATION', value: 'Kanpur, UP' },
              { label: 'ACHIEVEMENT', value: 'Salesforce Champion' },
              { label: 'SPECIALIZATION', value: 'IoT & Full-Stack' }
            ].map((card, index) => (
              <div key={index} style={{ 
                background: 'rgba(45, 62, 94, 0.9)', 
                color: '#b3cfff', 
                borderRadius: 14, 
                padding: '1.1em 1em', 
                textAlign: 'center', 
                fontWeight: 700, 
                fontSize: '1.08em', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(78, 122, 210, 0.3)',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out ${1.2 + index * 0.1}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 30px rgba(78, 122, 210, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
              }}
              >
                <div style={{ 
                  fontSize: '0.85em', 
                  color: '#b3cfffcc', 
                  fontWeight: 600, 
                  marginBottom: 2 
                }}>
                  {card.label}
                </div>
                {card.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Keyframes */}
      <style>{`
        @keyframes spin { 
          100% { transform: rotate(360deg); } 
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 0 8px #b3cfff33, 0 0 20px rgba(78, 122, 210, 0.3); }
          100% { box-shadow: 0 0 0 8px #b3cfff66, 0 0 30px rgba(78, 122, 210, 0.6); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .typing-effect {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
        }
        
        .blinking-cursor {
          animation: blink-cursor 0.7s steps(1) infinite;
        }
        
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default Home;