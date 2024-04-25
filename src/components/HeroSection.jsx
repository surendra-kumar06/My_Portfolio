import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="px-3 py-9 flex flex-col md:flex-row md:justify-between justify-center items-center gap-8" >
        <div className="">
            <h1 className="text-2xl md:text-4xl font-bold py-3">Hi, I am Surendra Kumar</h1>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent pb-5">Front-End Developer</h2>
            <a href="">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 rounded-md">Resume</button>
            </a>
            <div className="py-6 flex space-x-4">
                 <Image 
                src="/html_icon.svg"
                className="w-8"
                height={300}
                width={300}
                alt='linkedin'/>
                 <Image 
                src="/css_icon.svg"
                className="w-8"
                height={300}
                width={300}
                alt='linkedin'/>
                 <Image 
                src="/tailwind_icon.svg"
                className="w-8"
                height={300}
                width={300}
                alt='linkedin'/>
                 <Image 
                src="/javascript_icon.svg"
                className="w-8"
                height={300}
                width={300}
                alt='linkedin'/>
                 <Image 
                src="/react_icon.svg"
                className="w-8"
                height={300}
                width={300}
                alt='linkedin'/>
                
                </div>
        </div>
        <div className="">
        <Image 
                src="/heroimg2.jpg"
                className="rounded"
                height={300}
                width={300}
                alt='linkedin'/>
        </div>
    </section>
  )
}

export default HeroSection