import { } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { cn } from '../'
import { Link } from 'react-router-dom'

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
        <Link className='text-secondary' key={link} to={`#${urlId}`}>
            {link}
        </Link>
    );
});

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between'>
            <div className="">
                <h3 className='text-secondary'>Poreia</h3>
            </div>

            <div className="flex flex-row gap-2">
                {listLinks}
            </div>

            <div className="">
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navbar