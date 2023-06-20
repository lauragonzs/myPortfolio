import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  skills = ["../../assets/python.jpg", "../../assets/java.jpg", "../../assets/html.jpg", "../assets/css.jpg", "../../assets/js.jpg",
  "../../assets/angular.jpg", "../../assets/github.jpg", "../../assets/linux.jpg", "../../assets/bash.jpg"]

}
