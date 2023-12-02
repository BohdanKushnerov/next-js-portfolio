import { FC } from 'react'
import Image from 'next/image';

const Avatar: FC = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        // width={400}
        // height={350}
        alt=""
        className="translate-z-0 w-full h-full"
        // className="translate-z-0"
      />
    </div>
  );
}

export default Avatar;
