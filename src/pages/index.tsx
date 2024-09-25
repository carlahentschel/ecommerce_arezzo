import { Banner } from './home/components/Banner';
import { Header } from './home/components/Header';
import { PromotionalBanner } from './home/components/PromotionalBanner';
import { NewCollection } from './home/components/newCollection';



export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Banner />
<PromotionalBanner />
        <NewCollection />

  
      </main>
      <footer className="w-full bg-slate-400"></footer>
    </div>
  );
}
