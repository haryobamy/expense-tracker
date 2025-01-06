import SavingCard from '@/components/saving-card';
import React from 'react';

export default function page() {
  return (
    <div>
      <section className='min-h-screen bg-gray-50 px-4 py-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Linked Cards
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <SavingCard amount={20000} />
          <SavingCard amount={540000} />
          <SavingCard amount={210900} />
          <SavingCard amount={120940} />
        </div>
      </section>
    </div>
  );
}
