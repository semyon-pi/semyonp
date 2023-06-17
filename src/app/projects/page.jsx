import React from 'react'
import Project from './Project'
import projects from './Data'

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} project={project} reverse={index % 2 !== 0} />
      ))}
    </div>
  )
}

export default Projects
