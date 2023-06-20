import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  
  {path:'', redirectTo:'/main', pathMatch:'full' },
  {path:'main', component: MainComponent},
  {path:'aboutMe', component: AboutMeComponent},
  {path:'myProjects', component: ProjectsComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
