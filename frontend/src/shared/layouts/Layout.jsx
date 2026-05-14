import { } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../'





const Layout = () => {
    return (
        <div className='bg-main-2 w-full min-h-screen'>
            <Navbar />

            <div className='p-2 w-full h-full overflow-y'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout