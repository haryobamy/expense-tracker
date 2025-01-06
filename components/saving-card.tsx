import { Home } from 'lucide-react';
import React from 'react';

type Props = {
  amount?: string | number;
};

export default function SavingCard({ amount = 0 }: Props) {
  return (
    <div className='p-6 rounded-xl shadow-lg text-black h-[150px] flex flex-col gap-5 bg-gray-300'>
      <Home />
      <div>
        <h1 className='font-semibold text-lg'>New Car</h1>

        <span> ₦ {amount.toLocaleString()}</span>
      </div>
    </div>
  );
}
