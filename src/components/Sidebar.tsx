"use client";

import { motion } from "framer-motion";
import {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  BookOpen, Home, GamepadIcon, MousePointerClick, X,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, any> = {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  BookOpen, Home, GamepadIcon, MousePointerClick,
};

interface NavItem {
  id: string;
  label: string;
  arabicLabel: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Dashboard", arabicLabel: "الرئيسية", href: "/", icon: "Home" },
  { id: "word", label: "The Word", arabicLabel: "الكلمة", href: "/module/the-word", icon: "Type" },
  { id: "sentences", label: "Sentence Structures", arabicLabel: "الجمل", href: "/module/sentence-structures", icon: "AlignLeft" },
  { id: "irab", label: "Inflection (I'rab)", arabicLabel: "الإعراب", href: "/module/irab", icon: "Wand2" },
  { id: "particles", label: "Governing Particles", arabicLabel: "العوامل", href: "/module/governing-particles", icon: "Atom" },
  { id: "verb", label: "Verb Inflection", arabicLabel: "إعراب الفعل", href: "/module/verb-inflection", icon: "Repeat" },
  { id: "followers", label: "Followers", arabicLabel: "التوابع", href: "/module/followers", icon: "Copy" },
  { id: "game", label: "Parsing Game", arabicLabel: "لعبة الإعراب", href: "/game", icon: "GamepadIcon" },
  { id: "hover", label: "Hover Practice", arabicLabel: "التمرين التفاعلي", href: "/hover-practice", icon: "MousePointerClick" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-[#1a2744] text-[#c9a96e] shadow-lg"
        aria-label="Open navigation"
      >
        <BookOpen size={24} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-[#1a2744] text-[#f5ecd9] flex flex-col z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#c9a96e]/20">
          <div>
            <h1 className="text-xl font-bold text-[#c9a96e]">النحو التفاعلي</h1>
            <p className="text-xs text-[#f5ecd9]/60 mt-1">Arabic Grammar Interactive</p>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-[#f5ecd9]/60 hover:text-[#c9a96e]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const Icon = iconMap[item.icon] || BookOpen;
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#c9a96e]/10 transition-colors group"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon
                    size={20}
                    className="text-[#c9a96e] group-hover:text-[#e0c896] transition-colors flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[#f5ecd9]">{item.label}</div>
                    <div className="text-xs text-[#f5ecd9]/50 arabic-text" dir="rtl">
                      {item.arabicLabel}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#c9a96e]/20">
          <p className="text-xs text-[#f5ecd9]/50 text-center">
            Based on Nahw Mir &amp; Al-Kafiyah
          </p>
        </div>
      </aside>

      {/* Spacer for desktop */}
      <div className="hidden lg:block w-72 flex-shrink-0" />
    </>
  );
}