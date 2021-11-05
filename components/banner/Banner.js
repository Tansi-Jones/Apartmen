import Image from "next/image";

export default function Banner() {
  return (
    <div className="grid lg:grid-cols-2 my-7 md:my-16 gap-10">
      <div className="space-y-10 pt-14">
        <h1 className=" capitalize font-extrabold text-5xl md:text-6xl max-w-lg">
          best apartment & hotel
          <span className="text-skyBlue"> service</span>
        </h1>
        <p className="text-gray-700 max-w-md">
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
        <button className="bg-yellow py-3 px-8 text-white rounded-sm text-sm">
          <span>Book Now</span>
        </button>
      </div>
      <div className="">
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-2 ">
          <div className="relative  rounded-md h-[18rem]">
            <Image
              src="/img/banner/img-1.jpg"
              layout="fill"
              className="  rounded-md object-cover"
            />
          </div>
          <div className="relative   col-start-1 row-start-2 col-span-2 rounded-md">
            <Image
              src="/img/banner/img-2.jpg"
              layout="fill"
              className="  rounded-md object-cover"
            />
            <div className="hidden md:block md:absolute bottom-1/3 lg:left-[-7rem] ">
              <div className="flex relative space-x-4 bg-white p-2 w-[18rem] rounded-md">
                <div className="relative rounded-md w-[50px] h-[50px]">
                  <Image
                    src="/img/avatar/avatar-1.jpg"
                    layout="fill"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex items-center space-x-10">
                  <div>
                    <p className="font-semibold">Onky Soorya</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                  <div className="rounded-md w-[40px] h-[40px] py-1 px-2 bg-lightyellow text-xl">
                    👍
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-md">
            <Image
              src="/img/banner/img-4.jpg"
              layout="fill"
              className="  rounded-md object-cover"
            />
          </div>
          <div className="relative col-start-3 row-span-2 rounded-md ">
            <Image
              src="/img/banner/img-3.jpg"
              layout="fill"
              className="  rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
