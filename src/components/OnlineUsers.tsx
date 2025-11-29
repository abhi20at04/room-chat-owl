import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Users } from 'lucide-react';

interface OnlineUsersProps {
  roomId: string;
  userName: string;
}

export const OnlineUsers = ({ roomId, userName }: OnlineUsersProps) => {
  const [onlineCount, setOnlineCount] = useState(1);

  useEffect(() => {
    const channel = supabase.channel(`presence-${roomId}`);

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        setOnlineCount(Object.keys(state).length);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user: userName,
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomId, userName]);

  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
      <Users className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        {onlineCount} {onlineCount === 1 ? 'user' : 'users'} online
      </span>
    </div>
  );
};
