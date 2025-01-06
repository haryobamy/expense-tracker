import LeadsTable from '@/components/activity-table';
import React from 'react';

function Transactions() {
  return (
    <section className='min-h-screen bg-gray-50 px-4 py-6'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>
        Transaction History
      </h2>
      <LeadsTable />
    </section>
  );
}

export default Transactions;
