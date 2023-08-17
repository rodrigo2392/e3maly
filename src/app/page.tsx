import NavBar from "@/components/NavBar"
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="max-w-6xl w-full">
        <NavBar />
        <Header />
      </div>
    </main>
  );
}