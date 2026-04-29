import { Home, Music, Users, Radio, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { icon: Home, label: 'Home', path: '/app' },
    { icon: Music, label: 'Music', path: '/app/music' },
    { icon: Users, label: 'Community', path: '/app/community' },
    { icon: Radio, label: 'Live', path: '/app/live' },
    { icon: User, label: 'Profile', path: '/app/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0B0B0B] border-t border-gray-800 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-1 py-2 px-3 transition-all"
            >
              <Icon
                size={24}
                className={isActive ? 'text-[#C22026]' : 'text-gray-400'}
              />
              <span className={`text-xs ${isActive ? 'text-[#C22026]' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
