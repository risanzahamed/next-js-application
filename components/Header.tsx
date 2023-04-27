import Image from "next/image";
import Link from "next/link";

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
                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/about'
                                        aria-label='About'
                                        title='About'
                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href='/event'
                                        aria-label='Event'
                                        title='Event'
                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                    >
                                        Event
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/blog'
                                        aria-label='Blog'
                                        title='Blog'
                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/contact'
                                        aria-label='Contact Us'
                                        title='Contact Us'
                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
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

                        <span className='ml-2 lg:text-2xl text-md font-bold tracking-wide text-gray-800 uppercase'>
                            ALONE NCO
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                     
                        <li>
                            <Link
                                href='/'
                                aria-label='Home'
                                title='Home'
                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                aria-label='About'
                                title='About'
                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/event'
                                aria-label='Event'
                                title='Event'
                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/blog'
                                aria-label='Blog'
                                title='Blog'
                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/contact'
                                aria-label='Contact Us'
                                title='Contact Us'
                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-0 text-black hover:text-white hover:bg-[#1b38df] bg-[#FFCC00]">Donate Now</a>
                </div>
            </div>
        </div>

    );
};

export default Header;