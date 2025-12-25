import { projectLists } from "@/shared/data/project-lists";



const CardList = () => {
    return (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectLists.map((project) => (
                <article
                    key={project.id}
                    className="group rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-neutral-700"
                >
                    {/* Image / Preview */}
                    <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-neutral-800">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold text-white">
                        {project.title}
                    </h3>

                    <p className="mb-4 text-sm text-neutral-400 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href={project.link}
                            target="_blank"
                            className="text-sm font-medium text-blue-400 hover:text-blue-300"
                        >
                            Live Demo →
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            className="text-sm text-neutral-400 hover:text-neutral-200"
                        >
                            GitHub
                        </a>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default CardList;
