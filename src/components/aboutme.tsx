export const AboutMe = () => {
    return (
        <section id="about" className="bg-white py-20 lg:py-40">
            <div className="max-w-[70rem] mx-auto px-[4rem]">
                <div className="pr-0 lg:w-auto mx-auto lg:mx-0 sm:pr-6">
                    <h3 className="uppercase text-blue-400 font-bold mb-4 text-[1.25rem]">About me</h3>
                    <h4 className="text-[1.6rem] font-['Poppins'] mb-8 font-nav leading-[1.4]">
                        Software Developer <br /> based in Chandigarh, India 📍
                    </h4>
                    <p className="font-[1.2rem] font-['Mulish'] font-medium leading-normal text-['#767676']">
                        Hey, my name is Harshit, and I'm a Fullstack Developer. My passion
                        is to create and develop a clean UI/UX for my users.
                        <br />
                        <br />
                        My main stack currently is React/Next.js in combination with
                        Tailwind CSS and TypeScript.
                    </p>
                </div>
            </div>
        </section>
    )
}