import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { OnlineUsers } from '@/components/OnlineUsers';
import { useChat } from '@/hooks/useChat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, ArrowLeft, Hash, Plus } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputRoomId, setInputRoomId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, sendMessage, isLoading } = useChat(roomId, userName);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateRoomId = () => {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    setInputRoomId(randomId);
    toast.success(`Room ID created: ${randomId}`);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = inputName.trim();
    const trimmedRoomId = inputRoomId.trim().toLowerCase();
    
    if (!trimmedName) {
      toast.error('Please enter your name');
      return;
    }
    
    if (!trimmedRoomId) {
      toast.error('Please enter or create a room ID');
      return;
    }

    // Validate room ID (alphanumeric and hyphens only)
    if (!/^[a-z0-9-]+$/.test(trimmedRoomId)) {
      toast.error('Room ID can only contain letters, numbers, and hyphens');
      return;
    }

    if (trimmedRoomId.length > 50) {
      toast.error('Room ID must be less than 50 characters');
      return;
    }

    setUserName(trimmedName);
    setRoomId(trimmedRoomId);
    setIsJoined(true);
    toast.success(`Joined room: ${trimmedRoomId}`);
  };

  const handleLeaveRoom = () => {
    setIsJoined(false);
    setInputName('');
    setInputRoomId('');
    toast.info('Left the chat room');
  };

  if (!isJoined) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4"
        style={{ background: 'var(--gradient-bg)' }}
      >
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 space-y-6 border border-border">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Welcome to ChatRoom</h1>
              <p className="text-muted-foreground">Enter your details to join or create a room</p>
            </div>
            
            <form onSubmit={handleJoin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Enter your name"
                  className="h-12 bg-background border-input focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
                  maxLength={50}
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="roomId" className="text-sm font-medium text-foreground">
                  Room ID
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="roomId"
                      value={inputRoomId}
                      onChange={(e) => setInputRoomId(e.target.value.toLowerCase())}
                      placeholder="room-name"
                      className="h-12 pl-9 bg-background border-input focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
                      maxLength={50}
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={generateRoomId}
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 border-input hover:bg-accent transition-[var(--transition-smooth)]"
                    title="Create new room"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Enter an existing room ID or create a new one
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-[var(--transition-smooth)] shadow-md hover:shadow-lg"
              >
                Join Chat
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'var(--gradient-bg)' }}
    >
      <div className="w-full max-w-4xl h-[90vh] flex flex-col bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden border border-border">
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <Button
              onClick={handleLeaveRoom}
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10 transition-[var(--transition-smooth)] -ml-2"
              title="Leave room"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <MessageCircle className="w-6 h-6" />
            <div>
              <h1 className="text-xl font-bold">ChatRoom</h1>
              <p className="text-sm opacity-90 flex items-center gap-1">
                <Hash className="w-3 h-3" />
                {roomId}
              </p>
            </div>
          </div>
          <div className="text-sm opacity-90 hidden sm:block">Welcome, {userName}!</div>
        </div>

        {/* Online Users */}
        <OnlineUsers roomId={roomId} userName={userName} />

        {/* Messages */}
        <div 
          className="flex-1 overflow-y-auto p-4 space-y-2"
          style={{ background: 'var(--gradient-chat)' }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground">Loading messages...</div>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-muted-foreground">
                <p className="text-lg font-medium mb-2">No messages yet</p>
                <p className="text-sm">Be the first to say hello!</p>
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                userName={msg.user_name}
                message={msg.message}
                timestamp={msg.created_at}
                isOwnMessage={msg.user_name === userName}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default Index;
