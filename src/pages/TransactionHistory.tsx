import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { useTransactionStore } from '../store/useTransactionStore';

export function TransactionHistory() {
  const { transactions } = useTransactionStore();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Histórico de Transações</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}