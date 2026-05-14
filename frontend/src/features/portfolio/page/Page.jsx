import { } from 'react'
import { Hero, FeaturedProjects, ProjectGrid } from '../'

const Page = () => {
    return (
        <div className='w-full min-h-full bg-main rounded-2xl p-2 flex flex-col'>
            <Hero />
            <FeaturedProjects />
            <ProjectGrid />
        </div>
    )
}

export default Page