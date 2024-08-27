import Link from "next/link";
import logo from '@/images/recipe-logo.png'
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-4 base-bg">
      <Image 
      src={logo}
      className='w-60 shadow-xl rounded-full hover:rotate-6 transition-all'
      />
      <h1 className="text-4xl font-bold">Welcome to Royal Treats!</h1>    
       <Link href={'recipe-list'} className="mt-1 py-2 px-4 rounded-xl shadow-lg shadow-black bg-yellow-400 hover:scale-110 font-bold text-2xl">Explore recipes</Link>
    </div>
  );
}
