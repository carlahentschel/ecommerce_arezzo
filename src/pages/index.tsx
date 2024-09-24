import { Banner } from "./home/components/Banner";
import { Header } from "./home/components/Header"
import { PromotionalBanner } from "./home/components/PromotionalBanner";

export default function Home() {
  return (
    <div>
      <main>
        <Header/>
        <Banner/>
        <PromotionalBanner/>
        
      </main>
      <footer className="w-full bg-slate-400">
        
      </footer>
    </div>
  );
}
