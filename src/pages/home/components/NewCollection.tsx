import Image from "next/image";
import Livia1 from "/public/assets/Livia1.png";
import Livia2 from "/public/assets/Livia2.png";

export function NewCollection() {
    return (
        <section className="w-full px-8 py-3">
            <div className="flex flex-col lg:flex-row lg:items-end">
                <div className="lg:w-2/5">
                    <h2 className="uppercase">
                        <span className="block text-xs font-normal">Nova coleção</span>
                        <span className="text-2xl font-light tracking-widest"># liviaarezzo</span>
                    </h2>
                    <div>
                        <Image
                            src={Livia1}
                            alt="Modelo deitada usando coturno Livia preto com sola rosa"
                            className="w-1/2 lg:w-full"
                        />
                    </div>
                </div>
                
                <div className="w-1/2 lg:w-2/5">
                    <Image
                        src={Livia2}
                        alt="Modelo sentada usando coturno Livia preto com sola rosa"  
                    />
                </div>
                <div className="lg:w-1/5 lg:pl-5">
                    <h3 className="text-base font-normal leading-5 mb-3">
                        <span className="block">Conheça o novo coturno</span>
                        <span>Livia Arezzo</span>
                    </h3>
                    <button className="text-xs font-normal text-white bg-black rounded-full px-4 py-2">Ver coleção</button>
                </div>
            </div>
        </section>
    )
}