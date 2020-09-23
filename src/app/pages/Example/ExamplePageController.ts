export class ExamplePageController {
  view: any;
  component = {
    id: "example-page",
    view: "ExamplePage.html",
    style: "ExamplePage.scss",
    start: () => {
      this.start();
    },
  };

  constructor() {
    this.loadView();
  }

  start() {

    this.seccionHabilidades();
    this.pantallaDeCarga();


    // video.muted = !video.muted;


    // window.addEventListener('load', (event) => {
    //     console.log('page is fully loaded');
    //   });
    //   window.addEventListener("DOMContentLoaded", function(event) {
    //     console.log("DOM fully loaded and parsed");
    //   });

    //   window.addEventListener("scroll", this.mostrarScroll);
    // const checkpoint = 300;

    // let opacity = 0;
    // window.addEventListener("scroll", () => {
    //     const box: any = this.findInsideMe(".box");
    //     console.log(window.pageYOffset + " " + box.getBoundingClientRect().top);
    //     const currentScroll = window.pageYOffset;
    //     if (currentScroll <= checkpoint) {
    //         opacity = 1 - currentScroll / checkpoint;
    //     } else {
    //         opacity = 0;
    //     }

    //     box.style.opacity = opacity;
    // });

    // const box: any = this.findInsideMe(".box");
    // const TDBox: any = this.findInsideMe(".TDBox");
    // const clouds: any = this.findInsideMe(".cloud", true);
    // window.onscroll = (_: any) => {
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
    // let element: HTMLElement =  document.querySelector(".audit")as HTMLElement;
    // element.click();
    // console.log(element.click());

    // document.querySelector(".audit").onclick = () => {

    // };

    // document.querySelector('#send_top').onclick = function() {
    //     alert('bla bla');
    // }
    this.menuAction();
    this.menuClose();

    //Muestra el contenido de las secciones
    window.addEventListener("scroll", this.mostrarScroll);
    window.addEventListener("scroll", function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.querySelector('.menu-list').classList.remove('menu-open');

      } else {
        document.getElementById("navbar").style.top = "-120px";
        document.querySelector('.menu-list').classList.remove('menu-open');
      }
      prevScrollpos = currentScrollPos;
    });

    //animacion ocultar nav en scroll

    var prevScrollpos = window.pageYOffset;
  }
  //retorna queryselector de lo que buscamos
  findInsideMe(selector: string, all = false) {
    const query = `#app #${this.component.id} ${selector}`;
    if (!all) {
      return document.querySelector(query);
    } else {
      return document.querySelectorAll(query);
    }
  }
  //carga las vista de lo componentes
  loadView() {
    require(`./${this.component.style}`);
    this.view = require(`./${this.component.view}`);
  }
  //
  getView(): [string, DocumentFragment] {
    return [
      this.component.id,
      document.createRange().createContextualFragment(this.view),
    ];
  }
  //animacion fadeinscroll
  fade: any;
  mostrarScroll() {
    var h = window.innerHeight; // h obtiene la altura de la pantalla
    this.fade = document.querySelectorAll(".fadeInScroll"); //todos lo que tiene la clase fadeinscroll
    let scrollTop = document.documentElement.scrollTop; // scroll en Y (vertical) contando desde su parte inicial
    for (var i = 0; i < this.fade.length; i++) { // recorremos todos lo que tiene la clase fadeinscroll
      // animado.length es un array de todos los divs o compoenntes que tiene la clase .animado
      let alturaAnimado = this.fade[i].offsetTop; // ubicacion del div contnado desde su parte superior
      if (alturaAnimado - h / 2 < scrollTop) { // si el div es menor a la pos del scroll lo hace aparecer con un fade in
        this.fade[i].style.opacity = 1;
        this.fade[i].classList.add("trasladarArriba"); //agrega la clase trasladar arriba para generar una animacion de movimiento
      }
    }
  }
  //prueba
  showPersonaje() {
    console.log("Show plloo");
  }
  //abrir el menu hamburguesa
  menuAction() {
    let menu = document.querySelector("#menu-btn");
    menu.addEventListener("click", function () {
      document.querySelector('.menu-list').classList.toggle('menu-open');
      //   personaje.style.left = 0;
    });
  }
  //cerrar menu hamburguesa
  menuClose() {
    let menu = document.querySelector(".menu-list");
    menu.addEventListener("click", function () {
      document.querySelector('.menu-list').classList.remove('menu-open');
      //   personaje.style.left = 0;
    });
  }
  //animacion de pantalla de carga 
  pantallaDeCarga() {
    const yecksin: any = this.findInsideMe("#yecksin");
    const jair: any = this.findInsideMe("#jair");
    const pollo: any = this.findInsideMe("#pollo");
    const tefa: any = this.findInsideMe("#tefa");
    yecksin.style.backgroundImage = "url('/assets/imagenes/yecksin.jpg')";
    jair.style.backgroundImage = "url('/assets/imagenes/jair.jpeg')";
    pollo.style.backgroundImage = "url('/assets/imagenes/pollo.jpeg')";
    tefa.style.backgroundImage = "url('/assets/imagenes/tefa.jpeg')";

    //evento cuando la pagina est;á cargada
    const pantallaDeCarga: any = this.findInsideMe(".pantallaDeCarga");
    const pantallaDeCarga2: any = this.findInsideMe(".pantallaDeCarga2");
    const pantallaDeCarga3: any = this.findInsideMe(".pantallaDeCarga3");
    const pantallaDeCarga4: any = this.findInsideMe(".pantallaDeCarga4");
    setTimeout(() => {
      console.log("Cargado");
      pantallaDeCarga3.style.left = "100vw";
      // pantallaDeCarga2.style.left = "100vw";
      setTimeout(() => {
        console.log("Cargado");
        // pantallaDeCarga.style.left = "0vw";
        pantallaDeCarga2.style.left = "100vw";
        setTimeout(() => {
          console.log("Cargado");
          pantallaDeCarga.style.left = "100vw";
          // pantallaDeCarga2.style.left = "100vw";
          setTimeout(() => {
            console.log("Cargado");
            // pantallaDeCarga4.style.left = "100vw";
            // pantallaDeCarga2.style.left = "100vw";

          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
    //
    let menu = document.querySelector(".iniciar");
    menu.addEventListener("click", function () {
      console.log("musica");
      // var audio = new Audio('https://firebasestorage.googleapis.com/v0/b/phaserserver-af18d.appspot.com/o/audio.mp3?alt=media&token=955f137b-7701-46b7-9763-4ae6118a0efd');
      // audio.play();
      pantallaDeCarga4.style.left = "100vw";

      var video: any;
      video = <HTMLProgressElement>document.getElementById("video");

      video.play();
      setTimeout(() => {
        pantallaDeCarga.style.display = "none";
        pantallaDeCarga2.style.display = "none";
        pantallaDeCarga3.style.display = "none";
        pantallaDeCarga4.style.display = "none";
      }, 1000);
    });

  }
  seccionHabilidades() {
    const personaje: any = this.findInsideMe(".personaje");

    let progreso = <HTMLProgressElement>document.querySelector("#progreso");
    let progresoPorcentaje = document.querySelector("#progreso-porcentaje");
    let progrespNombre = document.querySelector("#progresp-nombre");
    //adution
    let audit = document.querySelector(".audit");
    audit.addEventListener("mouseover", function () {
      progreso.value = 60;
      progresoPorcentaje.innerHTML = "60%";
      progrespNombre.innerHTML = "Adobe Audition";
      //   personaje.style.left = 0;
    });
    //adution
    let photo = document.querySelector(".photo");
    photo.addEventListener("mouseover", function () {
      progreso.value = 50;
      progresoPorcentaje.innerHTML = "50%";
      progrespNombre.innerHTML = "Adobe Photoshop";
      //   personaje.style.left = 0;
    });
    //adution
    let prem = document.querySelector(".prem");
    prem.addEventListener("mouseover", function () {
      progreso.value = 70;
      progresoPorcentaje.innerHTML = "70%";
      progrespNombre.innerHTML = "Adobe Premiere";
      //   personaje.style.left = 0;
    });
    //adution
    let illus = document.querySelector(".illus");
    illus.addEventListener("mouseover", function () {
      progreso.value = 40;
      progresoPorcentaje.innerHTML = "40%";
      progrespNombre.innerHTML = "Adobe Illustrator";
      //   personaje.style.left = 0;
    });
    //adution
    let img1 = document.querySelector(".Vscode");
    img1.addEventListener("mouseover", function () {
      progreso.value = 60;
      progresoPorcentaje.innerHTML = "60%";
      progrespNombre.innerHTML = "Visual Studio Code";
      //   personaje.style.left = 0;
    });
    //adution
    let img2 = document.querySelector(".chtml");
    img2.addEventListener("mouseover", function () {
      progreso.value = 80;
      progresoPorcentaje.innerHTML = "80%";
      progrespNombre.innerHTML = "Html";
      //   personaje.style.left = 0;
    });
    //adution
    let img4 = document.querySelector(".angular");
    img4.addEventListener("mouseover", function () {
      progreso.value = 70;
      progresoPorcentaje.innerHTML = "70%";
      progrespNombre.innerHTML = "Angular js";
      //   personaje.style.left = 0;
    });
    //adution
    let img3 = document.querySelector(".node");
    img3.addEventListener("mouseover", function () {
      progreso.value = 75;
      progresoPorcentaje.innerHTML = "75%";
      progrespNombre.innerHTML = "Node js";
      //   personaje.style.left = 0;
    });
  }
}
