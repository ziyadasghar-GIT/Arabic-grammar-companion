import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import ModuleContent from "@/components/ModuleContent";
import { allModules, getModuleById } from "@/data/modules";

export function generateStaticParams() {
  return allModules.map((m) => ({ id: m.id }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const moduleData = getModuleById(id);

  if (!moduleData) {
    return (
      <Layout>
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 mb-4">Module not found</p>
          <Link
            href="/"
            className="text-[#c9a96e] hover:underline flex items-center gap-1 justify-center"
          >
            <ArrowLeft size={16} /> Back to dashboard
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a96e] mb-4 transition-colors"
      >
        <ArrowLeft size={16} /> Dashboard
      </Link>
      <ModuleContent module={moduleData} />
    </Layout>
  );
}