
import React, { useState, useEffect, useRef } from 'react';
import { Send, ArrowLeft, MoreVertical, Smile, GraduationCap, RefreshCw, Sparkles, ExternalLink } from 'lucide-react';
import { Message, ChatCategory } from '../types';
import { getBotResponse, resetContext } from '../services/chatService';
import { SUGGESTED_QUESTIONS } from '../lib/seed-data';

interface ChatWindowProps {
  onBack: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "GEC Bhavnagar digital twin initialized. I am ready to assist you with branch details, faculty lists, and academic schedules.",
      sender: 'bot',
      timestamp: new Date(),
      category: ChatCategory.SMALL_TALK
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const { response, category, options } = await getBotResponse(textToSend, messages);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        category: category,
        options: options
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const onReset = () => {
    resetContext();
    setMessages([{
      id: Date.now().toString(),
      text: "Chat parameters reset. Please select a module to begin.",
      sender: 'bot',
      timestamp: new Date(),
      category: ChatCategory.SMALL_TALK
    }]);
  };

  // Helper to render text with clickable links
  const renderMessageText = (text: string, isUser: boolean) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 font-bold underline decoration-2 underline-offset-4 ${
              isUser ? 'text-indigo-100 hover:text-white' : 'text-indigo-400 hover:text-indigo-300'
            } transition-colors break-all`}
          >
            {part}
            <ExternalLink size={14} />
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
  const currentOptions = lastBotMessage?.options || SUGGESTED_QUESTIONS;

  return (
    <div className="flex flex-col h-screen bg-[#020617] max-w-5xl mx-auto shadow-[0_0_100px_rgba(0,0,0,0.5)] border-x border-slate-900 overflow-hidden font-sans">
      {/* Premium Header */}
      <div className="bg-slate-950/80 backdrop-blur-xl text-white p-4 flex items-center justify-between shadow-2xl z-20 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-xl transition-all hover:text-indigo-400">
            <ArrowLeft size={22} />
          </button>
          <div className="relative">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] transform rotate-3">
              <GraduationCap size={26} className="-rotate-3 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-950 rounded-full shadow-lg"></div>
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight">GEC System Assistant</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Knowledge Engine Active</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onReset} className="p-2.5 hover:bg-white/5 rounded-xl transition-all text-slate-400 hover:text-white" title="Reset Session">
            <RefreshCw size={20} />
          </button>
          <button className="p-2.5 hover:bg-white/5 rounded-xl transition-all text-slate-400">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-transparent relative custom-scrollbar">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none z-10"></div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] relative group animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className={`px-5 py-4 rounded-2xl shadow-2xl ${
                  msg.sender === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-900/20' 
                  : 'bg-slate-900/90 border border-white/10 text-slate-100 backdrop-blur-md rounded-tl-none shadow-black/40'
                }`}>
                {msg.sender === 'bot' && msg.category && (
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="p-1 bg-indigo-500/20 rounded-md">
                      <Sparkles size={10} className="text-indigo-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.15em]">
                      {msg.category}
                    </span>
                  </div>
                )}
                <div className="whitespace-pre-wrap break-words text-[15px] leading-[1.6] font-normal">
                  {renderMessageText(msg.text, msg.sender === 'user')}
                </div>
              </div>
              <div className={`text-[10px] mt-2 font-bold px-1 uppercase tracking-tighter ${msg.sender === 'user' ? 'text-right text-indigo-400' : 'text-left text-slate-500'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-white/5 px-5 py-4 rounded-2xl shadow-lg flex gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Interaction Controls */}
      <div className="bg-slate-950/95 border-t border-white/5 p-5 space-y-5 shadow-[0_-15px_50px_rgba(0,0,0,0.6)] z-20">
        {/* Dynamic Suggestions */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {currentOptions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="whitespace-nowrap bg-white/5 text-indigo-300 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all active:scale-95 shadow-lg"
            >
              {q}
            </button>
          ))}
        </div>

        {/* User Input Area */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex items-center gap-4">
          <div className="flex-1 bg-slate-900/50 rounded-2xl flex items-center px-5 py-3.5 border border-white/5 focus-within:border-indigo-500/50 focus-within:bg-slate-900 transition-all shadow-inner group">
            <Smile className="text-slate-500 group-focus-within:text-indigo-400 transition-colors mr-3 cursor-pointer hover:scale-110" size={24} />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query the GEC Knowledge Base..."
              className="flex-1 bg-transparent outline-none text-[15px] text-white placeholder-slate-600 font-medium"
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`p-4 rounded-2xl transition-all transform active:scale-90 flex items-center justify-center shadow-2xl ${
              !input.trim() || isTyping 
              ? 'bg-slate-900 text-slate-700 cursor-not-allowed opacity-50' 
              : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-500/40 ring-4 ring-indigo-600/10'
            }`}
          >
            <Send size={22} className={!input.trim() ? '' : 'translate-x-0.5'} />
          </button>
        </form>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-2 { from { transform: translateY(12px); } to { transform: translateY(0); } }
        .animate-in { 
          animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                     slide-in-from-bottom-2 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
        }
      `}</style>
    </div>
  );
};

export default ChatWindow;
