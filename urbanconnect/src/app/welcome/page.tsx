import InventoryListing from '@/app/components/InventoryListing';
import Image from 'next/image';
import urbanBackground from '@/assets/urbanconnectBackground.png';
import TopBarTranspartUrbanConnect from '@/app/components/Topbar/TranspartUrbanConnect';
import BottomBarMobileUrbanConnect from '../components/BottomBar/MobileUrbanConnect';


export default function InventoryPage() {

  return <>
    <div className="bg-white min-h-screen relative w-full overflow-auto" data-name="Frame">
      <div className="absolute inset-0 opacity-10" data-name="Abstract city skyline">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src={urbanBackground}
            alt="Urban Connect Background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="relative isolate w-full" data-name="Container">
        <TopBarTranspartUrbanConnect />
        <InventoryListing />
        <BottomBarMobileUrbanConnect />
      </div>
    </div>

  </>
}

export const metadata = {
  title: "Inventaire - UrbanConnect",
  description: "Gérez vos produits, services, utilisateurs et offres d'emploi sur UrbanConnect.",
};