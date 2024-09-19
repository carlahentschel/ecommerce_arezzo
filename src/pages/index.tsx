import { Banner } from "./home/components/Banner";
import { Header } from "./home/components/Header"

export default function Home() {
  return (
    <div>
      <main>
        <Header/>
        <Banner/>
        <section className="w-full bg-slate-300">body</section>
      </main>
      <footer className="w-full bg-slate-400">
        <p>footer</p>
      </footer>
    </div>
  );
}
