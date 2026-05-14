import featured_image_main from '../../../assets/images/featured_image_main.png'

const featured_project = {
    title: "CakeTrack",
    main_description: "CakeTrack is a web-based POS, Inventory, and Transaction application that focuses on solving inventory, sales, and revenue tracking",
}

const FeaturedProjects = () => {
    return (
        <div className="w-full min-h-40 bg-main-2 rounded-xl flex flex-col md:flex-row gap-2 p-4">
            <div className='flex-1 flex flex-col justify-between'>
                <h1>{featured_project.title}</h1>
                <h4 className='w-1/2'>{featured_project.main_description}</h4>
            </div>
            <div className='flex-1 h-full bg-cover relative'>
                <img src={featured_image_main} className='w-full rounded ml-auto' />
            </div>
        </div>
    )
}

export default FeaturedProjects