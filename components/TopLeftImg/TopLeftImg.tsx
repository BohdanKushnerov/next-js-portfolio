import { FC } from "react";
import Image from "next/image";

const TopLeftImg: FC = () => {
  
  return (
    // z-10
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[480px] opacity-50">
      <Image src="/top-left-img.png" width={350} height={350} alt="" />
    </div>
  );
};

export default TopLeftImg;
