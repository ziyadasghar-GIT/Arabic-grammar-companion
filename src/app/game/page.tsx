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
      // still show what happens but it's not the "matching" particle
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
      // restart
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

  const isCorrect = applied && sentence.particle;

  return (
    <Layout>
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a96e] mb-4 transition-colors">
        <ArrowLeft size={16} /> Dashboard
      </Link>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <GamepadIcon className="text-[#c9a96e]" size={28} />
          <h1 className="text-2xl font-bold text-[#1a2744]">Parsing Game — لعبة الإعراب</h1>
        </div>
        <p className="text-sm text-gray-600">
          Drag or tap a governing particle to apply it and watch the ending change.
          Progress: {correctCount} / {gameSentences.length}
        </p>
      </div>

      {/* Progress bar */}
      <div className="bg-[#c9a96e]/20 rounded-full h-2 mb-6 overflow-hidden">
        <motion.div
          className="bg-[#c9a96e] h-full rounded-full"
          animate={{ width: `${((currentIndex + 1) / gameSentences.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Particle tray */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-[#1a2744] mb-3">Tap a particle to apply:</p>
        <div className="flex flex-wrap gap-3">
          {gameParticles.map((p) => (
            <motion.button
              key={p.latin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={applied}
              onClick={() => handleApply(p.arabic)}
              className={`px-4 py-3 rounded-lg border-2 font-bold transition-all arabic-text text-xl disabled:opacity-50 ${
                applied && p.arabic === sentence.particle
                  ? "bg-green-100 border-green-500 text-green-800"
                  : applied
                  ? "bg-white border-gray-200 text-gray-400"
                  : "bg-white border-[#c9a96e]/40 text-[#1a2744] hover:border-[#c9a96e] hover:bg-[#f5ecd9]"
              }`}
              dir="rtl"
            >
              {p.arabic}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sentence display */}
      <div className="bg-white/70 rounded-xl border border-[#c9a96e]/30 p-8 mb-4">
        <AnimatePresence mode="wait">
          {!applied ? (
            <motion.div
              key="base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <p className="text-sm text-gray-500 mb-4">Base sentence:</p>
              <p className="arabic-text text-5xl text-[#1a2744] leading-loose" dir="rtl">
                {sentence.baseSentence}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                <span className="arabic-text" dir="rtl">{sentence.baseCase}</span>
                <span>· ending: {sentence.baseEnding}</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-sm text-gray-500 mb-4">After applying the particle:</p>
              <motion.p
                className="arabic-text text-5xl leading-loose"
                dir="rtl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="text-[#c9a96e]">{sentence.resultSentence.split(" ")[0]}</span>{" "}
                {sentence.resultSentence.split(" ").slice(1).join(" ")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm"
              >
                <span className="arabic-text" dir="rtl">{sentence.resultCase}</span>
                <span>· ending: {sentence.resultEnding}</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result explanation */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-[#1a2744] rounded-xl p-5 text-[#f5ecd9] mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#c9a96e] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-sm font-semibold text-[#c9a96e] mb-2">Why did the ending change?</p>
                  <p className="arabic-text text-base leading-relaxed" dir="rtl">
                    {sentence.resultExplanation}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full py-3 bg-[#c9a96e] text-[#1a2744] font-bold rounded-lg hover:bg-[#e0c896] transition-colors"
            >
              {currentIndex < gameSentences.length - 1 ? "Next sentence →" : "Restart ↻"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleReset}
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 mt-4 transition-colors"
      >
        <RotateCcw size={14} /> Reset game
      </button>
    </Layout>
  );
}