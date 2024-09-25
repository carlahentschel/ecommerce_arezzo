export function PromotionalBanner() {
    return (
        <section className="flex justify-center items-center w-full bg-black h-12 sm:h-10 px-6 py-2">
            <p className="text-white text-xs font-semibold leading-5 uppercase text-center tracking-widest">
                Frete fixo{''} <span className="font-light tracking-wide">em R$ 9,90 para regiões sul, sudeste e capitais de NE e CO.</span> 
            </p>
        </section>
    )
}