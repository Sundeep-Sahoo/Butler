// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return( 
//   <div className="mt-40">
//   <Button variant="destructive">Welcome to fintech</Button>;
//   </div>
//   )
//   }

import HeroSection from "@/components/hero";
export default function Home() {
  return(<div className="mt-40">
    <HeroSection />
    </div>
    );
  }