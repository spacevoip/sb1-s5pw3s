import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface BalanceProps {
  balance: number;
}

export function Balance({ balance }: BalanceProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-gray-600 text-sm font-medium mb-2">Saldo Disponível</h2>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">
          {formatCurrency(balance)}
        </span>
      </div>
    </div>
  );
}