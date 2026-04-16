
import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import Allfreinds from "@/components/homepage/Allfreinds"
export default function Home() {
  return (
    <div className="flex flex-col pt-20 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
       <Stats />
       <Allfreinds />
    </div>
  );
}
