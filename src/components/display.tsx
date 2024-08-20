import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import DisplayImg from "./disp-img.webp"
import Image from "next/image"

export const Display = () => {
    return (
        <section id="home" className="w-full md:h-screen bg-gray-100 h-auto py-28">
            <div className="max-w-[70rem] mx-auto px-[4rem]">
                <div className='flex flex-col justify-center items-center h-[65rem] relative md:gap-16 text-center md:text-left h-auto gap-12'>
                    <div className='flex md:flex-row flex-col-reverse justify-center items-center md:gap-16 relative text-center h-auto gap-8'>
                        <div className='flex flex-col max-w-[31.25rem]'>
                            <DisplayContent />
                            <RefTags />
                        </div>
                        <DisplayImage/>
                    </div>
                    <Skills />
                </div>
            </div>
        </section>
    )
}

export const DisplayContent = () => {
    return <>
        <h1 className='md:text-left sm:text-[3.5rem] leading-[1.2] text-[#2d2e32] my-8 text-[2.5rem]'>Software Developer</h1>
        <p className='md:text-left justify-normal text-[1.1rem] font-medium text-[#555555] font-serif leading-[1.6] md:mb-4 mb-16'>
        Hi, I'm Harshit Goyal. A passionate Software Developer based in Chandigarh, India. 📍
        </p>
    </>
}

export const RefTags = () => {
    return <span className='flex md:gap-[1.3rem] gap-[1.6rem] my-10 cursor-pointer mt-[-2rem] md:mt-0 justify-center md:justify-normal mb-16 md:mb-0'>
        <a className="text-[1.8rem] hover:text-blue-400"
        aria-label="linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/amharshit45/">
            <IconBrandLinkedin width={30} height={30} />
        </a> 
        <a className="text-[1.8rem] hover:text-blue-400"
        aria-label="github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/amharshit45">
            <IconBrandGithub width={30} height={30}/>
        </a>
        <a className="text-[1.8rem] hover:text-blue-400"
        aria-label="x"
        target="_blank"
        rel="noreferrer"
        href="https://x.com/amharshit45">
            <IconBrandX width={30} height={30}/>
        </a>
        <a className="text-[1.8rem] hover:text-blue-400"
        aria-label="leetcode"
        target="_blank"
        rel="noreferrer"
        href="https://leetcode.com/u/amharshit45/">
            <IconBrandLeetcode width={30} height={30}/>
        </a>
    </span>
}

const DisplayImage = () => {
    return (
        <div className='display-img'>
            {/* <Image src={DisplayImg} alt='dis_img' width={24} height={24}></Image> */}
        </div>
    )
}

const Skills = () => {
    return (
        <div className='flex text-[1.2rem] items-center bottom-0 left-0 flex-col md:flex-row'>
            <p className='mr-0 md:mr-16 pr-0 md:pr-8 pb-4 md:pb-0 mb-12 md:mb-0 font-semibold font-nav font-serif border-b-2 md:border-r-2 md:border-b-0 border-slate-700'>Tech Stack</p>
            <div>
                <ul className='flex flex-wrap justify-center md:justify-normal gap-12'>
                {skillsIcons.map((icon) => (
                    <li className='cursor pointer' key={icon.id}>
                    <img className='w-30 h-15 transition-all duration-300 ease-in-out hover:translate-y-[-1rem]' src={icon.img} alt="skill-icon" />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

const skillsIcons = [{
        img: 'https://skillicons.dev/icons?i=html,css',
        id: 1
    }, {
        img: "https://skillicons.dev/icons?i=js,ts",
        id: 2
    }, {
        img: "https://skillicons.dev/icons?i=react,next",
        id: 3
    }, {
        img: "https://skillicons.dev/icons?i=tailwind,scss",
        id: 4
    }, {
        img: 'https://skillicons.dev/icons?i=c,cpp',
        id: 5
    }, {
        img: 'https://skillicons.dev/icons?i=git,github',
        id: 6
    }, {
        img: 'https://skillicons.dev/icons?i=mongodb,postgres',
        id: 7
    }
]