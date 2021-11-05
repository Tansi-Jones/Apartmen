import { RiShieldCheckFill } from "@react-icons/all-files/ri/RiShieldCheckFill";

export default function Service() {
  return (
    <div className="my-10 space-y-5 text-center pb-10">
      <p className="text-gray-700 font-semibold">👍 Recommended</p>
      <h1 className=" capitalize font-extrabold text-5xl md:text-6xl ">
        best service
      </h1>
      <div className="flex flex-col md:flex-row space-y-5 pt-20 justify-evenly">
        <div className="bg-white px-8 py-16 flex flex-col justify-center items-center space-y-5 rounded-md">
          <div className="w-[40px] h-[40px] p-3 rounded-full bg-lightBlue ">
            <RiShieldCheckFill className="text-md text-white" />
          </div>
          <h3 className="text-gray-700 capitalize font-extrabold text-lg">
            app for control
          </h3>
          <p className="text-gray-700 max-w-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            minus harum, et asperiores velit totam.
          </p>
        </div>

        <div className="bg-lightBlue px-8 py-16 flex flex-col justify-center items-center space-y-5 md:transform md:translate-y-[-4rem] rounded-md shadow-3xl">
          <div className="w-[40px] h-[40px] p-3 rounded-full bg-white ">
            <RiShieldCheckFill className="text-md text-lightBlue" />
          </div>
          <h3 className="text-white capitalize font-extrabold text-lg">
            comfortable room
          </h3>
          <p className="text-white max-w-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            minus harum, et asperiores velit totam.
          </p>
        </div>

        <div className="bg-white px-8 py-16 flex flex-col justify-center items-center space-y-5 rounded-md">
          <div className="w-[40px] h-[40px] p-3 rounded-full bg-lightBlue ">
            <RiShieldCheckFill className="text-md text-white" />
          </div>
          <h3 className="text-gray-700 capitalize font-extrabold text-lg">
            beatiful scenery
          </h3>
          <p className="text-gray-700 max-w-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            minus harum, et asperiores velit totam.
          </p>
        </div>
      </div>
    </div>
  );
}
