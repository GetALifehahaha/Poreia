import { } from 'react'
import { tech_stack, tools } from '../data/tech_stack'

const TechStack = () => {

    const renderTechStack = tech_stack.map((tech, index) =>
        <div className='px-8 py-2.5 rounded-md bg-secondary-foreground' key={index}>
            <h4 className='text-background'>
                {tech.name}
            </h4>
        </div>
    )

    const renderTools = tools.map((tool, index) =>
        <div className='px-8 py-2.5 rounded-md bg-secondary-foreground' key={index}>
            <h4 className='text-background'>
                {tool.name}
            </h4>
        </div>
    )

    return (
        <div className='mt-8 w-full flex flex-col items-center gap-4'>
            <div className='flex flex-row gap-2'>
                {renderTechStack}
            </div>

            <div className='flex flex-row gap-2'>
                {renderTools}
            </div>
        </div>
    )
}

export default TechStack