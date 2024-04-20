import Tracker from "@/components/tracker";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-screen-lg mx-auto p-12 gap-4">
      <Tracker title="Read atleast 15 pages of japanese novel" />
      <Tracker title="Do shodou training for 10 minutes" />
    </main>
  );
}
