import Link from 'next/link';
export function Index() {
  return (
    <main>
      <Link href="/products">查看商品</Link>
      <h1 className="text-red-500">開工大吉</h1>
      <div className="bg-black">1123</div>
    </main>
  );
}

export default Index;
