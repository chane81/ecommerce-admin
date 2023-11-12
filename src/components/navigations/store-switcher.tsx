'use client';

import { ComponentPropsWithoutRef, FC, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/src/components/ui/popover';
import { Store } from '@prisma/client';
import { useStoreModal } from '@/src/hooks/use-store-modal';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import {
  Check,
  ChevronsUpDown,
  PlusCircle,
  Store as StoreIcon
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/src/components/ui/command';

type TPropsPopoverTrigger = ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface IPropsStoreSwitcher extends TPropsPopoverTrigger {
  items: Store[];
}

interface ISelectItem {
  label: string;
  value: string;
}

const StoreSwitcher: FC<IPropsStoreSwitcher> = ({ className, items = [] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems: ISelectItem[] = items.map(item => ({
    label: item.name,
    value: item.id
  }));

  const currentStore = formattedItems.find(
    item => item.value === params.storeId
  );

  const onStoreSelect = (store: ISelectItem) => {
    setIsOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          role='combobox'
          aria-label='Select a store'
          className={cn('w-[200px] justify-between')}
        >
          <StoreIcon className='mr-2 h-4 w-4'></StoreIcon>
          {currentStore?.label}
          <ChevronsUpDown className='ml-auto h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandList>
            <CommandInput placeholder='Search store'></CommandInput>
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading='Stores'>
              {formattedItems.map(store => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                >
                  <StoreIcon className='mr-2 h-4 w-4' />
                  {store.label}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      currentStore?.value === store.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  ></Check>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setIsOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className='mr-2 h-5 w-5' />
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StoreSwitcher;
