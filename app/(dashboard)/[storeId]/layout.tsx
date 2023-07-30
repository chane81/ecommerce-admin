import { auth } from '@clerk/nextjs';
import { FC, ReactNode } from 'react';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';

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
      <div>This will be a Navbar</div>
      {children}
    </>
  );
};

export default DashboardLayout;
