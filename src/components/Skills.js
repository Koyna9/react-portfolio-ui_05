function Skills() {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
  ];

  return (
    <section className="card">
      <h2>🛠️ Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span>{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;