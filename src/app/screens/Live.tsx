import { Clock, Calendar, Play } from 'lucide-react';
import Button from '../components/Button';
import logo from '../../imports/brrrrraaaa.png';

export default function Live() {
  const upcomingSessions = [
    {
      title: 'Acoustic Live Session',
      date: 'April 30, 2026',
      time: '8:00 PM EAT',
      countdown: '3 days',
    },
    {
      title: 'Q&A with Joshua',
      date: 'May 5, 2026',
      time: '6:00 PM EAT',
      countdown: '8 days',
    },
  ];

  const pastSessions = [
    {
      title: 'Album Launch Concert',
      date: 'April 15, 2026',
      views: '15.2K',
      duration: '1:45:30',
    },
    {
      title: 'Studio Session Vibes',
      date: 'April 8, 2026',
      views: '8.7K',
      duration: '52:15',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-6">
      <div className="flex items-center gap-4 mb-8">
        <img src={logo} alt="Baraka+" className="h-10 object-contain" />
        <h1 className="text-3xl text-[#F5F5DC]">Live Sessions</h1>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-[#F5F5DC] mb-4">Upcoming</h2>
        <div className="space-y-4">
          {upcomingSessions.map((session, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-600/50 rounded-2xl p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl text-[#F5F5DC] mb-2">{session.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{session.time}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-600 px-3 py-1 rounded-full text-white text-sm">
                  LIVE
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-[#F9E84E]">
                  Starts in {session.countdown}
                </div>
                <Button>Set Reminder</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl text-[#F5F5DC] mb-4">Past Recordings</h2>
        <div className="space-y-4">
          {pastSessions.map((session, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl overflow-hidden cursor-pointer hover:bg-gray-900 transition"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={index === 0 ? 'https://images.unsplash.com/photo-1635961726947-0f821cf9ba28?w=800' : 'https://images.unsplash.com/photo-1709090083073-d130ac28cc19?w=800'}
                  alt={session.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-4">
                    <Play size={32} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                  {session.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#F5F5DC] mb-2">{session.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{session.date}</span>
                  <span>{session.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
