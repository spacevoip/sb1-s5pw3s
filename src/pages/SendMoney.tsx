import React from 'react';
import { PaymentForm } from '../components/PaymentForm';
import { useTransactionStore } from '../store/useTransactionStore';
import { useNavigate } from 'react-router-dom';

export function SendMoney() {
  const { addTransaction, updateBalance } = useTransactionStore();
  const navigate = useNavigate();

  const handlePayment = (amount: number, description: string, pixKey: string) => {
    addTransaction({
      type: 'expense',
      amount,
      description,
      category: 'Pagamento',
      pixKey
    });
    updateBalance(-amount);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Enviar Dinheiro</h1>
      <PaymentForm onSubmit={handlePayment} />
    </div>
  );
}