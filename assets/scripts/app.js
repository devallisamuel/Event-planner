class Tooltip {}
class   ProjectItem {
constructor (id)  {
    this.id = id;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
}
connectMoreInfoButton   ()  {}
connectSwitchButton ()  {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement;
    switchButton.addEventListener('click', );
}
}
class   ProjectList {
    Projects = [];
    constructor (type)  {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.Project.push(new ProjectItem(prjItem.id));
        }
    }
    addProject  ()  {}
    switchProject   (projectId)  {
        const projectIndex = this.projects.filter(p => p.id !== projectId);
    }
}
class   App {
    static init ()  {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}
