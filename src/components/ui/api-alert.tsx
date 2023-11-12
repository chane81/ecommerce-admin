'use client';

import { FC } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Copy, Server } from 'lucide-react';
import { Badge, BadgeProps, badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin';
}

const textMap: Record<ApiAlertProps['variant'], string> = {
  public: 'Public',
  admin: 'Admin'
};

const variantMap: Record<ApiAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive'
};

export const ApiAlert: FC<ApiAlertProps> = ({
  title,
  description,
  variant = 'public'
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success('API Route copied to clipboard.');
  };

  return (
    <Alert>
      <AlertTitle className='flex items-center gap-x-2'>
        <Server className='h-4 w-4' />
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>

      <AlertDescription className='mt-4 ml-5 flex items-center justify-between'>
        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
          {description}
        </code>
        <Button variant='outline' size='icon' onClick={onCopy}>
          <Copy className='h-4 w-4' />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
