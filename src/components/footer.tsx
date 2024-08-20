import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconBrandLeetcode } from "@tabler/icons-react"; 

export const Footer = () => {
    return (
    <footer className="bg-[#2d2e32] text-white py-20 w-full">
        <div className="max-w-[70rem] mx-auto px-[4rem]">
            <div className="flex md:justify-between md:gap-x-20 gap-x-8 md:items-center flex-wrap justify-center text-center gap-y-8">
                <h3 className="font-bold"> Copyright © {new Date().getFullYear()}. All rights are reserved. </h3>
                <div className="flex justify-center gap-x-8">
                    <a className="hover:scale-125 transition-all duration-200 ease-in-out"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/amharshit45/">
                        <IconBrandLinkedin width={30} height={30} />
                    </a> 
                    <a className="hover:scale-125 transition-all duration-200 ease-in-out"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/amharshit45">
                        <IconBrandGithub width={30} height={30}/>
                    </a>
                    <a className="hover:scale-125 transition-all duration-200 ease-in-out"
                    aria-label="x"
                    target="_blank"
                    rel="noreferrer"
                    href="https://x.com/amharshit45">
                        <IconBrandX width={30} height={30}/>
                    </a>
                    <a className="hover:scale-125 transition-all duration-200 ease-in-out"
                    aria-label="leetcode"
                    target="_blank"
                    rel="noreferrer"
                    href="https://leetcode.com/u/amharshit45/">
                        <IconBrandLeetcode width={30} height={30}/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}