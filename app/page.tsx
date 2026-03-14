import Header from "@/app/components/Header";
import Gallery from "@/app/components/Gallery";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Gallery />
      <Footer />
    </main>
  );
}
