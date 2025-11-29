import { format } from 'date-fns';

interface ChatMessageProps {
  userName: string;
  message: string;
  timestamp: string;
  isOwnMessage: boolean;
}

export const ChatMessage = ({ userName, message, timestamp, isOwnMessage }: ChatMessageProps) => {
  return (
    <div className={`flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] ${isOwnMessage ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="text-xs font-medium text-muted-foreground">{userName}</span>
          <span className="text-xs text-muted-foreground">{format(new Date(timestamp), 'HH:mm')}</span>
        </div>
        <div 
          className={`px-4 py-2.5 rounded-2xl shadow-[var(--shadow-message)] transition-[var(--transition-smooth)] hover:shadow-lg ${
            isOwnMessage 
              ? 'bg-[hsl(var(--message-sent))] text-white rounded-br-sm' 
              : 'bg-[hsl(var(--message-received))] text-foreground border border-border rounded-bl-sm'
          }`}
        >
          <p className="text-sm leading-relaxed break-words">{message}</p>
        </div>
      </div>
    </div>
  );
};
