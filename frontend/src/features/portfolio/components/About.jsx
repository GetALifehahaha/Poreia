import {} from 'react'

const About = () => {
  return (
    <div className='mt-80 bg-secondary w-full py-20 min-h-180 rounded-2xl grid grid-cols-1 md:grid-cols-2'>

        {/* Description */}
        <div className="flex flex-col p-8 gap-4 text-background">
            <h1 className='text-muted'>Meet the Developer</h1>

            <h2>I am Ahlan-nour J. Sencio, a full stack developer focusing on creating business applications that solves problems with practical solutions that actually matters</h2>

            <h2 className='mt-auto'>If you have any bottlenecks or pain points that needs a solution, I look forward to planning something with you.</h2>
        </div>

        {/* Image */}
        <div className="aspect-square w-3/5 rounded-2xl bg-secondary-foreground self-center m-auto relative -translate-5">

            <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-muted translate-15">
            </div>
        </div>
    </div>  
  )
}

export default About