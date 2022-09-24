import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './pages/about/curriculum-vitae/curriculum-vitae.component';
import { FamilyTreeMakerComponent } from './pages/projects/family-tree-maker/family-tree-maker.component';
import { MyHomeAssistantComponent } from './pages/projects/my-home-assistant/my-home-assistant.component';
import { ProjectsIndexComponent } from './pages/projects/projects-index/projects-index.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SmartCurtainControllerComponent } from './pages/projects/smart-curtain-controller/smart-curtain-controller.component';

const routes: Routes = [
  { path: '', redirectTo: 'about/cv', pathMatch: 'full' },
  { path: 'about/cv', component: CurriculumVitaeComponent },
  { path: 'projects', component: ProjectsComponent, children: [
    { path: '', component: ProjectsIndexComponent},
    { path: 'smart-curtain-controller', component: SmartCurtainControllerComponent},
    { path: 'family-tree-maker', component: FamilyTreeMakerComponent },
    { path: 'my-home-assistant', component: MyHomeAssistantComponent }
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
