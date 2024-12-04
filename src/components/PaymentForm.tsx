import React, { useState } from 'react';
import { formatCurrency } from '../utils/formatters';
import { PaymentFormField } from './PaymentFormField';

interface PaymentFormProps {
  onSubmit: (amount: number, description: string, pixKey: string) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [pixKey, setPixKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && description && pixKey) {
      onSubmit(Number(amount), description, pixKey);
      setAmount('');
      setDescription('');
      setPixKey('');
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-gray-900 text-lg font-semibold mb-4">Realizar Pagamento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <PaymentFormField
          id="amount"
          label="Valor"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0,00"
        />
        <PaymentFormField
          id="pixKey"
          label="Chave PIX"
          type="text"
          value={pixKey}
          onChange={(e) => setPixKey(e.target.value)}
          placeholder="CPF, E-mail, Telefone ou Chave Aleatória"
        />
        <PaymentFormField
          id="description"
          label="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite a descrição do pagamento"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Realizar Pagamento
        </button>
      </form>
    </div>
  );
}