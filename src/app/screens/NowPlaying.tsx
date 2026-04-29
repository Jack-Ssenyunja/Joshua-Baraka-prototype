import { useNavigate } from 'react-router';
import { ChevronDown, Heart, Download, Share2, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { useState } from 'react';

export default function NowPlaying() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gradient-to-b from-[#C22026]/30 via-[#0B0B0B] to-[#0B0B0B] flex flex-col">
      <div className="p-6">
        <button onClick={() => navigate(-1)} className="text-[#F5F5DC]">
          <ChevronDown size={28} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-between px-8 pb-12">
        <div className="w-full">
          <div className="relative w-full aspect-square max-w-sm mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=800"
              alt="Album Art"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl text-[#F5F5DC] mb-2">Nana</h1>
            <p className="text-xl text-gray-400">Joshua Baraka</p>
          </div>

          <div className="mb-8">
            <div className="relative h-1 bg-gray-800 rounded-full mb-2">
              <div className="absolute h-full w-1/3 bg-[#C22026] rounded-full"></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mb-8">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`${isLiked ? 'text-[#C22026]' : 'text-gray-400'} transition`}
            >
              <Heart size={28} fill={isLiked ? '#C22026' : 'none'} />
            </button>
            <button className="text-gray-400 hover:text-[#C22026] transition">
              <Download size={28} />
            </button>
            <button className="text-gray-400 hover:text-[#C22026] transition">
              <Share2 size={28} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button className="text-gray-400 hover:text-[#C22026] transition">
              <Shuffle size={24} />
            </button>

            <button className="text-white hover:text-[#C22026] transition">
              <SkipBack size={32} fill="currentColor" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#C22026] rounded-full p-5 hover:scale-105 transition"
            >
              {isPlaying ? (
                <Pause size={32} className="text-white" fill="white" />
              ) : (
                <Play size={32} className="text-white" fill="white" />
              )}
            </button>

            <button className="text-white hover:text-[#C22026] transition">
              <SkipForward size={32} fill="currentColor" />
            </button>

            <button className="text-gray-400 hover:text-[#C22026] transition">
              <Repeat size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
