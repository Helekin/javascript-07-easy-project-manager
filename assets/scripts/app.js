import { ProjectList } from "./app/ProjectList.js";

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    activeProjectList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );

    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );

    const timerId = setTimeout(this.startAnalytics, 3000);

    document
      .getElementById("stop-analytics-btn")
      .addEventListener("click", () => {
        clearTimeout(timerId);
      });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/utils/Analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
