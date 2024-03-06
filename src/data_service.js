import { projectsInfo } from "./data";

export function getProjects() {
  const projectsList = projectsInfo;
  return projectsList;
}

export function filterProject(projectType) {
  let filteredProject = getProjects().filter(
    (type) => type.category === projectType
  );
  return filteredProject;
}
