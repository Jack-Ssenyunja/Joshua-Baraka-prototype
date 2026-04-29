import { useNavigate } from 'react-router';
import { ChevronRight, Download, Settings, CreditCard, LogOut, Crown } from 'lucide-react';
import Button from '../components/Button';
import logo from '../../imports/brrrrraaaa.png';

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Download, label: 'Downloads', count: '12 tracks' },
    { icon: CreditCard, label: 'Payment Methods', count: null },
    { icon: Settings, label: 'Settings', count: null },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-6">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Baraka+" className="h-12 object-contain" />
      </div>

      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-[#C22026] to-[#F9E84E] rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
          JD
        </div>
        <h1 className="text-2xl text-[#F5F5DC] mb-1">John Doe</h1>
        <p className="text-gray-400">john.doe@email.com</p>
      </div>

      <div className="bg-gradient-to-br from-[#C22026]/20 to-[#F9E84E]/20 border border-[#C22026] rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Crown size={24} className="text-[#C22026]" />
            <h3 className="text-xl text-[#F5F5DC]">Free Plan</h3>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          Upgrade to Premium for exclusive content, downloads, and ad-free listening
        </p>
        <Button onClick={() => navigate('/subscription')} fullWidth>
          Upgrade to Premium
        </Button>
      </div>

      <div className="space-y-2 mb-8">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="w-full flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 hover:bg-gray-900 transition"
            >
              <Icon size={24} className="text-[#C22026]" />
              <div className="flex-1 text-left">
                <h4 className="text-[#F5F5DC]">{item.label}</h4>
                {item.count && <p className="text-sm text-gray-400">{item.count}</p>}
              </div>
              <ChevronRight size={20} className="text-gray-500" />
            </button>
          );
        })}
      </div>

      <button className="w-full flex items-center justify-center gap-2 text-red-500 py-4">
        <LogOut size={20} />
        <span>Sign Out</span>
      </button>
    </div>
  );
}
