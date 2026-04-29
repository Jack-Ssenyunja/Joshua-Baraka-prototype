import { useNavigate } from "react-router";
import { Play, Lock, Users, ShoppingBag } from "lucide-react";
import MusicCard from "../components/MusicCard";
import logo from '../../imports/brrrrraaaa.png';

export default function Home() {
  const navigate = useNavigate();

  const trendingTracks = [
    {
      title: "Nana",
      artist: "Joshua Baraka",
      imageUrl:
        "https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400",
    },
    {
      title: "Dalilah",
      artist: "Joshua Baraka",
      imageUrl:
        "https://images.unsplash.com/photo-1693434998054-2784e49ca563?w=400",
    },
    {
      title: "Nyumirwa",
      artist: "Joshua Baraka",
      imageUrl:
        "https://images.unsplash.com/photo-1761814684971-fa0e7fd606e2?w=400",
    },
    {
      title: "Over",
      artist: "Joshua Baraka",
      imageUrl:
        "https://images.unsplash.com/photo-1629923759854-156b88c433aa?w=400",
    },
  ];

  const recentlyPlayed = [
    {
      title: "Nana (Acoustic)",
      artist: "Joshua Baraka",
      imageUrl:
        "https://images.unsplash.com/photo-1600668319414-af8bead0f1f3?w=200",
    },
    {
      title: "Dalilah (Live)",
      artist: "Joshua Baraka",
      imageUrl:
        "https://images.unsplash.com/photo-1600497935128-4a6d3aacf289?w=200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <img src={logo} alt="Baraka+" className="h-12 object-contain" />
      </div>

      <div
        onClick={() => navigate("/now-playing")}
        className="relative h-64 bg-gradient-to-br from-[#C22026] via-[#F9E84E] to-[#0B0B0B] cursor-pointer overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1653838982765-82133b8c654f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIwbWFsZSUyMG11c2ljaWFuJTIwc2luZ2VyJTIwcGVyZm9ybWluZ3xlbnwxfHx8fDE3Nzc0MDg2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Joshua Baraka"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="text-xs text-[#0B0B0B] mb-2 bg-[#F9E84E] px-3 py-1 rounded-full w-fit">
            NEW RELEASE
          </span>
          <h2 className="text-3xl text-white mb-2">
            Love & Heartbreak
          </h2>
          <p className="text-[#F5F5DC] mb-4">
            Latest Album • 2026
          </p>
          <button className="bg-[#C22026] text-white px-8 py-3 rounded-full flex items-center gap-2 w-fit">
            <Play size={20} fill="white" />
            <span>Play Now</span>
          </button>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        <div>
          <h3 className="text-xl text-[#F5F5DC] mb-4">
            Trending Now
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {trendingTracks.map((track, index) => (
              <MusicCard
                key={index}
                title={track.title}
                artist={track.artist}
                imageUrl={track.imageUrl}
                onClick={() => navigate("/now-playing")}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div
            onClick={() => navigate("/live")}
            className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-4 cursor-pointer"
          >
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Play size={24} className="text-white" />
            </div>
            <h4 className="text-white mb-1">Live Sessions</h4>
            <p className="text-xs text-white/80">Join now</p>
          </div>

          <div
            onClick={() => navigate("/exclusive")}
            className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-4 cursor-pointer"
          >
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Lock size={24} className="text-white" />
            </div>
            <h4 className="text-white mb-1">Exclusive</h4>
            <p className="text-xs text-white/80">
              Premium content
            </p>
          </div>

          <div
            onClick={() => navigate("/app/community")}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 cursor-pointer"
          >
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Users size={24} className="text-white" />
            </div>
            <h4 className="text-white mb-1">Community</h4>
            <p className="text-xs text-white/80">Connect</p>
          </div>

          <div className="bg-gradient-to-br from-[#D4AF37] to-[#FF7A00] rounded-2xl p-4 cursor-pointer">
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <ShoppingBag size={24} className="text-white" />
            </div>
            <h4 className="text-white mb-1">Merch</h4>
            <p className="text-xs text-white/80">Shop now</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-[#F5F5DC] mb-4">
            Recently Played
          </h3>
          <div className="space-y-3">
            {recentlyPlayed.map((track, index) => (
              <div
                key={index}
                onClick={() => navigate("/now-playing")}
                className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-3 cursor-pointer hover:bg-gray-900 transition"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden">
                  <img
                    src={track.imageUrl}
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#F5F5DC]">
                    {track.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {track.artist}
                  </p>
                </div>
                <Play size={20} className="text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}