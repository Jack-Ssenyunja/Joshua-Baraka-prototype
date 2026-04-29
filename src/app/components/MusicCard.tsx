import { Play, Music } from 'lucide-react';

interface MusicCardProps {
  title: string;
  artist?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export default function MusicCard({ title, artist, imageUrl, onClick }: MusicCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-40 cursor-pointer group"
    >
      <div className="relative mb-2 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Music className="w-16 h-16 text-gray-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-[#C22026] rounded-full p-3">
            <Play size={24} className="text-white" fill="white" />
          </div>
        </div>
      </div>
      <h4 className="text-[#F5F5DC] mb-1 truncate">{title}</h4>
      {artist && <p className="text-sm text-gray-400 truncate">{artist}</p>}
    </div>
  );
}
