import { categoriesTag } from '@/utils/categories-tag';
import { ArrowDownIcon } from '../icons/ArrowDownIcon';
import { CloseIcon } from '../icons/CloseIcon';
import { sizesTag } from '@/utils/sizes-tag';

interface IFilterProps {
  handleClose: () => void;
}

export function Filter({ handleClose }: IFilterProps) {
  return (
    <div className="flex flex-col w-full lg:w-1/4 px-4 py-4 ">
      <div className="w-full flex justify-between mb-3">
        <span className="text-base">Filtrar por</span>
        <button onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      <hr className="mb-3" />
      <div className="w-full flex justify-between mb-3">
        <span className="text-base">Categoria</span>
        <button>
          <ArrowDownIcon />
        </button>
      </div>
      <div className="flex flex-wrap gap-3 mb-3">
        {categoriesTag.map((category, index) => (
          <button
            key={index}
            className="flex justify-center items-center text-xs font-normal px-3 h-7 rounded-full bg-gray-200 gap-4 w-auto"
          >
            {category}
          </button>
        ))}
      </div>
      <hr className="mb-3" />
      <div className="w-full flex justify-between mb-3">
        <span className="text-base">Tamanho</span>
        <button>
          <ArrowDownIcon />
        </button>
      </div>
      <div className="flex flex-wrap gap-3 mb-3">
        {sizesTag.map((size, index) => (
          <button
            key={index}
            className="flex justify-center items-center text-xs font-normal px-3 h-7 rounded-full bg-gray-200 gap-4 w-auto"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
