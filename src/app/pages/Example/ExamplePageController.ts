
export class ExamplePageController {
    view: any;
    component = {
        id: 'example-page',
        view: 'ExamplePage.html',
        style: 'ExamplePage.scss',
        start: () => { this.start(); }
    }

    constructor() {
        this.loadView();
    }

    start() {
        const checkpoint = 300;
        let opacity = 0;
        window.addEventListener("scroll", () => {
            const box: any = this.findInsideMe(".box");
            console.log(window.pageYOffset+" "+ box.getBoundingClientRect().top);
            const currentScroll = window.pageYOffset;
            if (currentScroll <= checkpoint) {
                opacity = 1 - currentScroll / checkpoint;
            } else {
                opacity = 0;
            }
            
            box.style.opacity = opacity;
        });

        // const box: any = this.findInsideMe(".box");
        // const TDBox: any = this.findInsideMe(".TDBox");
        // const clouds: any = this.findInsideMe(".cloud", true);
        // window.onscroll = (_:any) => {
        //     console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
        //     const p = (window.scrollY / window.innerHeight) * 100;
        //     box.style.left = `${p}%`;
        //     box.style.opacity = `${p / 100}`;

        //     clouds[0].style.left = `${p * 2}%`;
        //     clouds[1].style.left = `${p * 1.3}%`;

        //     if (window.scrollY >= 340) {
        //         TDBox.style.opacity = 1;
        //         if (window.scrollY >= 350) {
        //             TDBox.style.transform = `rotateY(${window.scrollY}deg)`;
        //         }
        //     } else {
        //         TDBox.style.opacity = 0;
        //     }
        // }
    }

    findInsideMe(selector: string, all = false) {
        const query = `#app #${this.component.id} ${selector}`;
        if (!all) {
            return document.querySelector(query);
        } else {
            return document.querySelectorAll(query);

        }
    }

    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }

    getView(): [string, DocumentFragment] {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }

}
