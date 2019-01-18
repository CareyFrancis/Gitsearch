import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { ColourDirective } from './colour.directive';
import { RepositoryComponent } from './repository/repository.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"repository",component:RepositoryComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ColourDirective,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
