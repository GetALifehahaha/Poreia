import { ArrowRight } from "lucide-react"
import { Button } from "../../../shared"

const Hero = () => {
    return (
        <div id='home' className="flex flex-col items-start min-h-[50vh] justify-between mt-20">
            {/* Top: Photo and Text */}
            <div className="min-h-80 w-full flex px-18">
                {/* Left Side: My Image, Short Description, CTA */}
                <div className="flex-1 flex flex-col">
                    {/* Image Placeholder... for now. */}
                    <div className="w-1/2 h-60 bg-linear-to-b from-secondary via-secondary to-primary rounded-xl -rotate-8 translate-x-2">
                    </div>

                    <h5 className="mt-10 w-1/2">
                        I'm <strong>Lannour</strong>, a full-stack developer. I help business elevate their presence and processes, focusing on purpose and practicality. 
                    </h5>

                    <div className="mt-4 flex items-center gap-2 px-4">
                        <Button text={null} type="pill" icon={ArrowRight} className="bg-primary aspect-square p-2" />
                        <h5 className="font-semibold">Let's Work Together!</h5>
                    </div>
                </div>

                {/* Right Side: Mission */}
                <div className="flex-1 flex flex-col justify-center items-start ">
                    <h1 className="leading-tight">
                        Developing practical solutions to problems, fixing pain points and pushes their progress forward. 
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero