import Image from "next/image";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 my-14">
      <div className="space-y-5">
        <h1 className=" capitalize font-extrabold text-5xl">
          best apartment & hotel
          <span className="text-skyBlue"> service</span>
        </h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam
          qui magnam, sequi ipsam obcaecati quibusdam! Laborum ut mollitia ipsum
          numquam, maxime, provident ab, eius consequuntur cumque omnis est
          illo.
        </p>
        <div className="flex space-x-6">
          <h1>
            <span className=" font-extrabold text-2xl ">347 </span>
            <span className=" font-medium text-gray-700 text-sm">Hotel</span>
          </h1>
          <h1>
            <span className=" font-extrabold text-2xl ">236 </span>
            <span className=" font-medium text-gray-700 text-sm">
              Apartment
            </span>
          </h1>
        </div>
        <button className="bg-yellow py-2 px-4 text-white rounded-sm text-sm">
          <span>Book Now</span>
        </button>
      </div>
      <div className="">
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-2 ">
          <div className="bg-red-200  rounded-md h-[16rem]">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              layout="fill"
            />
          </div>
          <div className="bg-red-200  col-start-1 row-start-2 col-span-2 rounded-md">
            2
          </div>
          <div className="bg-red-200  rounded-md">3</div>
          <div className="bg-red-200  col-start-3 row-span-2 rounded-md ">
            5
          </div>
        </div>
      </div>
    </div>
  );
}
