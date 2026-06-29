import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#1a2744] mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a2744] text-[#c9a96e] hover:bg-[#0f1828] transition-colors"
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}