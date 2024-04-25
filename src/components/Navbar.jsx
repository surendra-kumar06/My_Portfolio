import Image from 'next/image'
import { Lugrasimo } from "next/font/google";
const lugrasimo = Lugrasimo({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-3 backdrop-blur-md sticky top-0 shadow'>
        <div className={`${lugrasimo.className} font-bold text-lg `}>
        surendra kumar
        </div>
        <div className='flex space-x-2 items-center'>
        <div className='w-7'>
            <a href="https://github.com/surendra-kumar06/" >
                <Image 
                src="/github_icon.svg"
                height={300}
                width={300}
                alt='linkedin'/>
            </a>
        </div>
        <div className='w-8'>
            <a href="https://www.linkedin.com/in/surendra-kumar-web-dev/" >
                <Image 
                src="/linkedin_icon.png"
                height={300}
                width={300}
                alt='linkedin'/>
            </a>
        </div>
       
       
        </div>
       
    </nav>
  )
}

export default Navbar