import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Play } from 'lucide-react';
import logo from '../../imports/brrrrraaaa.png';

export default function Music() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'songs' | 'albums' | 'playlists'>('songs');

  const songs = [
    { title: 'Nana', album: 'Dalilah', duration: '3:45', imageUrl: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=200' },
    { title: 'Dalilah', album: 'Dalilah', duration: '4:12', imageUrl: 'https://images.unsplash.com/photo-1693434998054-2784e49ca563?w=200' },
    { title: 'Nyumirwa', album: 'Singles', duration: '3:28', imageUrl: 'https://images.unsplash.com/photo-1761814684971-fa0e7fd606e2?w=200' },
    { title: 'Over', album: 'Singles', duration: '3:55', imageUrl: 'https://images.unsplash.com/photo-1629923759854-156b88c433aa?w=200' },
    { title: 'Lonely', album: 'Love & Heartbreak', duration: '4:01', imageUrl: 'https://images.unsplash.com/photo-1773430266140-ad5d57a83994?w=200' },
  ];

  const albums = [
    { title: 'Love & Heartbreak', year: '2026', tracks: 12, imageUrl: 'https://images.unsplash.com/photo-1653838982765-82133b8c654f?w=400' },
    { title: 'Dalilah', year: '2023', tracks: 8, imageUrl: 'https://images.unsplash.com/photo-1600668319414-af8bead0f1f3?w=400' },
  ];

  const playlists = [
    { title: 'Best of Joshua', tracks: 25 },
    { title: 'Acoustic Sessions', tracks: 12 },
    { title: 'Live Performances', tracks: 18 },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-6">
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-6">
          <img src={logo} alt="Baraka+" className="h-10 object-contain" />
          <h1 className="text-3xl text-[#F5F5DC]">Music Library</h1>
        </div>

        <div className="relative mb-6">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search songs, albums..."
            className="w-full bg-gray-900 border border-gray-800 rounded-xl px-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C22026]"
          />
        </div>

        <div className="flex gap-2 mb-6">
          {(['songs', 'albums', 'playlists'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize transition ${
                activeTab === tab
                  ? 'bg-[#C22026] text-white'
                  : 'bg-gray-900 text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {activeTab === 'songs' && songs.map((song, index) => (
          <div
            key={index}
            onClick={() => navigate('/now-playing')}
            className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 cursor-pointer hover:bg-gray-900 transition"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img src={song.imageUrl} alt={song.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#F5F5DC]">{song.title}</h4>
              <p className="text-sm text-gray-400">{song.album}</p>
            </div>
            <span className="text-sm text-gray-500">{song.duration}</span>
          </div>
        ))}

        {activeTab === 'albums' && albums.map((album, index) => (
          <div
            key={index}
            onClick={() => navigate('/now-playing')}
            className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 cursor-pointer hover:bg-gray-900 transition"
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img src={album.imageUrl} alt={album.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#F5F5DC] mb-1">{album.title}</h4>
              <p className="text-sm text-gray-400">{album.year} • {album.tracks} tracks</p>
            </div>
          </div>
        ))}

        {activeTab === 'playlists' && playlists.map((playlist, index) => (
          <div
            key={index}
            onClick={() => navigate('/now-playing')}
            className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 cursor-pointer hover:bg-gray-900 transition"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Play size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#F5F5DC] mb-1">{playlist.title}</h4>
              <p className="text-sm text-gray-400">{playlist.tracks} tracks</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
