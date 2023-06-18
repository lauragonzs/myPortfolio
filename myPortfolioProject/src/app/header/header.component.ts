import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    aparece = true;
  
    desplegar() {
      this.aparece = !this.aparece
    }

    constructor() {
      this.verificarAnchoPantalla();
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.verificarAnchoPantalla();
    }
  
    verificarAnchoPantalla() {
      this.aparece = window.innerWidth > 768;
    }
}
