'use client';

import { ReactNode, useState, useEffect } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative flex flex-col items-center">
        {/* Main Spinner Container */}
        <div className="relative w-16 h-16">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-gradient-to-r from-cyan-200 to-purple-200 rounded-full opacity-30"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-1 w-14 h-14 border-4 border-transparent border-t-gradient-to-r border-t-cyan-500 rounded-full animate-spin"></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-2 w-12 h-12 border-3 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Core Dot */}
          <div className="absolute inset-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Pulsing Dots */}
        <div className="flex space-x-2 mt-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-6 text-center">
          <p className="text-lg font-medium bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Loading
          </p>
          <p className="text-sm text-gray-500 mt-1 animate-pulse">
            Please wait ...
          </p>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse -z-10"></div>
      </div>
    </div>
  );
}

export default function AuthSignUpLayout({ children }: AuthLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Join us today and start your journey
            </p>
          </header>
          
          <main className="mt-8">
            <div className="bg-gray-200 rounded-xl shadow-lg border border-gray-200 px-1 p-1 sm:p-6 lg:p-8">
              {isLoading ? <LoadingSpinner /> : children}
            </div>
          </main>
          
          <footer className="text-center">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our{' '}
              <a href="/terms" className="font-medium text-indigo-600 hover:text-indigo-500 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500 underline">
                Privacy Policy
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}