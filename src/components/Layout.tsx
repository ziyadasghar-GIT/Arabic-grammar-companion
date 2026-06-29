import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 min-w-0 p-4 lg:p-8 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}