import React, { useState } from 'react';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import { useTransactionStore } from '../store/useTransactionStore';
import { useNavigate } from 'react-router-dom';
import { PaymentFormField } from '../components/PaymentFormField';

export function ReceiveMoney() {
  const [pixKey, setPixKey] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction, updateBalance } = useTransactionStore();
  const navigate = useNavigate();

  const handleGenerateCharge = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction({
      type: 'income',
      amount: Number(amount),
      description: 'Recebimento via PIX',
      category: 'Receita',
      pixKey
    });
    updateBalance(Number(amount));
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Receber Dinheiro</h1>
      
      <div className="bg-white rounded-xl p-6 shadow-md">
        <form onSubmit={handleGenerateCharge} className="space-y-4">
          <PaymentFormField
            id="pixKey"
            label="Sua Chave PIX"
            type="text"
            value={pixKey}
            onChange={(e) => setPixKey(e.target.value)}
            placeholder="CPF, E-mail, Telefone ou Chave Aleatória"
          />
          
          <PaymentFormField
            id="amount"
            label="Valor a Receber"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0,00"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <QrCodeIcon className="w-5 h-5" />
            <span>Gerar QR Code</span>
          </button>
        </form>
      </div>
    </div>
  );
}