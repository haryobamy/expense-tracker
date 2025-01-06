import { AccountCard } from '@/components/account-card';
import { Button } from '@/components/ui/button';
import React from 'react';

function LinkedCards() {
  return (
    <section className='min-h-screen bg-gray-50 px-4 py-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Linked Cards
        </h2>
        <Button className='bg-gradient-to-r from-blue-500 to-indigo-500 '>
          Activate Card
        </Button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
    </section>
  );
}

export default LinkedCards;
