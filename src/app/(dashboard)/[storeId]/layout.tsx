import { auth } from '@clerk/nextjs';
import { FC, ReactNode } from 'react';
import { redirect } from 'next/navigation';
import prismadb from '@/src/lib/prismadb';
import Navbar from '@/src/components/navigations/navbar';

interface IPropsDashboardLayout {
  children: ReactNode;
  params: { storeId: string };
}

const DashboardLayout: FC<IPropsDashboardLayout> = async ({
  children,
  params
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId
    }
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashboardLayout;
