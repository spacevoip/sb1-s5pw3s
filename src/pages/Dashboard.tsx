import React from 'react';
import { Balance } from '../components/Balance';
import { TransactionList } from '../components/TransactionList';
import { ArrowUpCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTransactionStore } from '../store/useTransactionStore';

export function Dashboard() {
  const { balance, transactions } = useTransactionStore();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Balance balance={balance} />
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/send"
              className="flex items-center justify-center space-x-2 p-4 bg-white rounded-xl shadow-md hover:bg-gray-50 transition-colors"
            >
              <ArrowUpCircleIcon className="w-6 h-6 text-red-600" />
              <span className="font-medium">Enviar</span>
            </Link>
            <Link
              to="/receive"
              className="flex items-center justify-center space-x-2 p-4 bg-white rounded-xl shadow-md hover:bg-gray-50 transition-colors"
            >
              <ArrowDownCircleIcon className="w-6 h-6 text-green-600" />
              <span className="font-medium">Receber</span>
            </Link>
          </div>
        </div>
        
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}