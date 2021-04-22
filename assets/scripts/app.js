class Tooltip {}
class   ProjectItem {
constructor (id, updateProjectListFunction)  {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
}
connectMoreInfoButton   ()  {}
connectSwitchButton ()  {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement;
    switchButton.addEventListener('click',this.updateProjectListHandler );
}
}
class   ProjectList {
    Projects = [];
    constructor (type, switchHandlerFunction)  {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.Project.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
        }
    }
    setSwitchHandlerFunction    (switchHandlerFunction)  {
        this.switchHandler = switchHandlerFunction;
    }
    addProject  ()  {
        console.log(this);
    }
    switchProject   (projectId)  {
        this.switchHandler(this.projects.find(p => p.id == projectId));
        const projectIndex = this.projects.filter(p => p.id !== projectId);
    }
}
class   App {
    static init ()  {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction
        (finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction
        (activeProjectList.addProject.bind(activeProjectList));
    }
}
