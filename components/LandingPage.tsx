
import React from 'react';
import { GraduationCap, BookOpen, Users, Globe, CreditCard, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onStartChat: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartChat }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-slate-100 px-4 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center z-10">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-950 p-5 rounded-full border border-white/10 shadow-2xl">
              <GraduationCap className="w-14 h-14 text-indigo-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          GEC BHAVNAGAR
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-indigo-300/80 mb-10 tracking-[0.2em] uppercase">
          Intelligent Student Support
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Experience the future of campus navigation. Instant access to branch knowledge, faculty directories, and official GTU resources.
        </p>

        <button
          onClick={onStartChat}
          className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.3)]"
        >
          Initialize Assistant
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-left">
          <FeatureCard icon={<BookOpen size={20} />} title="Syllabus" desc="Official GTU Schemes" />
          <FeatureCard icon={<CreditCard size={20} />} title="Fees" desc="Scholarship Integrated" />
          <FeatureCard icon={<Users size={20} />} title="Faculty" desc="Expert Directory" />
          <FeatureCard icon={<Globe size={20} />} title="Portal" desc="Student Login Hub" />
        </div>
      </div>
      
      <footer className="mt-16 text-slate-500 text-xs text-center border-t border-white/5 pt-8 w-full max-w-2xl">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-slate-400">Design Engineering Prototype • GTU 2025</p>
          <p className="opacity-50 tracking-widest uppercase">Government Engineering College, Bhavnagar</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white/[0.03] backdrop-blur-xl p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all cursor-default group hover:bg-white/[0.05] shadow-xl">
    <div className="flex flex-col gap-3">
      <div className="text-indigo-400 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div>
        <h3 className="font-bold text-sm text-slate-100 group-hover:text-indigo-300 transition-colors">{title}</h3>
        <p className="text-[11px] text-slate-500 group-hover:text-slate-400 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

export default LandingPage;
