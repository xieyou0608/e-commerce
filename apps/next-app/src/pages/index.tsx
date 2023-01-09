import Link from 'next/link';
import Image from 'next/image';
export function Index() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="flex gap-x-5 text-2xl font-bold text-gray-400 my-5">
        <Link href="/products">All</Link>|<Link href="/products">Women</Link>|
        <Link href="/products">Men</Link>|<Link href="/products">Jewelery</Link>
        |<Link href="/products">electronic</Link>
      </div>
      <div className="w-[90vw] h-[100vh] relative">
        <Image
          src="https://i.imgur.com/2eFUhHk.jpg"
          alt="landing-page-image"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </main>
  );
}

export default Index;
