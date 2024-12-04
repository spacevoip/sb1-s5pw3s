import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';

export function Header() {
  const { user } = useAuthStore();

  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">PaySystem</h1>
        {user && (
          <div className="text-sm text-gray-600">
            Bem-vindo, {user.name} ({user.username})
          </div>
        )}
      </div>
    </header>
  );
}