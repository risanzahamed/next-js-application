import Image from 'next/image';
import heroImg from '../public/images/heroBgImage.png'

const HomePage = () => {
    return (
        <div>

            <section>
                <div className="relative pt-12  sm:pt-16 lg:py-36 xl:py-48">
                    <div className="absolute inset-0 hidden  lg:block">
                        <Image className="object-cover object-right w-full h-full " src={heroImg} alt="" />
                    </div>



                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                        <div className="mt-8  lg:hidden">
                            <Image width={566} height={190} className="w-full mx-auto "
                                src={heroImg}
                                alt="" />
                        </div>

                        <div className="max-w-lg lg:pt-20 lg:pb-20 mx-auto text-center lg:mx-0 lg:max-w-[1000px]  lg:text-left">
                            <h1 className="mt-3 text-balck text-4xl leading-relaxed font-bold lg:text-white sm:mt-8 sm:text-5xl xl:text-7xl">MAKE SOMEONE’S LIFE BY GIVING OF YOURS.</h1>
                            <p className="lg:text-white text-2xl text-black mt-6 font-normal">Please Contribute For Who Needs Your Help</p>

                            <div className="mt-8 sm:mt-12">
                                <a className="btn border-0 text-black hover:text-white hover:bg-[#1b38df] bg-[#FFCC00]">Donate Now</a>
                            </div>
                        </div>



                    </div>
                </div>
            </section>


        </div>
    );
};

export default HomePage;