import Image from "next/image";
import Link from "next/link";
import logo from '../public/images/logo.png'

const Header = () => {

    return (

        <div className="bg-white">

            <div className="navbar lg:w-[1350px] h-[90px] mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                            <li>
                                <Link
                                    href='/'
                                    aria-label='Home'
                                    title='Home'
                                    className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white '
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/about'
                                    aria-label='About'
                                    title='About'
                                    className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href='/event'
                                    aria-label='Event'
                                    title='Event'
                                    className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                                >
                                    Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/blog'
                                    aria-label='Blog'
                                    title='Blog'
                                    className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    aria-label='Contact Us'
                                    title='Contact Us'
                                    className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        href='/'
                        aria-label='ALONE NCO'
                        title='ALONE NCO'
                        className='inline-flex items-center'
                    >

                        <Image width={566} height={190} className="w-full mx-auto "
                            src={logo}
                            alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">


                        <li>
                            <Link
                                href='/'
                                aria-label='Home'
                                title='Home'
                                className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                aria-label='About'
                                title='About'
                                className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/event'
                                aria-label='Event'
                                title='Event'
                                className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white'
                            >
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/blog'
                                aria-label='Blog'
                                title='Blog'
                                className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white '
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/contact'
                                aria-label='Contact Us'
                                title='Contact Us'
                                className='font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-wide text-black hover:underline hover:animate-pulse hover:bg-white  '
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">


                    <Link
                        href='/donate'
                        aria-label='Donate Now'
                        title='Donate Now'
                        className="btn transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 border-0 text-black hover:text-white hover:bg-[#001C42] bg-[#FFCC00]"

                    >
                        Donate Now
                    </Link>



                </div>
            </div>
        </div>

    );
};

export default Header;