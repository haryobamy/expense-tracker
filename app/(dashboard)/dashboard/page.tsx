'use client';
import React, { useEffect, useState } from 'react';
import { AccountCard } from '@/components/account-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpDown, PiggyBank, PlusCircle } from 'lucide-react';
import SavingCard from '@/components/saving-card';
import { useBoolean } from 'usehooks-ts';
import { QrCodeGenerator } from '@/components/qr-code-generator';
type Transactions = {
  id: number;
  description: string;
  amount: number;
  type: string;
};

type Accounts = { account_number: string; bank_name: string; id: number };

export default function Dashboard() {
  const [balance, setBalance] = useState<number>(60000);
  const [accounts, setAccounts] = useState<Accounts[]>([]);
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const { value: isOpen, setFalse, setTrue } = useBoolean();

  useEffect(() => {
    setBalance(70000);
    setAccounts([
      {
        id: 1,
        bank_name: 'First Bank',
        account_number: '1234567890',
      },
      {
        id: 2,
        bank_name: 'GTBank',
        account_number: '0987654321',
      },
    ]);

    setTransactions([
      {
        id: 1,
        description: 'Salary',
        amount: 2500000,
        type: 'income',
      },
      {
        id: 2,
        description: 'Groceries',
        amount: 15000,
        type: 'expenditure',
      },
    ]);
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 px-4 py-6'>
      <QrCodeGenerator isOpen={isOpen} onClose={setFalse} />
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Dashboard</h1>

      {/* Balance Section */}
      <div className='bg-white shadow rounded-lg p-6 mb-6'>
        <h2 className='text-xl font-semibold text-gray-800'>Account Balance</h2>
        <p className='text-3xl font-bold text-blue-600 mt-2'>
          ₦{balance.toLocaleString()}
        </p>
      </div>

      <div className='flex items-center gap-4 mb-4'>
        {/* <h4 className='text-xl font-semibold text-gray-800'>
          Send and Receive money
        </h4> */}

        <Button
          onClick={setTrue}
          className='bg-gradient-to-r from-blue-500 to-indigo-500'
        >
          <PlusCircle />
          Add Money
        </Button>
        <Button className='bg-gradient-to-r from-blue-500 to-indigo-500'>
          <ArrowUpDown />
          Transfer
        </Button>
        <Button className='bg-gradient-to-r from-blue-500 to-indigo-500'>
          <PiggyBank />
          Budget
        </Button>
      </div>

      <div className='mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h4 className='text-xl font-semibold text-gray-800'>Linked Cards</h4>
          <Link href='/cards'>
            <Button variant='link' className='text-base'>
              View All
            </Button>
          </Link>
        </div>
        <div className='grid  lg:grid-cols-3 gap-4'>
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </div>
      </div>

      <div className='mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h4 className='text-xl font-semibold text-gray-800'>
            {' '}
            Savings Plans
          </h4>
          <Link href='/budgets'>
            <Button variant='link' className='text-base'>
              View All
            </Button>
          </Link>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <SavingCard amount={20000} />
          <SavingCard amount={540000} />
          <SavingCard amount={210900} />
          <SavingCard amount={120940} />
        </div>
      </div>

      {/* <AccountCard /> */}

      {/* Linked Accounts Section */}
      <div className='bg-white shadow rounded-lg p-6 mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>
            Linked Accounts
          </h2>
          <Link href='/accounts'>
            <Button variant='link' className='text-base'>
              View All
            </Button>
          </Link>
        </div>

        <ul className='mt-4 space-y-3'>
          {accounts.map((account) => (
            <li
              key={account?.id}
              className='flex items-center justify-between bg-gray-100 p-4 rounded-lg'
            >
              <span className='text-gray-800 font-medium'>
                {account.bank_name}
              </span>
              <span className='text-gray-500'>{account.account_number}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Spending Activity Section */}
      <div className='bg-white shadow rounded-lg p-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>
            Recent Transactions
          </h2>

          <Link href='/transactions'>
            <Button variant='link' className='text-base'>
              View All
            </Button>
          </Link>
        </div>

        <ul className='mt-4 space-y-3'>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`flex items-center justify-between p-4 rounded-lg ${
                transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <span className='text-gray-800 font-medium'>
                {transaction.description}
              </span>
              <span
                className={`font-bold ${
                  transaction.type === 'income'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                ₦{transaction.amount.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
