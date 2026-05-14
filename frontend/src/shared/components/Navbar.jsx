import { } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, ArrowUpRight } from 'lucide-react'
import { Button, cn } from '../'
import { Link } from 'react-scroll'

const links = [
    "Home",
    "Projects",
    "About",
]

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='text-secondary p-1 rounded cursor-pointer border-2 border-transparent hover:border-secondary-2/20 transition-all'
        >
            {theme == 'dark' ? <Moon strokeWidth={2} /> : <Sun strokeWidth={2} />}
        </button>
    )
}

const listLinks = links.map((link) => {
    const urlId = link.toLowerCase().replace(/\s+/g, '-');

    return (
        <Link className={cn('text-secondary-foreground cursor-pointer text-sm tracking-wide px-4 py-1 rounded-full h-full flex items-center justify-center', link=='Home' && 'text-secondary bg-white -rotate-12')} key={link} to={`#${urlId}`} smooth={true} spy={true} activeClass='bg-primary'>
            {link}
        </Link>
    );
});

const Navbar = () => {
    return (
        <nav className='flex flex-row p-2 mx-auto w-[10vw] md:w-[90vw]'>
            <div className="flex-1 flex items-center gap-2">
                <h3 className='text-secondary text-xl font-semibold tracking-tight'>Poreia</h3>
                {/* <ThemeToggle /> */}
            </div>

            <div className="hidden md:flex flex-row items-center bg-muted/30 rounded-2xl px-1 mr-16">
                {listLinks}
            </div>

            <div className="w-fit flex flex-row justify-end gap-2">
                <Button text="Book a Meeting" className='rounded-full' icon={ArrowUpRight} iconPosition='right'/>
            </div>
        </nav>
    )
}

export default Navbar