import { ArrowUpRight, Asterisk } from "lucide-react"

const Project = () => {

    const handleToWebsite = (website: string) => {
        window.location.href = website;
    }
  return (
    <section className="w-full mt-10 relative overflow-hidden">
    <article className="w-full flex items-center py-10">
        <p className="text-8xl font-bold">projects</p>
        <p><Asterisk size={70} color="black" /></p>
        <p className="text-8xl font-bold">projects</p>
        <p><Asterisk size={70} color="black" /></p>
        <p className="text-8xl font-bold">projects</p>
    </article>
    <article className="mt-10">
      <div onClick={() => handleToWebsite("crrr")} className="md:flex w-full justify-between py-4 md:py-0 px-4 md:h-40 bg-gray-100 hover:bg-gray-400 items-center cursor-pointer">
        <p>01</p>
        <p className="font-bold italic md:text-2xl">Embelir Product IA - Powered by IA</p>
        <p className="italic">Personal Project - 2023</p>
        <a className="flex md:border-2 md:py-2 md:px-4 md:rounded-3xl md:border-black" href="#">Github <ArrowUpRight color="black" /></a>
      </div>
      <div onClick={() => handleToWebsite("crrr")} className="md:flex w-full justify-between py-4 md:py-0 px-4 md:h-40 bg-gray-100 hover:bg-gray-400 items-center cursor-pointer">
        <p>02</p>
        <p className="font-bold italic md:text-2xl">Embelir Product IA - Powered by IA</p>
        <p className="italic">Personal Project - 2023</p>
        <a className="flex md:border-2 md:py-2 md:px-4 md:rounded-3xl md:border-black" href="#">Github <ArrowUpRight color="black" /></a>
      </div>
    </article>
</section>
  )
}

export default Project