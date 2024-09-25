import { Banner } from './home/components/Banner';
import { PromotionalBanner } from './home/components/PromotionalBanner';
import { NewCollection } from './home/components/newCollection';

export default function Home() {
  return (
    <div>
      <Banner />
      <PromotionalBanner />
      <NewCollection />
    </div>
  );
}
