"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GamepadIcon, RotateCcw, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { gameSentences, gameParticles, type GameSentence } from "@/data/parsing-game";

export default function GamePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [applied, setApplied] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const sentence = gameSentences[currentIndex];

  const handleApply = (particleArabic: string) => {
    if (particleArabic === sentence.particle) {
      setApplied(true);
      setShowResult(true);
      setCorrectCount((c) => c + 1);
    } else {
      setApplied(true);
      setShowResult(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < gameSentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setApplied(false);
      setShowResult(false);
    } else {
      setCurrentIndex(0);
      setApplied(false);
      setShowResult(false);
      setCorrectCount(0);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setApplied(false);
    setShowResult(false);
    setCorrectCount(0);
  };

  return (
    <Layout>
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a96e] mb-4">
        <ArrowLeft size={16} /> Dashboard
      </Link>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#1a2744] rounded-lg text-[#c9a96e]"><GamepadIcon size={24} /></div>
          <div>
            <h1 className="text-2xl font-semibold text-[#1a2744]">Parsing Game</h1>
            <p className="arabic-text text-[#c9a96e] text-xl" dir="rtl">لعبة الإعراب</p>
          </div>
        </div>
        <p className="text-sm text-[#4a4a4a]">Tap a governing particle to apply it and watch the ending change. Progress: {correctCount} / {gameSentences.length}</p>
      </div>

      {/* Progress */}
      <div className="bg-[#c9a96e]/15 rounded-full h-1.5 mb-6 overflow-hidden">
        <motion.div className="bg-[#c9a96e] h-1.5 rounded-full" animate={{ width: `${((currentIndex + 1) / gameSentences.length) * 100}%` }} />
      </div>

      {/* Particles */}
      <div className="mb-6">
        <p className="text-xs tracking-widest font-semibold text-[#c9a96e] mb-2 px-1">GOVERNING PARTICLES</p>
        <div className="flex flex-wrap gap-2">
          {gameParticles.map((p) => (
            <button
              key={p.latin}
              onClick={() => handleApply(p.arabic)}
              disabled={applied}
              className={`px-4 py-2.5 rounded-xl border text-lg arabic-text transition-all disabled:opacity-40 ${
                applied && p.arabic === sentence.particle
                  ? "bg-green-100 border-green-400 text-green-900"
                  : applied
                  ? "bg-white border-gray-200 text-gray-400"
                  : "bg-white border-[#c9a96e]/40 hover:border-[#c9a96e] text-[#1a2744]"
              }`}
              dir="rtl"
            >
              {p.arabic}
            </button>
          ))}
        </div>
      </div>

      {/* Sentence area */}
      <div className="card rounded-2xl p-8 mb-5 min-h-[180px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!applied ? (
            <div key="base" className="text-center w-full">
              <div className="text-xs uppercase tracking-widest text-[#c9a96e]/70 mb-2">BASE FORM</div>
              <p className="arabic-text text-4xl lg:text-5xl leading-loose text-[#1a2744]" dir="rtl">
                {sentence.baseSentence}
              </p>
              <div className="mt-4 inline-block text-sm bg-blue-100 text-blue-800 px-3 py-0.5 rounded-full">
                {sentence.baseCase} · ending {sentence.baseEnding}
              </div>
            </div>
          ) : (
            <div key="result" className="text-center w-full">
              <div className="text-xs uppercase tracking-widest text-[#c9a96e]/70 mb-2">AFTER PARTICLE</div>
              <p className="arabic-text text-4xl lg:text-5xl leading-loose text-[#1a2744]" dir="rtl">
                {sentence.resultSentence}
              </p>
              <div className="mt-4 inline-block text-sm bg-red-100 text-red-800 px-3 py-0.5 rounded-full">
                {sentence.resultCase} · ending {sentence.resultEnding}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="bg-[#1a2744] text-[#f5ecd9] rounded-2xl p-5">
              <div className="flex gap-3">
                <CheckCircle2 className="text-[#c9a96e] mt-0.5 flex-shrink-0" size={22} />
                <div>
                  <div className="text-[#c9a96e] text-sm font-semibold mb-1">Why did the ending change?</div>
                  <p className="arabic-text text-base leading-relaxed" dir="rtl">{sentence.resultExplanation}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 rounded-2xl bg-[#c9a96e] text-[#1a2744] font-semibold hover:bg-[#e0c896] active:bg-[#c9a96e] transition-colors"
            >
              {currentIndex < gameSentences.length - 1 ? "Next sentence →" : "Restart ↻"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={handleReset} className="mt-5 text-sm flex items-center gap-1.5 text-gray-500 hover:text-red-600">
        <RotateCcw size={15} /> Reset game
      </button>
    </Layout>
  );
}
