import { useState } from 'react';
import '../../../styles/header.css';


const Header = () => {
    const [open, setOpen] = useState(false);


    // Toggle Hamburger Menu
    const Liner = `block w-7 h-1 bg-white rounded transition-all duration-300 ease-in-out`;
    // Hamburger icon bar classes
    const topBar = `${Liner} ${open ? 'rotate-45 translate-y-2' : ''}`;
    const middleBar = `${Liner} m-1 ${open ? 'opacity-0' : ''}`;
    const bottomBar = `${Liner} ${open ? '-rotate-45 -translate-y-2' : ''}`;


    // Toggle Navigation Menu Display
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <header className='header'>
            
            {/* Hamburger Icon for Mobile */}
            <div className='hamburger-bar lg:hidden flex justify-end p-4'>
                <button
                    className='flex flex-col justify-center items-center w-8 h-8'
                    onClick={toggleMenu}
                    aria-label='Toggle navigation menu'
                >
                    <span className={topBar}></span>
                    <span className={middleBar}></span>
                    <span className={bottomBar}></span>
                </button>
            </div>

            {/* Navigation Bar - Desktop */}
            <nav className='hidden lg:block'>
                <ul className='flex justify-between max-w-4xl mx-auto gap-x-4 py-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>

            {/* Navigation Bar - Mobile (Hamburger) */}
            {open && (
                <nav className='block lg:hidden animate-fade-in'>
                    <ul className='flex flex-col items-center gap-y-4 py-4 bg-[#222] rounded shadow-lg mx-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header