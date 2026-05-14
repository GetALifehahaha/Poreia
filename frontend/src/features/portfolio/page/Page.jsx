import { } from 'react'
import { Hero, FeaturedProjects } from '../'

const Page = () => {
    return (
        <div className='w-full min-h-full bg-main rounded-2xl p-2 flex flex-col px-16'>
            <Hero />

            <h2 className="text-secondary mt-32 mb-8">Featured Project</h2>
            <FeaturedProjects />
        </div>
    )
}

export default Page