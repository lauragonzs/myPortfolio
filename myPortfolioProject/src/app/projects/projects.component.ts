import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  showDescription1 = false;
  showDescription2 = false;
  showDescription3 = false;
  showDescription4 = false;
  showDescription5 = false;
  showDescription6 = false;

  toggleDescription(item:number) {
    if (item == 1){
      this.showDescription1 = !this.showDescription1;
    }
    else if (item == 2){
      this.showDescription2 = !this.showDescription2;
    }
    else if (item == 3){
      this.showDescription3 = !this.showDescription3;
    }
    else if (item == 4){
      this.showDescription4 = !this.showDescription4;
    }
    else if (item == 5){
      this.showDescription5 = !this.showDescription5;
    }
    else if (item == 6){
      this.showDescription6 = !this.showDescription6;
    }
  }
}
