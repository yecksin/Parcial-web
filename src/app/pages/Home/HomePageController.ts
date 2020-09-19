const view = require('./HomePage.html');
import { count } from '../../counter';

export class HomePageController {
    view = view;
    viewId = "home-page";

    constructor() {
        this.startTimer();
    }

    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }

    startTimer() {
        window.setInterval(() => { count(document.querySelector(`#${this.viewId} p span`)) }, 1000);
    }
}
