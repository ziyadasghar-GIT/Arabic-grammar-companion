"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GamepadIcon, RotateCcw, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { CaseLegend, CaseLabel } from "@/components/CaseBadge";
import { gameSentences, gameParticles } from "@/data/parsing-game";

type FeedbackType = "correct" | "wrong" | null;

export default function GamePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const sentence = gameSentences[currentIndex];

  const handleApply = (index: number) => {
    if (feedback) return; // already answered

    const particle = gameParticles[index];
    setChosenIndex(index);

    if (particle.arabic === sentence.particle) {
      setFeedback("correct");
      setCorrectCount((c) => c + 1);
    } else {
      setFeedback("wrong");
      setWrongAttempts((w) => w + 1);
    }
  };

  const handleResetFeedback = () => {
    setFeedback(null);
    setChosenIndex(null);
  };

  const handleNext = () => {
    if (currentIndex < gameSentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      setCorrectCount(0);
      setWrongAttempts(0);
    }
    setFeedback(null);
    setChosenIndex(null);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setFeedback(null);
    setChosenIndex(null);
    setCorrectCount(0);
    setWrongAttempts(0);
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
        <p className="text-sm text-[#4a4a4a]">
          Tap the correct governing particle. {correctCount} / {gameSentences.length} correct
          {wrongAttempts > 0 && <span> · {wrongAttempts} wrong</span>}
        </p>
      </div>

      <div className="mb-6">
        <CaseLegend size="compact" />
      </div>

      <div className="bg-[#c9a96e]/15 rounded-full h-1.5 mb-6 overflow-hidden">
        <motion.div
          className="bg-[#c9a96e] h-1.5 rounded-full"
          animate={{ width: `${((currentIndex + 1) / gameSentences.length) * 100}%` }}
        />
      </div>

      {/* Particles */}
      <div className="mb-6">
        <p className="text-xs tracking-widest font-semibold text-[#c9a96e] mb-2 px-1">GOVERNING PARTICLES</p>
        <div className="flex flex-wrap gap-2">
          {gameParticles.map((p, idx) => {
            const isChosen = chosenIndex === idx;
            const isCorrect = isChosen && feedback === "correct";
            const isWrong = isChosen && feedback === "wrong";
            const isRevealedCorrect = p.arabic === sentence.particle && feedback === "correct";

            let btnStyle = "bg-white border-[#c9a96e]/40 hover:border-[#c9a96e] text-[#1a2744]";
            if (isCorrect || isRevealedCorrect) {
              btnStyle = "bg-[#d1fae5] border-[#34d399] text-[#065f46]";
            } else if (isWrong) {
              btnStyle = "bg-[#fee2e2] border-[#ef4444] text-[#991b1b]";
            } else if (feedback && !isChosen && p.arabic !== sentence.particle) {
              btnStyle = "bg-white border-gray-200 text-gray-400";
            }

            return (
              <button
                key={p.latin}
                onClick={() => handleApply(idx)}
                disabled={feedback !== null}
                className={`px-4 py-2.5 rounded-xl border text-lg arabic-text transition-all disabled:cursor-default ${btnStyle}`}
                dir="rtl"
              >
                {p.arabic}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sentence display */}
      <div className="card rounded-2xl p-8 mb-5 min-h-[180px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {feedback !== "correct" ? (
            <div key="base" className="text-center w-full">
              <div className="text-xs uppercase tracking-widest text-[#c9a96e]/70 mb-2">BASE FORM</div>
              <p className="arabic-text text-4xl lg:text-5xl leading-loose text-[#1a2744]" dir="rtl">
                {sentence.baseSentence}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <CaseLabel text={sentence.baseCase} />
                <span className="text-sm text-[#1a2744]/60">ending {sentence.baseEnding}</span>
              </div>
            </div>
          ) : (
            <div key="result" className="text-center w-full">
              <div className="text-xs uppercase tracking-widest text-[#c9a96e]/70 mb-2">AFTER PARTICLE — {sentence.particle}</div>
              <p className="arabic-text text-4xl lg:text-5xl leading-loose text-[#1a2744]" dir="rtl">
                {sentence.resultSentence}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <CaseLabel text={sentence.resultCase} />
                <span className="text-sm text-[#1a2744]/60">ending {sentence.resultEnding}</span>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Feedback area */}
      <AnimatePresence>
        {feedback === "wrong" && (
          <motion.div key="wrong" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
            <div className="bg-[#fee2e2] text-[#991b1b] rounded-2xl p-5 border border-[#fca5a5]">
              <div className="flex items-center gap-3">
                <XCircle size={22} className="flex-shrink-0 text-[#ef4444]" />
                <div>
                  <div className="font-semibold mb-0.5">Not quite</div>
                  <p className="text-sm opacity-90">
                    The particle <span className="arabic-text font-semibold" dir="rtl">{gameParticles[chosenIndex!].arabic}</span> doesn't govern this sentence. Try another particle.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleResetFeedback}
              className="w-full py-3 rounded-2xl bg-gray-100 text-[#1a2744] font-semibold hover:bg-gray-200 transition-colors border border-gray-200"
            >
              Try again
            </button>
          </motion.div>
        )}

        {feedback === "correct" && (
          <motion.div key="correct" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
            <div className="bg-[#d1fae5] text-[#065f46] rounded-2xl p-5 border border-[#6ee7b7]">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={22} className="flex-shrink-0 text-[#059669]" />
                <div>
                  <div className="font-semibold mb-0.5">Correct!</div>
                  <p className="text-sm opacity-90"><span className="arabic-text font-semibold" dir="rtl">{sentence.particle}</span> is the right particle.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a2744] text-[#f5ecd9] rounded-2xl p-5 border border-[#c9a96e]/30">
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