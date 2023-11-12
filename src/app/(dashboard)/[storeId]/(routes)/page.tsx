import prismadb from '@/src/lib/prismadb';
import { FC } from 'react';

interface IPropsDashboardPage {
  params: {
    storeId: string;
  };
}

const DashboardPage: FC<IPropsDashboardPage> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  });

  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
