import ReactMarkdown from 'react-markdown';

const ProjectCard = ({ project, featured = false }) => {
  const parseBodyText = (text) => <ReactMarkdown>{text}</ReactMarkdown>;

  return (
    <article
      className={`tile tile--interactive project-card ${
        featured ? 'span-4 project-card--featured' : 'span-2'
      }`}
    >
      {project?.image && (
        <div className="project-card__media">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__text">{parseBodyText(project.bodyText)}</div>
      </div>

      <div className="project-card__footer">
        {project?.links?.length > 0 && (
          <div className="project-card__links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className="proj-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
                {' '}
                ↗
              </a>
            ))}
          </div>
        )}
        {project?.tags?.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
