function Projects() {
  const projects = [
    {
      title: 'Student Portfolio Management System',
      description: 'A full stack MERN application to manage student portfolios with CRUD operations.',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'React Portfolio UI',
      description: 'An interactive and responsive student portfolio UI built using React components.',
      tags: ['React', 'CSS', 'JSX']
    }
  ];

  return (
    <section className="card">
      <h2>🚀 Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            {project.tags.map((tag, i) => (
              <span className="project-tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
export default Projects;