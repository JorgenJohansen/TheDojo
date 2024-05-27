export default function ProjectSummary({ project }) {
  return (
    <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
            Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details"></p>
    </div>
  )
}