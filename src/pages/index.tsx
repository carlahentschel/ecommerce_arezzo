import { Banner } from "./home/components/Banner";
import { Header } from "./home/components/Header"

export default function Home() {
  return (
    <div>
      <main>
        <Header/>
        <Banner/>
        
      </main>
      <footer className="w-full bg-slate-400">
        
      </footer>
    </div>
  );
}
