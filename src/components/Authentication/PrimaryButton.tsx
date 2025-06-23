import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface PrimaryButtonProps extends ButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn(
        'w-full text-lg py-6 rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
