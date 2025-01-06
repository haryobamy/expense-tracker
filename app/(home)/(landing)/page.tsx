'use client';
import LoginForm from '@/components/login-form';
import React from 'react';
import { useBoolean } from 'usehooks-ts';

export default function HomePage() {
  const { value: isOpen, setFalse, setTrue } = useBoolean();
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>
        Welcome to Deji Wallet
      </h1>
      <p className='text-lg text-gray-700 mb-8'>
        Manage your finances with ease. Track your expenses, link your accounts,
        and send/receive money via QR codes.
      </p>
      {/* <Link href='/dashboard'> */}
      <button
        onClick={setTrue}
        className='bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition'
      >
        Get Started
      </button>
      {/* </Link> */}

      <LoginForm isOpen={isOpen} onClose={setFalse} />
    </div>
  );
}
