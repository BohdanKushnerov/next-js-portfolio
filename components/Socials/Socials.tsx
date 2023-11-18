import { FC } from 'react'
import Link from 'next/link';
import { RiGithubLine, RiLinkedinLine, RiTelegramLine, RiYoutubeLine} from 'react-icons/ri'

const Socials: FC = () => {
  return (
    <div className='flex items-center gap-x-6 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine/>
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTelegramLine/>
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine/>
      </Link>
    </div>
  )
}

export default Socials;
