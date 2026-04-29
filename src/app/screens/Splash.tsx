import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../imports/brrrrraaaa.png';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gradient-to-b from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] flex flex-col items-center justify-center px-8">
      <div className="text-center">
        <img src={logo} alt="Baraka+" className="w-48 h-48 mx-auto mb-4 object-contain" />
        <p className="text-xl text-[#F5F5DC] tracking-wide">Closer to the music</p>
      </div>
      <div className="absolute bottom-20">
        <div className="w-12 h-12 border-4 border-[#C22026] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
