import Banner from "../components/banner/Banner";
import DocHead from "../components/head/DocHead";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* Document Head */}
      <DocHead />

      <div className="bg-zeroBlue">
        <nav className="py-4">
          <Navbar />
        </nav>
        <div className="w-[90%] mx-auto font-lato tracking-wider">
          <header>
            <Banner />
          </header>

          <main></main>

          <footer></footer>
        </div>
      </div>
    </>
  );
}
