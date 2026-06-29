"use client";

import { motion } from "framer-motion";
import {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  BookOpen, Home, GamepadIcon, MousePointerClick, X,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-lg bg-[#1a2744] text-[#c9a96e] shadow-lg"
        aria-label="Open navigation"
      >
        <BookOpen size={22} />
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
        <div className="p-6 border-b border-[#c9a96e]/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center">
              <BookOpen className="text-[#c9a96e]" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#c9a96e]">النحو التفاعلي</h1>
              <p className="text-[10px] text-[#f5ecd9]/50 -mt-0.5 tracking-widest">ARABIC GRAMMAR COMPANION</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="space-y-0.5">
            {navItems.map((item, index) => {
              const Icon = iconMap[item.icon] || BookOpen;
              const active = isActive(item.href);

              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.025 }}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 mx-1 rounded-xl transition-all group ${
                    active 
                      ? "bg-[#c9a96e]/15 text-[#c9a96e]" 
                      : "hover:bg-white/5 text-[#f5ecd9]"
                  }`}
                >
                  <Icon
                    size={19}
                    className={`${active ? "text-[#c9a96e]" : "text-[#c9a96e]/70 group-hover:text-[#c9a96e]"} flex-shrink-0 transition-colors`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium ${active ? "text-[#c9a96e]" : ""}`}>{item.label}</div>
                    <div className={`text-xs arabic-text ${active ? "text-[#c9a96e]/70" : "text-[#f5ecd9]/40"}`} dir="rtl">
                      {item.arabicLabel}
                    </div>
                  </div>
                  {active && <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />}
                </motion.a>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-[#c9a96e]/15 text-center">
          <p className="text-[10px] text-[#f5ecd9]/40">Based on Nahw Mir &amp; Al-Kafiyah</p>
        </div>
      </aside>

      {/* Desktop spacer */}
      <div className="hidden lg:block w-72 flex-shrink-0" />
    </>
  );
}
