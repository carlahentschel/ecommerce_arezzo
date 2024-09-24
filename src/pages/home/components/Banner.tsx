import Image from 'next/image';
import BolsaMarrom from '/public/assets/BolsaMarrom.png';
import SandaliaMobile from '/public/assets/SandaliaMobile.webp';

export function Banner() {
  return (
    <section className="w-full relative">
      <Image
        src={BolsaMarrom}
        alt="Banner bolsa marrom"
        className="hidden lg:block object-cover w-full"
      />
      <Image
        src={SandaliaMobile}
        alt="Banner sandalia"
        className="block lg:hidden object-cover w-full"
      />
      <div className="absolute bottom-8 right-1/2 translate-x-1/2">
        <button className="bg-transparent hover:bg-black hover:border-none text-white text-base py-3 px-5 rounded-full min-w-32 h-14 border border-white uppercase">
          Confira
        </button>
      </div>
    </section>
  );
}
