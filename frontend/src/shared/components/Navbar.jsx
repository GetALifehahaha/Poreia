import { } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { Button } from '../'
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
        <nav className='flex flex-row justify-between p-2'>
            <div className="flex-1">
                <h3 className='text-secondary'>Poreia</h3>
            </div>

            <div className="hidden md:flex flex-row gap-4 items-center">
                {listLinks}
            </div>

            <div className="flex-1 flex flex-row justify-end gap-2">
                <ThemeToggle />
                <Button text="Let's Work Together!" />
            </div>
        </nav>
    )
}

export default Navbar