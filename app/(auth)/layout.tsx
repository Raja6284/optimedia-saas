import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | Your App',
  description: 'Create your account to get started',
};

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthSignUpLayout({ children }: AuthLayoutProps) {
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
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-8 sm:px-8">
              {children}
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