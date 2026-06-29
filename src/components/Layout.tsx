import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 min-w-0 px-5 py-6 lg:px-10 lg:py-8 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
