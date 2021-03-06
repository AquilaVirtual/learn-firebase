import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";
import { Route } from "@angular/router/src/config";
import { FilterPipe } from "./filter.pipe";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "directory", component: DirectoryComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, DirectoryComponent, FilterPipe],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
