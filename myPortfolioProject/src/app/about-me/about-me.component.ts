import { Component } from '@angular/core';

interface Skill {
  image: string;
  title: string
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})


export class AboutMeComponent {
  skills: Skill[] = [
    this.skill("../../assets/python.jpg", "Python"),
    this.skill("../../assets/java.jpg", "Java"),
    this.skill("../../assets/html.jpg", "Html"),
    this.skill("../assets/css.jpg", "CSS"),
    this.skill("../../assets/js.jpg", "JavaScript"),
    this.skill("../../assets/typescript.jpg", "TypeScript"),
    this.skill("../../assets/angular.jpg", "Angular"),
    this.skill("../../assets/ionic.jpg", "Ionic"),
    this.skill("../../assets/git.jpg", "Git"),
    this.skill("../../assets/github.jpg", "GitHub"),
    this.skill("../../assets/bootstrap.jpg", "Bootstrap"),
    this.skill("../../assets/firebase.jpg", "Firebase"),
    this.skill("../../assets/figma.jpg", "Figma"),
    this.skill("../../assets/trello.jpg", "Trello"),
    this.skill("../../assets/bash.jpg", "Bash"),
    this.skill("../../assets/linux.jpg", "Linux"),
    this.skill("../../assets/linuxKVM.jpg", "Linux KVM"),
    this.skill("../../assets/virtualbox.jpg", "VirtualBox"),
    this.skill("../../assets/C++.jpg", "C++"),
    this.skill("../../assets/r.jpg", "R"),
    this.skill("../../assets/assembly.jpg", "Assembly"),
    this.skill("../../assets/mySQL.jpg", "mySQL"),
    this.skill("../../assets/sqlite.jpg", "Sqlite"),

  ]

  skill(image: string, title: string): Skill {
    const skill: Skill = { image: image, title: title };
    return skill;
  }
}
