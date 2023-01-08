import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
export function Index() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <h1 className="text-red-500">開工大吉</h1>
        <div className="bg-black">1123</div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
