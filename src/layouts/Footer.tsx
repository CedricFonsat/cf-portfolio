import { ArrowUpRight, Asterisk } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full mt-10 pt-4 relative overflow-hidden">
        <div className="md:flex justify-between px-5 md:px-12 md:h-14 items-center">
            <div className="">
              <Asterisk size={70} color="black" />
            </div>
            <ul className="flex w-1/3 justify-between">
                <li className="mr-2 md:mr-0"><a href="#">About</a></li>
                <li className="mr-2 md:mr-0"><a href="#">Projects</a></li>
                <li className="mr-2 md:mr-0"><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="w-full md:h-14 mt-3 md:flex py-2 md:py-0 justify-end">
            <div className="md:w-1/2 md:flex justify-around px-5">
                <a className="text-4xl flex mb-2 md:mb-0" href="">Linkedin <ArrowUpRight/></a>
                <a className="text-4xl flex mb-2 md:mb-0" href="">Github <ArrowUpRight /></a>
                <a className="text-4xl flex mb-2 md:mb-0" href="">Malt <ArrowUpRight /></a>
            </div>
        </div>

       <div className="h-40 overflow-hidden relative">
       <p className="absolute top-[70px] md:top-[-30px]  text-[100px] md:text-[200px] text-center font-bold">Portfolio</p>
       </div>
       <div className="h-12 w-full flex justify-center items-center">
         <p className="font-light text-sm">©Copyright by Cedric FONSAT</p>
       </div>
    </footer>
  )
}

export default Footer