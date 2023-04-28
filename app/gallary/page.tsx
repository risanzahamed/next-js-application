import Image from "next/image";
import image01 from '../../public/images/post-1-copyright.jpg'
import image02 from '../../public/images/post-10-copyright.jpg'
import image03 from '../../public/images/post-4-copyright.jpg'
import image04 from '../../public/images/post-8-copyright.jpg'
import image05 from '../../public/images/post-9-copyright.jpg'
import image06 from '../../public/images/post-139-copyright.jpg'

const Gallary = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1600px] bg-white mx-auto px-5 py-2 lg:px-32 pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex lg:w-1/2 flex-wrap">
                        <div className="lg:w-1/2 relative p-1 md:p-2">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image01}
                                alt="" />
                            <div className="absolute rounded-md m-2 inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Charity
                                </p>

                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    Vincent Van Gogh’s most popular painting, The Starry Night.
                                </p>

                            </div>
                        </div>

                        <div className="lg:w-1/2 relative p-1 md:p-2">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image02}
                                alt="" />
                            <div className="absolute rounded-md m-2 inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Charity
                                </p>

                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    Vincent Van Gogh’s most popular painting, The Starry Night.
                                </p>

                            </div>
                        </div>


                        <div className="w-full relative p-1 md:p-2">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image03}
                                alt="" />
                            <div className="absolute  rounded-md m-2 inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Charity
                                </p>

                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    Vincent Van Gogh’s most popular painting, The Starry Night.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="flex lg:w-1/2 flex-wrap">
                        <div className="w-full relative p-1 md:p-2">

                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image04}
                                alt="" />
                            <div className="absolute m-2 rounded-md inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Charity
                                </p>

                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    Vincent Van Gogh’s most popular painting, The Starry Night.
                                </p>

                            </div>


                        </div>
                        <div className="lg:w-1/2 p-2 relative overflow-hidden md:p-2">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image05}
                                alt="" />
                            <div className="absolute m-2 rounded-md inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Charity
                                </p>

                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    Vincent Van Gogh’s most popular painting, The Starry Night.
                                </p>

                            </div>
                        </div>
                        <div className="lg:w-1/2  p-2 relative overflow-hidden ">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image06}
                                alt="" />
                            <div className="absolute m-2 rounded-md inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-gray-100">
                                    Charity
                                </p>

                                <p className="mb-4 text-xs tracking-wide text-gray-400">
                                    Vincent Van Gogh’s most popular painting, The Starry Night.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;