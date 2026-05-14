import {} from 'react'
import { project_data } from '..'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../shared';
import { Info } from 'lucide-react';

const ProjectGrid = () => {
    const navigate = useNavigate();

    const renderProjectData = project_data.map((project, index) => 
        <div key={index} className='h-80 rounded-lg bg-foreground flex flex-col w-full p-2 shadow-muted shadow-md'>
            <h2 className='text-secondary'>{project.name}</h2>
            <h4 className='mt-auto text-center mb-2'>{project.description}</h4>
            
            <Button text={`More Details`} className="w-full rounded-md" onClick={() => navigate(`project/${project.link}`)} />
        </div>
    )

    return (
        <div className='mt-2 w-full min-h-80 flex flex-row justify-center'>
            <div className="w-1/3 flex justify-center items-center">
                <h1 className='text-secondary-foreground w-4/5'><strong className='text-primary'>Problems</strong> to be <strong className='text-secondary'>solved</strong>. <strong className='text-secondary'>Opportunities</strong> for <strong className='text-secondary'>growth</strong>.</h1>
            </div>
            <div className='flex-1 rounded-xl grid grid-cols-1 xl:grid-cols-2 gap-2'>
                {renderProjectData}
            </div>
        </div>
    )
}

export default ProjectGrid