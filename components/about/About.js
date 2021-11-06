import Image from "next/image";
import { ImPlay2 } from "@react-icons/all-files/im/ImPlay2";
import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row md:space-x-16 md:justify-evenly my-32 pb-20">
      <div className="relative bg-skyBlue rounded-md w-full md:w-[25rem] h-[22rem] lg:h-[30rem]">
        <div className="absolute w-full md:w-[27rem] h-[22rem] lg:h-[30rem] md:transform md:translate-x-10 md:translate-y-14">
          <Image
            src="/img/room/img-1.jpg"
            layout="fill"
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="space-y-10 pt-10">
        <p className="text-gray-700 font-semibold">😍 About Us</p>
        <h1 className=" capitalize font-extrabold text-5xl md:text-6xl max-w-lg">
          welcome to apartmen
        </h1>
        <p className="text-gray-700 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor
          quisquam, rem recusandae rerum a exercitationem aspernatur
          consequuntur voluptatem totam!
        </p>

        <div className="flex space-x-10">
          <button className="capitalize bg-yellow py-3 px-6 md:px-8 text-white rounded-sm text-sm md:text-md flex items-center space-x-2">
            <span>read our story</span>
            <span className="pt-1 text-xl">
              <HiOutlineArrowNarrowRight />
            </span>
          </button>

          <button className="text-yellow py-3 px-1  rounded-sm text-md flex items-center space-x-2 md:space-x-5 ">
            <span>
              <ImPlay2 className="sm:text-2xl" />
            </span>
            <span>Watch Video</span>
          </button>
        </div>
      </div>
    </section>
  );
}
