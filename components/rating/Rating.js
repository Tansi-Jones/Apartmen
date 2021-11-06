import Image from "next/image";
import rateData from "./rateData";
import Rate from "./Rate";

export default function Rating() {
  return (
    <section className="relative bg-lightBlue w-full h-[30rem] mt-32">
      <Image
        src="/img/banner/img-1.jpg"
        layout="fill"
        className=" object-cover absolute opacity-40"
      />
      <div className="absolute text-center left-0 right-0 pt-10 ">
        <p className=" font-semibold text-white">👍 Recommended</p>
        <h1 className=" capitalize font-extrabold text-5xl md:text-6xl text-white">
          user rating
        </h1>
        <div className="grid  grid-cols-3 mt-20 overflow-scroll justify-items-center ">
          {rateData.map((item) => (
            <Rate key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
