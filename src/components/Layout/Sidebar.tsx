import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useAuthStore } from '../../store/useAuthStore';

const menuItems = [
  { path: '/', icon: HomeIcon, label: 'Dashboard' },
  { path: '/send', icon: ArrowUpCircleIcon, label: 'Enviar' },
  { path: '/receive', icon: ArrowDownCircleIcon, label: 'Receber' },
  { path: '/history', icon: ClockIcon, label: 'Histórico' },
];

export function Sidebar() {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-white h-full w-64 fixed left-0 top-0 shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">PaySystem</h1>
        {user && (
          <p className="text-sm text-gray-600 mt-1">{user.name}</p>
        )}
      </div>
      
      <nav className="flex-1 mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                  }`
                }
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full text-gray-700 hover:bg-gray-100 transition-colors rounded-lg"
        >
          <ArrowRightOnRectangleIcon className="w-6 h-6" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}