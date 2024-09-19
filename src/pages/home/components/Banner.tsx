import Image from "next/image";

export function Banner() {
    return (
        <section className="relative flex flex-col justi">
            <Image
                src="/assets/BolsaMarrom.png" 
                alt="Banner"
                width={1440}
                height={720}
                
            />
            <button 
                className="absolute bg-transparent hover:bg-opacity-20 text-black py-3 px-5 rounded-[32px] border border-black"
            >
                Confira
            </button>
        </section>
    )
}