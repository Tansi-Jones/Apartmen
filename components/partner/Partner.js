import images from "./images";
import Image from "next/image";

export default function Partner() {
  return (
    <div className="py-16">
      <div className="flex items-center justify-evenly mb-5">
        {images.map(({ id, url }) => (
          <div
            className="relative lg:w-[4rem] lg:h-[4rem] w-[2rem] h-[2rem]"
            key={id}
          >
            <Image src={url} layout="fill" />
          </div>
        ))}
      </div>
      <hr className=" border-gray-300 w-[90%] mx-auto" />
    </div>
  );
}
