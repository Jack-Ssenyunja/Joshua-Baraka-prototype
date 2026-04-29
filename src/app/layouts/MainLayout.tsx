import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';

export default function MainLayout() {
  return (
    <div className="h-screen w-full max-w-md mx-auto bg-[#0B0B0B] text-white overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
