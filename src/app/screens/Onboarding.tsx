import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Music, Users, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const slides = [
  {
    icon: Music,
    title: 'Discover Exclusive Music',
    description: 'Access unreleased tracks, studio sessions, and exclusive content from Joshua Baraka',
  },
  {
    icon: Users,
    title: 'Connect with Joshua',
    description: 'Get closer to the artist through live sessions, Q&As, and behind-the-scenes moments',
  },
  {
    icon: Sparkles,
    title: 'Join the Fan Community',
    description: 'Connect with fans worldwide, share your love for the music, and be part of something special',
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-[#0B0B0B] flex flex-col items-center justify-between px-8 py-12">
      <button
        onClick={() => navigate('/login')}
        className="self-end text-[#C22026] text-sm"
      >
        Skip
      </button>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-12 bg-gradient-to-br from-[#C22026] to-[#F9E84E] p-8 rounded-full">
          <Icon size={80} className="text-white" />
        </div>

        <h2 className="text-3xl text-[#F5F5DC] mb-4">{slide.title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
          {slide.description}
        </p>
      </div>

      <div className="w-full space-y-6">
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#C22026]' : 'w-2 bg-gray-700'
              }`}
            />
          ))}
        </div>

        <Button onClick={handleNext} fullWidth>
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
        </Button>
      </div>
    </div>
  );
}
