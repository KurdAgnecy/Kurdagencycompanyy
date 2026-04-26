"use client";
import React, { useState } from 'react';
import { 
  Settings2, Facebook, Instagram, Send, Target, Zap, Globe, 
  Users2, MapPin, Calendar, VenusMars, Heart, Search, X,
  Phone, MessageCircle, Share2
} from 'lucide-react';

export default function Page() {
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [gender, setGender] = useState('all');

  const phoneNumber = "9647510386174";
  const tiktokUrl = "https://www.tiktok.com/@kurd.agency?_r=1&_t=ZS-95s7zv3rfgT";
  const facebookUrl = "https://www.facebook.com/share/1AwxhzsMUN/?mibextid=wwXIfr";

  // لیستی تەواوی شار و شارۆچکەکانی کوردستان
  const allLocations = [
    "هەموو کوردستان", "هەموو ئێراق", "سلێمانی", "هەولێر", "دهۆک", "کەرکوک", "هەڵەبجە",
    "ڕانیە", "قەڵادزێ", "سۆران", "زاخۆ", "ئاکرێ", "کەلار", "کفری", "چەمچماڵ", 
    "دەربەندیخان", "شەقڵاوە", "ئامێدی", "بەردەڕەش", "شێخان", "سێمێل", "کۆیە", 
    "تەقتەق", "پێنجوێن", "سەیدسادق", "خورماڵ", "بیارە", "تەکیە", "بازیان", 
    "دوکان", "ماوەت", "چۆمان", "ڕواندز", "مێرگەسۆر", "پیرمام", "دیانا", 
    "خەبات", "بەغداد", "مووسڵ", "بەسرە", "نەجەف", "کەربەلا", "خانەقین", 
    "دوزخورماتوو", "داقووق", "پردێ", "ئەلقۆش", "بەرتلە", "حەبانیە"
  ];

  const addLocation = (loc: string) => {
    if (!selectedLocations.includes(loc)) {
      setSelectedLocations([...selectedLocations, loc]);
      setLocationQuery('');
    }
  };

  const removeLocation = (loc: string) => {
    setSelectedLocations(selectedLocations.filter(l => l !== loc));
  };

  const sendToWhatsApp = () => {
    const locationsText = selectedLocations.length > 0 ? selectedLocations.join('، ') : 'دیاری نەکراوە';
    const message = `سڵاو کورد ئەجێنسی، دەمەوێت سپۆنسەر بکەم بۆ ئەم شوێنانە: ${locationsText}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 font-sans" dir="rtl">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-10 border-b border-slate-800 pb-6 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-right">
        <div>
          <h1 className="text-4xl font-black text-blue-500 tracking-tight">کورد ئەجێنسی</h1>
          <p className="text-slate-500 mt-1 font-medium italic text-sm">Professional Sponsoring System | CEO: Paiwast Ali</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-2 rounded-xl hover:bg-black transition-all">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.45-.2 6.9-.58 10.35-.33 2.19-1.4 4.3-3.37 5.39-2.3 1.4-5.46 1.4-7.74-.03-2.12-1.29-3.33-3.8-3.05-6.26.16-2.07 1.25-4.04 3.07-5.05 1.34-.78 2.92-1.05 4.45-.87v4.13c-.93-.11-1.89.07-2.69.58-.8.51-1.34 1.41-1.38 2.36-.08 1.4.92 2.75 2.27 3.05 1.05.22 2.21-.04 2.96-.82.68-.71.91-1.74.88-2.73V.02z"/></svg>
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600/10 border border-blue-600/50 p-2 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all">
            <Facebook size={20} />
          </a>
          <a href={`https://wa.me/${phoneNumber}`} className="bg-green-600/10 border border-green-600/50 px-4 py-2 rounded-xl text-green-500 flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all text-sm font-bold">
            <MessageCircle size={18} /> وەتسئەپ
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Targeting Section */}
          <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-xl text-right backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <Target className="text-blue-500" />
              <h2 className="text-xl font-bold">دیاریکردنی ئامانج (Targeting)</h2>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <label className="text-sm text-slate-400 mb-2 block italic text-right">گەڕان بۆ ناوچە و شاری مەبەست</label>
                <div className="relative">
                  <Search className="absolute right-3 top-3.5 text-slate-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="بۆ نموونە: سلێمانی، هەولێر، سۆران، کەلار..." 
                    className="w-full bg-slate-800/50 border border-slate-700 pr-10 py-3 rounded-xl outline-none focus:border-blue-500 transition-all text-right"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>
                {locationQuery && (
                  <div className="absolute z-20 w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl max-h-48 overflow-y-auto shadow-2xl">
                    {allLocations.filter(l => l.includes(locationQuery)).map(loc => (
                      <button key={loc} onClick={() => addLocation(loc)} className="w-full text-right p-3 hover:bg-blue-600 border-b border-slate-700 last:border-0 transition-colors">
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Selected Chips */}
              <div className="flex flex-wrap gap-2 min-h-[40px]">
                {selectedLocations.map(loc => (
                  <span key={loc} className="bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3 py-1 rounded-full text-xs flex items-center gap-2 animate-in fade-in zoom-in duration-200">
                    {loc} <X size={14} className="cursor-pointer hover:text-red-400" onClick={() => removeLocation(loc)} />
                  </span>
                ))}
                {selectedLocations.length === 0 && <span className="text-slate-600 text-xs italic">هیچ ناوچەیەک هەڵنەبژێردراوە...</span>}
              </div>
            </div>
          </section>

          {/* Business Info Section */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 text-right relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">بەڕێوەبردنی سۆشیاڵ میدیا</h2>
              <p className="text-slate-400 mb-6">کورد ئەجێنسی - خێراترین و پڕۆفیشناڵترین خزمەتگوزاری سپۆنسەر لە هەرێمی کوردستان</p>
              <div className="flex flex-wrap gap-4">
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/50 border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all font-bold">
                   تیکتۆکی ئێمە
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#1877F2]/20 border border-[#1877F2]/50 p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#1877F2] transition-all font-bold">
                   فەیسبووکی ئێمە
                </a>
              </div>
            </div>
            <Share2 className="absolute -left-10 -bottom-10 w-40 h-40 text-white/5 rotate-12" />
          </section>
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-3xl p-6 shadow-2xl sticky top-8 text-white border border-blue-400/30">
            <h3 className="text-xl font-bold mb-6 border-b border-blue-400 pb-4 flex items-center justify-between">
              <span>پوختەی داواکاری</span>
              <Zap size={18} className="animate-pulse" />
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex flex-col gap-2 border-b border-blue-500 pb-4">
                <span className="opacity-70">ناوچە دەستنیشانکراوەکان:</span>
                <span className="font-bold leading-relaxed">
                  {selectedLocations.length > 0 ? selectedLocations.join('، ') : 'دیاری نەکراوە'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-70">کۆمپانیا:</span>
                <span className="font-bold">Kurd Agency</span>
              </div>
            </div>
            <button 
              onClick={sendToWhatsApp}
              className="w-full mt-8 bg-white text-blue-600 font-black py-4 rounded-2xl hover:bg-slate-100 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              ناردن بۆ وەتسئەپ 🚀
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-slate-600 text-sm border-t border-slate-800 pt-10 pb-10">
        <p className="mb-2 tracking-widest font-bold">KURD AGENCY | 2026</p>
        <p>Founder & Developer: Paiwast Ali Abdalla</p>
      </footer>
    </div>
  );
}
