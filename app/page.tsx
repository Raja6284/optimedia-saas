"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Image as ImageIcon, 
  Video, 
  Download, 
  Play,
  RotateCcw
} from 'lucide-react';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Demo animation effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);


  const handleDemoStart = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  const handleDemoReset = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const features = [
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Social Media Resizing",
      description: "Instantly resize images for Instagram, Facebook, Twitter, and more with perfect aspect ratios."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Smart Video Compression",
      description: "Compress videos up to 90% smaller while maintaining crystal-clear quality using AI algorithms."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Preview & Download",
      description: "Preview your optimized media before downloading. Export in multiple formats instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">OptiMedia</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
         
            {/* onclick go to sign-in page */}
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105" onClick={() => window.location.href = '/sign-in'}>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Optimize Your Media.{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Resize images for social media and compress videos with lightning speed. 
                Perfect for creators, marketers, and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" onClick={() => window.location.href = '/home'}>
                <a 
                  href="/home"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/10">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg h-24 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg h-24 flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>Processing...</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>AI Optimizing</span>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Every Creator
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to optimize your media content in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section - Fixed Responsive Version */}
      <section id="demo" className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              See It In{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Watch how quickly we can optimize your media files
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-sm border border-white/10">
            <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Media Optimizer Demo</h3>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={handleDemoStart}
                    disabled={isPlaying}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <Play className="w-4 h-4" />
                    Start
                  </button>
                  <button
                    onClick={handleDemoReset}
                    className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-medium text-white">Original File</h4>
                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-4 sm:p-6 border border-red-500/30">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-white text-sm sm:text-base truncate pr-2">vacation_video.mp4</span>
                      <span className="text-red-400 font-medium text-sm sm:text-base whitespace-nowrap">125.8 MB</span>
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm space-y-1">
                      <div>Resolution: 4K (3840x2160)</div>
                      <div>Duration: 2:34</div>
                      <div>Format: MP4</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-medium text-white">Optimized File</h4>
                  <div className={`bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-4 sm:p-6 border border-emerald-500/30 transition-opacity duration-300 ${progress < 100 ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-white text-sm sm:text-base truncate pr-2">vacation_video_optimized.mp4</span>
                      <span className="text-emerald-400 font-medium text-sm sm:text-base whitespace-nowrap">
                        {progress < 100 ? 'Processing...' : '12.3 MB'}
                      </span>
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm space-y-1">
                      <div>Resolution: 1080p (1920x1080)</div>
                      <div>Duration: 2:34</div>
                      <div>Format: MP4 • {progress < 100 ? 'Optimizing...' : '90% smaller'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white text-sm sm:text-base">
                  <span>Processing Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 sm:h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {progress === 100 && (
                  <div className="flex items-center justify-center pt-4">
                    <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base">
                      <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                      Download Optimized File
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators optimizing their media content every day
          </p>
          <a 
            href="/home"
            className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3"
          >
            Start Optimizing Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>



<footer className="border-t border-white/10 px-4 sm:px-6 py-8 sm:py-12 bg-black/30">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Brand Section */}
      <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">OptiMedia</span>
        </div>
        <p className="text-gray-300 mb-4 text-center md:text-left">
          Optimizing media for every platform, built with passion and innovation.
        </p>
        <p className="text-sm text-gray-400 text-center md:text-left">
          🚀 Crafted by a dedicated developer focused on creating solutions
        </p>
      </div>
      
      {/* Connect Section */}
      <div className="text-center md:text-left">
        <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
        <div className="space-y-3 text-gray-300">
          <a href="https://www.linkedin.com/in/raja-kumar-b1453826a/" 
             className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          
          <a href="https://github.com/Raja6284" 
             className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          
          <a href="https://twitter.com/_raja_berlin" 
             className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X (Twitter)</span>
          </a>
          
          <a href="https://instagram.com/raja_r4j4" 
             className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      
      {/* Project Hub Section */}
      <div className="text-center md:text-left">
        <h4 className="text-white font-semibold mb-4">Project Hub</h4>
        <div className="space-y-2 text-gray-300 mb-6">
          <a href="#" className="block hover:text-white transition-colors">Development Updates</a>
          <a href="#" className="block hover:text-white transition-colors">Feature Requests</a>
          <a href="#" className="block hover:text-white transition-colors">Bug Reports</a>
          <a href="#" className="block hover:text-white transition-colors">Community Feedback</a>
        </div>
        
        <div>
          <h5 className="text-white font-medium mb-3">Built With</h5>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300 hover:bg-white/20 transition-colors">Next.js</span>
            <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300 hover:bg-white/20 transition-colors">React</span>
            <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300 hover:bg-white/20 transition-colors">Tailwind</span>
            <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300 hover:bg-white/20 transition-colors">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-white/10 pt-8 text-center text-gray-300">
      <p>&copy; 2025 OptiMedia. Made with ❤️ by a passionate developer building innovative solutions.</p>
      <p className="text-sm mt-2 text-gray-400">
        Thank you for being part of this exciting journey! 🙏
      </p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Home;
