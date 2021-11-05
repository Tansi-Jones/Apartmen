import Banner from "../components/banner/Banner";
import DocHead from "../components/head/DocHead";
import Navbar from "../components/navbar/Navbar";
import Partner from "../components/partner/Partner";

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
            <Partner />
          </header>

          <main></main>

          <footer></footer>
        </div>
      </div>
    </>
  );
}
