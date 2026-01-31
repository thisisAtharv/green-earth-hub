import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Settings, LogOut, Bell, Shield, HelpCircle, ChevronRight, User } from 'lucide-react';
import { getUserLevel } from '@/utils/levelUtils';
import { AvatarGallery } from '@/components/profile/AvatarGallery';

const MOCK_POINTS = 1890; // Temporary mock value

const ProfilePage = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const userLevel = getUserLevel(MOCK_POINTS);

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <div className="lisboa-card text-center relative overflow-hidden">
          {/* Level Progress Background Hint (Optional) */}
          <div
            className="absolute top-0 left-0 h-1 bg-accent/50"
            style={{ width: `${(MOCK_POINTS / userLevel.maxPoints) * 100}%` }}
          />

          <div
            className="w-32 h-32 rounded-full border-4 border-accent/20 p-1 mx-auto mb-4 bg-white shadow-sm relative group cursor-pointer transition-transform hover:scale-105"
            onClick={() => setIsGalleryOpen(true)}
          >
            <img
              src={userLevel.avatar}
              alt={userLevel.name}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <span className="text-white text-xs font-bold uppercase tracking-wider">View All</span>
            </div>
            <div className="absolute bottom-1 right-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm border-2 border-white">
              Lvl {userLevel.level}
            </div>
          </div>

          <h1 className="text-xl font-bold text-foreground">Team Runtime</h1>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="font-medium text-accent">{userLevel.name}</span>
            <span>•</span>
            <span>{MOCK_POINTS} Points</span>
          </p>

          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{MOCK_POINTS}</p>
              <p className="text-xs text-muted-foreground">Total Points</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">40 kg</p>
              <p className="text-xs text-muted-foreground">CO₂ Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
          </div>
        </div>

        {/* Settings Links */}
        <div className="lisboa-card p-0 overflow-hidden">
          {[
            { icon: User, label: 'Avatars', action: 'View Gallery', onClick: () => setIsGalleryOpen(true) },
            { icon: Bell, label: 'Notifications', action: 'Enabled' },
            { icon: Shield, label: 'Privacy', action: '' },
            { icon: HelpCircle, label: 'Help & Support', action: '' },
            { icon: Settings, label: 'Settings', action: '' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className="w-full flex items-center gap-4 px-6 py-4 hover:bg-cream transition-colors text-left border-b border-border last:border-b-0"
              >
                <Icon size={20} strokeWidth={2.5} className="text-muted-foreground" />
                <span className="flex-1 font-medium text-foreground">{item.label}</span>
                {item.action && (
                  <span className="text-sm text-muted-foreground">{item.action}</span>
                )}
                <ChevronRight size={18} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>

        {/* Gallery Modal */}
        <AvatarGallery
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          userPoints={MOCK_POINTS}
        />

        {/* Logout */}
        <button className="w-full lisboa-card-soft flex items-center justify-center gap-2 text-destructive font-semibold">
          <LogOut size={18} strokeWidth={2.5} />
          Sign Out
        </button>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
