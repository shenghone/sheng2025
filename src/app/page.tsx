import Corona from "./components/Corona";
import Sheng from "./components/Sheng";

export default function Home() {
  return (
    <div className="grid relative h-[100%] w-[100%] font-[family-name:var(--font-geist-sans)]">
      <Sheng/>
      <Corona/>
      {/*<div className="absolute left-0 w-[60%] h-[100%] bg-black"></div>
      <div className="absolute right-0 w-[40%] h-[100%] bg-red-500"></div>*/}
    </div>
  );
}
