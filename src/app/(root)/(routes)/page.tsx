'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect } from 'react';

const SetupPage = () => {
  const { isOpen, onOpen } = useStoreModal(state => ({
    onOpen: state.onOpen,
    isOpen: state.isOpen
  }));

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
