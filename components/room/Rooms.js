import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck";

export default function Rooms({ img, title, amount, check }) {
  return (
    <div className=" hover:bg-white hover:shadow-md min-w-[300px] transition transform ease-out duration-700 cursor-pointer rounded-sm">
      <div className="relative w-full h-[220px]">
        <Image src={img} layout="fill" className="rounded-md" />
      </div>
      <div className="space-y-2 p-4">
        <h1 className="font-bold capitalize text-darkBlue text-2xl">{title}</h1>
        <p>
          <sup className="font-bold capitalize text-darkBlue text-md ">$ </sup>
          <span className="font-extrabold capitalize text-skyBlue text-xl ">
            {amount}.00
          </span>
          <span className="text-gray-500"> /night</span>
        </p>
        <div className="pt-5 space-y-3">
          {check.map((item, id) => (
            <p
              className="capitalize text-lg flex space-x-3 items-center"
              key={id}
            >
              <span className=" text-green-500">
                <HiBadgeCheck />
              </span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="my-2 px-4 py-2">
        <button className="capitalize text-yellow py-3 px-8 border-yellow border rounded-sm text-md flex items-center justify-between w-full hover:text-white hover:bg-yellow transition transform ease-out">
          <span>book now</span>
          <span className="pt-1 text-xl">
            <HiOutlineArrowNarrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
