import Image from "next/image";

import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";
import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";

export default function Footer() {
  return (
    <div className="py-10 flex flex-col md:flex-row  justify-between space-y-14 md:space-y-0 md:items-center">
      <div className="space-y-5">
        <h1 className=" text-2xl text-darkBlue font-bold ">
          <span className=" text-skyBlue font-bold">Apart</span>men
        </h1>
        <p className=" max-w-xs">
          <strong>Apartmen </strong>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore unde
          minima a. Eligendi vitae, accusamus inventore ea expedita, nihil
          ratione quos praesentium, omnis odio officiis? Officia officiis
          expedita laboriosam facilis!
        </p>
        <div className="flex space-x-5 text-gray-700 text-xl">
          <RiInstagramLine />
          <RiTwitterFill />
          <RiLinkedinFill />
          <RiFacebookFill />
        </div>
      </div>
      <div className="">
        <h1 className=" text-2xl text-skyBlue font-bold  pb-5">Facilities</h1>
        <div className="flex space-x-20">
          <div className="space-y-4">
            <p className="text-darkBlue">WiFi</p>
            <p className="text-darkBlue">Swimming Pool</p>
            <p className="text-darkBlue">Parking</p>
            <p className="text-darkBlue">Restaurant</p>
            <p className="text-darkBlue">Elevator</p>
          </div>
          <div className="space-y-4">
            <p className="text-darkBlue">Wheelchair Access</p>
            <p className="text-darkBlue">Fitness Center</p>
            <p className="text-darkBlue">Meeting Facilities</p>
            <p className="text-darkBlue">Airport Transfer</p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className=" text-2xl text-skyBlue font-bold  pb-5">Contact</h1>
        <div className="w-full h-[200px] md:h-[170px] bg-transparent mb-5 relative">
          <Image src="/img/map/map.jpg" layout="fill" />
        </div>
        <button className="capitalize bg-yellow py-3 px-8 text-white rounded-sm text-md flex items-center space-x-5">
          <span>get on maps</span>
          <span className="pt-1 text-xl">
            <HiOutlineArrowNarrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
