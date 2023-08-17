import NavBar from "@/components/NavBar"
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center gray-gradient">
        <div className="max-w-6xl w-full">
          <NavBar />
          <Header />
        </div>
      </div>
      <div className="flex justify-center green-gradient pb-96">
        <div className="max-w-6xl w-full">
          <Card />
        </div>
      </div>
    </main>
  );
}