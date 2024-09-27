import { BreadCrumb } from './components/breadCrumb';
import { SandalsList } from './components/sandalsList';
import { TypesSandalsCards } from './components/typesSandalsCards';

export default function SandalsPDC() {
  return (
    <div>
      <BreadCrumb />
      <TypesSandalsCards />
      <SandalsList />
    </div>
  );
}
