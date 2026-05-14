import { Button } from "../../../shared"

const Hero = () => {
    return (
        <div className="flex flex-col items-start min-h-[50vh] justify-between">
            <div className="bg-linear-to-b from-secondary to-secondary/50 bg-clip-text ">
                <h1 className="my-8 text-transparent mx-auto">Full-stack Developer building scalable web applications.</h1>
            </div>

            <h5 className="text-text-onlight w-1/3">I develop modern systems that focuses on improving businesses and productivity with clear processes and user experiences.</h5>

            <div className="flex flex-col md:flex-row gap-2">
                <Button text="Contact Me" type="pill_outline" className="mt-4 px-6 rounded" />
                <Button text="Visit My Projects" type="pill" className="mt-4 px-6 rounded" />
            </div>
        </div>
    )
}

export default Hero