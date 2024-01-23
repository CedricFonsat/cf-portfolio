import { Asterisk } from 'lucide-react'

const About = () => {
  return (
    <section className="w-full h-96 bg-black mt-10 relative overflow-hidden flex flex-col items-center">
    <div className="w-full flex items-center py-10">
        <p className="text-white text-8xl font-bold">about</p>
        <p><Asterisk size={70} color="white" /></p>
        <p className="text-white text-8xl font-bold">about</p>
        <p><Asterisk size={70} color="white" /></p>
        <p className="text-white text-8xl font-bold">about</p>
        <p><Asterisk size={70} color="white" /></p>
        <p className="text-white text-8xl font-bold">about</p>
    </div>
    <div className="mt-10 md:w-1/2 px-4">
        <p className="text-white text-center">Curious and attentive I am since my youngest age passionate by computer science and programming languages.</p>
    </div>
</section>
  )
}

export default About