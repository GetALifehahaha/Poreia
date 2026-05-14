import featured_image_main from '../../../assets/images/featured_image_main.png'
import { Button } from '../../../shared'
import { Info } from 'lucide-react'

const featured_project = {
    title: "CakeTrack",
    main_description: "CakeTrack is a web-based POS, Inventory, and Transaction website plus a mobile ordering system, all in one big package.",
}

const FeaturedProjects = () => {
    return (
        <div id='projects' className="w-full min-h-40 bg-main-2 rounded-xl flex flex-col gap-2 p-2 bg-secondary mt-32">
            <h1 className='text-[120px] text-foreground -translate-1 -translate-y-2 mb-2'>Projects</h1>
            <div className='flex-1 h-full bg-cover relative'>
                <img src={featured_image_main} className='w-full rounded ml-auto' />
                
                <div className='absolute top-0 left-0 w-full h-full flex flex-row'>
                    <h1 className='text-8xl text-secondary mt-auto translate-y-2'>{featured_project.title}</h1>
                    <Button text='Read more' className='h-fit mt-auto ml-auto -translate-2' icon={Info} iconPosition='right' />
                </div>
            </div>

            <div className='flex flex-col py-8'>
                
                <h2 className='text-background'>
                    {featured_project.main_description}
                </h2>
            </div>
        </div>
    )
}

export default FeaturedProjects