import { ArrowUpRight, Asterisk } from "lucide-react";
import { projects } from "../data/project";

const Project = () => {
  const handleToWebsite = (website: string) => {
    window.open(website, "_blank");
  };

  return (
    <section
      id="project"
      className="w-full mt-10 relative overflow-hidden bg-[#F8F7F3]"
    >
      <article className="w-full flex items-center py-10">
        <p className="text-8xl font-bold">projects</p>
        <p>
          <Asterisk size={70} color="black" />
        </p>
        <p className="text-8xl font-bold">projects</p>
        <p>
          <Asterisk size={70} color="black" />
        </p>
        <p className="text-8xl font-bold">projects</p>
      </article>
      <article className="mt-10">
        {projects.map(
          (project, index) =>
            project.publish && (
              <div
                key={index}
                onClick={() => handleToWebsite(project.link)}
                className="md:flex w-full justify-between py-4 md:py-0 px-4 md:h-40 bg-[#F8F7F3] hover:bg-[#354bdf] hover:text-white items-center cursor-pointer"
              >
                <p>0{index + 1}</p>
                <div className="md:flex w-2/3 justify-between">
                  <p className="font-bold italic md:text-2xl">
                    {project.title}
                  </p>
                  <p className="italic">
                    {project.typeProject} - {project.date}
                  </p>
                </div>
                <a
                  className="flex md:border-2 md:py-2 md:px-4 md:rounded-3xl md:border-black"
                  href={project.link}
                >
                  Github <ArrowUpRight color="black" />
                </a>
              </div>
            )
        )}
      </article>
    </section>
  );
};

export default Project;
