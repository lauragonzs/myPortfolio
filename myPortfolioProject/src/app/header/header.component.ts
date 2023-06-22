import { Component, HostListener } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

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

    constructor(private translocoService: TranslocoService) {
      this.verificarAnchoPantalla();
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.verificarAnchoPantalla();
    }
  
    verificarAnchoPantalla() {
      this.aparece = window.innerWidth > 650;
    }

    changeLanguage(lang: string) {
      this.translocoService.setActiveLang(lang);
    }
}
