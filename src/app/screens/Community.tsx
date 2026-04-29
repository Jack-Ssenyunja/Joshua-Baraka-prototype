import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
import logo from '../../imports/brrrrraaaa.png';

export default function Community() {
  const posts = [
    {
      user: 'Sarah M.',
      avatar: 'SM',
      time: '2h ago',
      content: "Just listened to the new album on repeat! 'Lonely' hits different 🔥",
      likes: 142,
      comments: 23,
    },
    {
      user: 'David K.',
      avatar: 'DK',
      time: '5h ago',
      content: "Can't wait for the live session tomorrow! Who else is joining? 🎤",
      likes: 89,
      comments: 15,
    },
    {
      user: 'Emma L.',
      avatar: 'EL',
      time: '1d ago',
      content: 'The behind-the-scenes content is incredible. This is what we needed! 🙌',
      likes: 234,
      comments: 41,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-6">
      <div className="flex items-center gap-4 mb-6">
        <img src={logo} alt="Baraka+" className="h-10 object-contain" />
        <h1 className="text-3xl text-[#F5F5DC]">Community</h1>
      </div>

      <div className="mb-6 bg-gray-900 rounded-2xl p-4">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-[#C22026] rounded-full flex items-center justify-center text-white">
            You
          </div>
          <input
            type="text"
            placeholder="Start a discussion..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-[#C22026] text-white rounded-full p-2">
            <Send size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-900/50 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C22026] to-[#F9E84E] rounded-full flex items-center justify-center text-white text-sm">
                {post.avatar}
              </div>
              <div className="flex-1">
                <h4 className="text-[#F5F5DC]">{post.user}</h4>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{post.content}</p>

            <div className="flex items-center gap-6 text-gray-400">
              <button className="flex items-center gap-2 hover:text-[#C22026] transition">
                <Heart size={20} />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-[#D4AF37] transition">
                <MessageCircle size={20} />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-[#D4AF37] transition">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
