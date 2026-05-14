import {} from 'react'
import { project_data } from '..'

const ProjectGrid = () => {

    const renderProjectData = project_data.map((project, index) => 
        <div key={index} className='h-40 rounded-lg bg-foreground'>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
        </div>
    )

    return (
        <div className='mt-2 w-full min-h-20 rounded-xl grid grid-cols-2 xl:grid-cols-4 gap-2'>
            {renderProjectData}
        </div>
    )
}

export default ProjectGrid