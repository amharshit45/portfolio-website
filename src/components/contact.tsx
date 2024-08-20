import { IconMail, IconMapSearch } from "@tabler/icons-react"

export const Contact = () => {
    return (
        <section id="contact" className="bg-white lg:px-44 px-32">
            <div className="max-w-[70rem] mx-auto px-[4rem]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-[1rem] text-blue-400 uppercase font-bold">Contact</p>
                    </div>
                    <div className="flex md:gap-x-32 mt-12 gap-y-8 flex-col md:flex-row flex-wrap text-center justify-center">
                        <div className="flex items-center md:gap-x-6 gap-y-0 flex-col md:flex-row">
                            <span className="bg-white w-20 flex items-center justify-center h-20 shadow-[0px 0px 10px rgb(0 0 0 / 10%)] rounded-[50%] text-[#147efb]">
                                <IconMapSearch width={30} height={30}></IconMapSearch>
                            </span>
                            <div className="flex flex-col gap-y-2  transition-all duration-300 text-[#767676] text-[1rem] cursor-pointer">
                                <h3 className="text-[#2d2e32] text-[1.2rem] font-bold">Location</h3>
                                <p className="hover:text-blue-400">Chandigarh, India</p>
                            </div>
                        </div>
                        <div className="flex items-center md:gap-x-6 gap-y-0 flex-col md:flex-row">
                            <span className="bg-white w-20 flex items-center justify-center h-20 shadow-[0px 0px 10px rgb(0 0 0 / 10%)] rounded-[50%] text-[#147efb]">
                                <IconMail width={30} height={30}></IconMail>
                            </span>
                            <div className="flex flex-col gap-y-2 transition-all duration-300 text-[#767676] text-[1rem] cursor-pointer"> 
                                <h3 className="text-[#2d2e32] text-[1.2rem] font-bold">Mail</h3>
                                <a className="hover:text-blue-400" href="mailto:amharshit45@gmail.com">
                                    amharshit45@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 