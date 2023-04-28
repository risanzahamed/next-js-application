import Image from 'next/image';
import heroImg from '../public/images/hero.jpg'
import Gallary from './gallary/page';
import GallaryFile from '@/components/GallaryFile';

const HomePage = () => {
    return (
        <div>
            <section>
                <div className="relative bg-white  sm:pt-16 lg:py-36 xl:py-48">
                    <div className="absolute inset-0 hidden  lg:block">
                        <Image className="object-cover object-right w-full h-full " src={heroImg} alt="" />
                    </div>
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-[1400px]">

                        <div className="pt-4  lg:hidden">
                            <Image width={566} height={190} className="w-full mx-auto "
                                src={heroImg}
                                alt="" />
                        </div>

                        <div className="max-w-lg lg:pt-20 lg:pb-20 mx-auto text-center lg:mx-0 lg:max-w-[1000px]  lg:text-left">
                            <h1 className="mt-3 text-balck text-4xl lg:leading-relaxed font-bold lg:text-white sm:mt-8 sm:text-5xl xl:text-7xl">

                                <span className="font-bold lg:text-[#F26A02]">Share your  love to </span> make someone’s life better

                            </h1>
                            <p className="lg:text-white lg:text-2xl text-black mt-6 font-normal">Welcome to our NGO, dedicated to uplifting lives. Through our compassionate initiatives, we empower communities, provide essential resources, and foster sustainable change. Join us on this impactful journey towards a brighter future.</p>

                            <div className="mt-8 sm:mt-12">
                                <a className="btn px-12 py-4  border-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-white hover:text-black hover:bg-[#dee0e3] bg-[#F26A02]">Donate Now</a>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <Gallary />

            
        </div>
    );
};

export default HomePage;