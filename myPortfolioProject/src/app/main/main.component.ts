import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  skills = ["../../assets/python.jpg", "../../assets/java.jpg", "../../assets/html.jpg", "../assets/css.jpg", "../../assets/js.jpg",
  "../../assets/angular.jpg", "../../assets/github.jpg", "../../assets/linux.jpg", "../../assets/bash.jpg"]
}
