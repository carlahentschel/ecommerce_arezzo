import { Banner } from './home/components/Banner';
import { Header } from './home/components/Header';
import { NewCollection } from './home/components/newCollection';
import { PromotionalBanner } from './home/components/PromotionalBanner';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Banner />
        <NewCollection />
        <PromotionalBanner />
      </main>
      <footer className="w-full bg-slate-400"></footer>
    </div>
  );
}
