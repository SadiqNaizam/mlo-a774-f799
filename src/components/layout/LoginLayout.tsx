import * as React from 'react';
import { cn } from '@/lib/utils';

interface LoginLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A layout component that centers its content both vertically and horizontally
 * within the full screen viewport. It provides a consistent background color.
 * Ideal for standalone pages like login, signup, or 404 pages.
 */
const LoginLayout: React.FC<LoginLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background p-4 sm:p-6 md:p-8',
        className
      )}
    >
      {children}
    </main>
  );
};

export default LoginLayout;
