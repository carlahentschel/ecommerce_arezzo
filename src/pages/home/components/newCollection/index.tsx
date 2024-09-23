import Image from 'next/image';
import Livia1 from '/public/assets/Livia1.png';
import Livia2 from '/public/assets/Livia2.png';

export function NewCollection() {
  return (
    <section className="w-full p-8">
      <div className="flex flex-col md:flex-row md:items-end azul">
        <div className="flex flex-col laranja">
          <div className="flex flex-col verde">
            <h2 className="uppercase lock text-xs font-normal">Nova coleção</h2>
            <span className="text-2xl font-light tracking-widest">
              # liviaarezzo
            </span>
          </div>

          <div className="flex items-end verde gap-2 md:-mt-10">
            <div>
              <Image
                src={Livia1}
                alt="Modelo deitada usando coturno Livia preto com sola rosa"
                width={400}
                height={400}
                className="object-cover md:mt-20"
              />
            </div>
            <div>
              <Image
                src={Livia2}
                alt="Modelo sentada usando coturno Livia preto com sola rosa"
                width={437}
                height={592}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col verde">
          <h3 className="text-base font-normal leading-5 mb-3">
            <span className="block">Conheça o novo coturno</span>
            <span>Livia Arezzo</span>
          </h3>
          <button className="text-xs font-normal text-white bg-black rounded-full px-4 py-2">
            Ver coleção
          </button>
        </div>
      </div>
    </section>
  );
}
