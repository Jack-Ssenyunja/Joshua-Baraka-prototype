import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, User as UserIcon, Github } from 'lucide-react';
import Button from '../components/Button';
import logo from '../../imports/brrrrraaaa.png';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    navigate('/app');
  };

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-[#0B0B0B] flex flex-col px-8 py-12">
      <div className="mb-12">
        <img src={logo} alt="Baraka+" className="w-32 h-32 mb-6 object-contain" />
        <h1 className="text-4xl text-[#C22026] mb-2">Create Account</h1>
        <p className="text-gray-400">Join the Baraka+ community</p>
      </div>

      <div className="flex-1 space-y-6">
        <div>
          <label className="block text-[#F5F5DC] mb-2 text-sm">Full Name</label>
          <div className="relative">
            <UserIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-gray-900 border border-gray-800 rounded-xl px-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C22026]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#F5F5DC] mb-2 text-sm">Email</label>
          <div className="relative">
            <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-gray-900 border border-gray-800 rounded-xl px-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C22026]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#F5F5DC] mb-2 text-sm">Password</label>
          <div className="relative">
            <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full bg-gray-900 border border-gray-800 rounded-xl px-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C22026]"
            />
          </div>
        </div>

        <Button onClick={handleSignup} fullWidth>
          Create Account
        </Button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#0B0B0B] text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white hover:border-[#C22026] transition">
            <Github size={20} />
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white hover:border-[#C22026] transition">
            <Github size={20} />
            <span>Apple</span>
          </button>
        </div>
      </div>

      <div className="text-center text-gray-400">
        Already have an account?{' '}
        <button onClick={() => navigate('/login')} className="text-[#C22026]">
          Sign In
        </button>
      </div>
    </div>
  );
}
