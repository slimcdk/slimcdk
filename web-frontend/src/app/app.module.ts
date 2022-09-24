import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Scaffold components
import { FooterComponent } from './scaffolds/footer/footer.component';

// Pages
import { CurriculumVitaeComponent } from './pages/about/curriculum-vitae/curriculum-vitae.component';
import { ProjectsComponent } from './pages/projects/projects.component';

// Projects
import { SmartCurtainControllerComponent } from './pages/projects/smart-curtain-controller/smart-curtain-controller.component';


// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './scaffolds/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { FamilyTreeMakerComponent } from './pages/projects/family-tree-maker/family-tree-maker.component';
import { MyHomeAssistantComponent } from './pages/projects/my-home-assistant/my-home-assistant.component';
import { ProjectsIndexComponent } from './pages/projects/projects-index/projects-index.component';


@NgModule({
  declarations: [
    AppComponent,
    CurriculumVitaeComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarComponent,
    SmartCurtainControllerComponent,
    FamilyTreeMakerComponent,
    MyHomeAssistantComponent,
    ProjectsIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
