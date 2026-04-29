import { useNavigate } from 'react-router';
import { Lock, Play, Crown } from 'lucide-react';
import Button from '../components/Button';

export default function ExclusiveContent() {
  const navigate = useNavigate();

  const exclusiveContent = [
    {
      title: 'Behind the Scenes: Album Recording',
      duration: '12:34',
      locked: false,
      type: 'video',
    },
    {
      title: 'Acoustic Session - Nana',
      duration: '4:21',
      locked: false,
      type: 'audio',
    },
    {
      title: 'Studio Diary: Day 3',
      duration: '8:15',
      locked: true,
      type: 'video',
    },
    {
      title: 'Unreleased Track Preview',
      duration: '2:45',
      locked: true,
      type: 'audio',
    },
    {
      title: 'Personal Message from Joshua',
      duration: '5:02',
      locked: true,
      type: 'video',
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-[#0B0B0B] px-6 py-6">
      <button onClick={() => navigate(-1)} className="text-[#C22026] mb-6">
        ← Back
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Crown size={32} className="text-[#C22026]" />
          <h1 className="text-3xl text-[#F5F5DC]">Exclusive Content</h1>
        </div>
        <p className="text-gray-400">
          Premium content available only to Baraka+ subscribers
        </p>
      </div>

      <div className="space-y-4">
        {exclusiveContent.map((content, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden ${
              content.locked ? 'opacity-75' : ''
            }`}
          >
            <div
              className={`bg-gray-900/50 p-5 ${
                !content.locked ? 'cursor-pointer hover:bg-gray-900' : ''
              } transition`}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                  {content.locked ? (
                    <Lock size={32} className="text-white" />
                  ) : (
                    <Play size={32} className="text-white" fill="white" />
                  )}
                  {!content.locked && (
                    <div className="absolute bottom-1 right-1 bg-black/80 px-2 py-0.5 rounded text-xs text-white">
                      {content.duration}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#F5F5DC]">{content.title}</h3>
                    {content.locked && (
                      <div className="bg-[#C22026] px-2 py-0.5 rounded text-xs text-white">
                        PREMIUM
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 capitalize">{content.type}</p>
                </div>
              </div>

              {content.locked && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Button
                    onClick={() => navigate('/subscription')}
                    variant="primary"
                    fullWidth
                  >
                    Unlock with Premium
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-[#C22026]/20 to-[#F9E84E]/20 border border-[#C22026] rounded-2xl p-6 text-center">
        <Crown size={48} className="text-[#C22026] mx-auto mb-4" />
        <h3 className="text-xl text-[#F5F5DC] mb-2">Unlock All Content</h3>
        <p className="text-gray-400 mb-4">
          Get unlimited access to exclusive content, downloads, and more
        </p>
        <Button onClick={() => navigate('/subscription')} fullWidth>
          View Premium Plans
        </Button>
      </div>
    </div>
  );
}
