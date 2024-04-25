import Image from "next/image"


const ContactMe = () => {
  return (
    <div className="px-4 py-5">
        <div>
        <h5 className="text-xl font-semibold text-center">Contact <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Me</span></h5>
        </div>
        <div className="flex justify-center items-center gap-10 p-5">
        <div className='w-12'>
            <a href="instagram://user?username=surendra.kumar06" >
                <Image 
                src="/instagram_icon.png"
                height={300}
                width={300}
                alt='linkedin'/>
            </a>
        </div>
        <div className='w-11 '>
            <a href="https://x.com/surendra_kumar6?t=8PFsRBReiLFM8ovUvwQsXg&s=35" >
                <Image 
                className="rounded-lg"
                src="/twitter-logo-2.svg"
                height={300}
                width={300}
                alt='linkedin'/>
            </a>
        </div>
        <div className='w-12'>
            <a href="https://www.linkedin.com/in/surendra-kumar-web-dev/" >
                <Image 
                 src="/linkedin_icon.png"
                height={300}
                width={300}
                alt='linkedin'/>
            </a>
        </div>
        </div>
    </div>
  )
}

export default ContactMe