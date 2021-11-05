import Image from "next/image";
import { ImPlay2 } from "@react-icons/all-files/im/ImPlay2";

export default function About() {
  return (
    <section className="grid xl:grid-cols-2 my-20 pb-20">
      <div className="relative bg-skyBlue rounded-md w-[20rem] h-[25rem]">
        <div className="absolute w-[20rem] h-[25rem]">
          <Image
            src="/img/banner/img-1.jpg"
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
          <button className="bg-yellow py-3 px-8 text-white rounded-sm text-md">
            <span>Read our Story</span>
          </button>

          <button className="text-yellow py-3 px-1 bg-transparent rounded-sm text-md flex items-center space-x-2 md:space-x-5 hover:border">
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