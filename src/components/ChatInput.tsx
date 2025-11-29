import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-card border-t border-border">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-background border-input focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
      />
      <Button 
        type="submit" 
        size="icon"
        className="bg-primary hover:bg-primary/90 text-primary-foreground transition-[var(--transition-smooth)] shadow-md hover:shadow-lg"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};
