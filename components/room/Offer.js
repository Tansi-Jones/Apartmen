import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
import rooms from "./room";
import Rooms from "./Rooms";

export default function Offer() {
  return (
    <section>
      <div className="space-y-10 py-10 my-16">
        <p className="text-yellow font-semibold">😍 About Us</p>
        <div className="flex items-start sm:items-center justify-between flex-col md:flex-row">
          <h1 className=" capitalize font-extrabold text-4xl md:text-6xl pb-10">
            best room for you
          </h1>
          <button className="capitalize bg-yellow py-3 px-8 text-white rounded-sm text-md flex items-center space-x-5">
            <span>see more</span>
            <span className="pt-1 text-xl">
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
        </div>
        <div className="my-10 flex items-center justify-between  space-x-10 overflow-scroll scrollbar-hide">
          {rooms.map((room) => (
            <Rooms key={room.id} check={room.features} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
