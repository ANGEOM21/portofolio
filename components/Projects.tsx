import { projects } from "@/constant/project";
import { Project } from "@/types";

// --- Project Card ---
interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => (
  <div className="card w-full bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll" style={{ transitionDelay: `${delay}ms` }}>
    <figure><img src={project.imageUrl} alt={project.title} className="aspect-video object-cover" /></figure>
    <div className="card-body">
      <h2 className="card-title">{project.title}</h2>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {project.tags.map(tag => <span key={tag} className="badge badge-outline badge-secondary">{tag}</span>)}
      </div>
      <div className="card-actions justify-end">
        <a href={project.sourceUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Kode Sumber</a>
        <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo Langsung</a>
      </div>
    </div>
  </div>
);

// --- Projects ---
const Projects = () => (
  <section id="projects" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">Proyek Saya</h2>
      <div className="divider mb-12 animate-on-scroll"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 100} />)}
      </div>
    </div>
  </section>
);

export default Projects;