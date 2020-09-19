import { ExamplePageController } from './pages/Example/ExamplePageController';
import { HomePageController } from './pages/Home/HomePageController';
class App {

  mainPages = [
    // HomePageController
    ExamplePageController
  ];

  loaded: any = []

  render() {
    const component = this.component();

    this.mainPages.forEach(pageController => {
      const controller = new pageController();
      this.loaded.push(controller);
      const [elId, element] = controller.getView();
      component.appendChild(this.createPage(elId, element));
    })

    document.body.append(component);
    document.body.onload = () => {
      this.loaded.forEach((controller: any) => {
        if ('start' in controller.component) {
          controller.component.start();
        }
      })
    }
  }

  createPage(id: string, element: DocumentFragment) {
    const page = document.createElement("div");
      page.id = id;
    page.appendChild(element);
    return page;
  }

  component() {
    const element = document.createElement('div');
    element.id = "app";
    return element;
  }
}

const app = new App();
app.render();



