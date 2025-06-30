'use client';

import { ReactNode, useState, useEffect } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
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