import prismadb from '@/src/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface IPropsSetupLayout {
  children: ReactNode;
}

const SetupLayout: FC<IPropsSetupLayout> = async ({ children }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
};

export default SetupLayout;
