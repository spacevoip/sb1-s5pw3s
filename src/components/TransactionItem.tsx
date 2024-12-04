import React from 'react';
import { Transaction } from '../types/Transaction';
import { formatCurrency } from '../utils/formatters';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex items-center space-x-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {transaction.type === 'income' ? '+' : '-'}
        </div>
        <div>
          <p className="font-medium text-gray-900">{transaction.description}</p>
          <p className="text-sm text-gray-500">{transaction.category}</p>
          {transaction.pixKey && (
            <p className="text-xs text-gray-400">PIX: {transaction.pixKey}</p>
          )}
        </div>
      </div>
      <div className="text-right">
        <p className={`font-medium ${
          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
        }`}>
          {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
        </p>
        <p className="text-sm text-gray-500">
          {format(transaction.date, "d 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
    </div>
  );
}