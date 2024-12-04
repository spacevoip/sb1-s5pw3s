import { create } from 'zustand';
import { Transaction } from '../types/Transaction';

interface TransactionStore {
  balance: number;
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
  updateBalance: (amount: number) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  balance: 1000,
  transactions: [
    {
      id: '1',
      type: 'income',
      amount: 1500,
      description: 'Salário',
      date: new Date(2023, 9, 5),
      category: 'Receita',
      pixKey: 'joao@email.com'
    },
    {
      id: '2',
      type: 'expense',
      amount: 500,
      description: 'Aluguel',
      date: new Date(2023, 9, 10),
      category: 'Moradia',
      pixKey: '123.456.789-00'
    }
  ],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [
        {
          ...transaction,
          id: Math.random().toString(),
          date: new Date(),
        },
        ...state.transactions,
      ],
    })),
  updateBalance: (amount) =>
    set((state) => ({
      balance: state.balance + amount,
    })),
}));