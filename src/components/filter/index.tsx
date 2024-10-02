import { categoriesTag } from '@/utils/categories-tag';
import { ArrowDownIcon } from '../icons/ArrowDownIcon';
import { CloseIcon } from '../icons/CloseIcon';
import { sizesTag } from '@/utils/sizes-tag';
import { useState } from 'react';

interface IFilterProps {
  handleClose: () => void;
}

export function Filter({ handleClose }: IFilterProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);

  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleSize = () => setIsSizeOpen(!isSizeOpen);

  return (
    <div className="relative flex flex-col p-8">
      <div className="w-full flex justify-between mb-3 ">
        <span className="text-base">Filtrar por</span>
        <button onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      <hr className="mb-3" />
      <div className="w-full flex justify-between mb-3">
        <span className="text-base">Categoria</span>
        <button
          onClick={toggleCategory}
          className={isCategoryOpen ? 'rotate-180' : 'rotate-0'}
        >
          <ArrowDownIcon />
        </button>
      </div>
      {isCategoryOpen && (
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
      )}
      <hr className="mb-3" />
      <div className="w-full flex justify-between mb-3">
        <span className="text-base">Tamanho</span>
        <button
          onClick={toggleSize}
          className={isSizeOpen ? 'rotate-180' : 'rotate-0'}
        >
          <ArrowDownIcon />
        </button>
      </div>
      {isSizeOpen && (
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
      )}
    </div>
  );
}
