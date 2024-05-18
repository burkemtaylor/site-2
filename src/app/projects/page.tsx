import ProjectCard from "~/_components/ProjectCard";
import { projectData } from "~/constants/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 items-center justify-center text-base-100">
      <div
        id="cardContainer"
        className="flex flex-1 flex-row flex-wrap gap-4 px-8"
      >
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
