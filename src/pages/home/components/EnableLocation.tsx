import { LocationIcon } from './icons/LocationIcon';

export function EnableLocation() {
  return (
    <button className=" hidden md:flex items-center">
      <LocationIcon />
      <span className="hidden lg:flex uppercase underline text-xs font-normal">
        Ative sua localização
      </span>
    </button>
  );
}
