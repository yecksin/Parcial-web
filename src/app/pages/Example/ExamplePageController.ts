
export class ExamplePageController {
    view: any;
    animado: any;
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
            console.log(window.pageYOffset + " " + box.getBoundingClientRect().top);
            const currentScroll = window.pageYOffset;
            if (currentScroll <= checkpoint) {
                opacity = 1 - currentScroll / checkpoint;
            } else {
                opacity = 0;
            }

            box.style.opacity = opacity;
        });



        const box: any = this.findInsideMe(".box");
        const TDBox: any = this.findInsideMe(".TDBox");
        const clouds: any = this.findInsideMe(".cloud", true);
        window.onscroll = (_: any) => {
            console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
            const p = (window.scrollY / window.innerHeight) * 100;
            box.style.left = `${p}%`;
            box.style.opacity = `${p / 100}`;

            clouds[0].style.left = `${p * 2}%`;
            clouds[1].style.left = `${p * 1.3}%`;

            if (window.scrollY >= 340) {
                TDBox.style.opacity = 1;
                if (window.scrollY >= 350) {
                    TDBox.style.transform = `rotateY(${window.scrollY}deg)`;
                }
            } else {
                TDBox.style.opacity = 0;
            }
        }



        //animacion fadeinscroll

        window.addEventListener("scroll", this.mostrarScroll);
        window.addEventListener("scroll", function () {
           
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-120px";
            }
            prevScrollpos = currentScrollPos;
        

    });

        //animacion ocultar nav en scroll

        var prevScrollpos = window.pageYOffset;
    


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

    mostrarScroll() {
        var h = window.innerHeight;
        console.log(h);
        this.animado = document.querySelectorAll(".fadeInScroll");
        console.log("animado tamaño");
        let scrollTop = document.documentElement.scrollTop; // scroll en Y (vertical) contando desde su parte inicial
        console.log(this.animado.length);
        for (var i = 0; i < this.animado.length; i++) { // animado.length es un array de todos los divs o compoenntes que tiene la clase .animado
            let alturaAnimado = this.animado[i].offsetTop; // ubicacion del div contnado desde su parte superior
            if (alturaAnimado - (h / 2) < scrollTop) {
                this.animado[i].style.opacity = 1;
                this.animado[i].classList.add("trasladarArriba");
            }
        }
    }




}
