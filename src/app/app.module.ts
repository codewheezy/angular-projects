// import { NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
bootstrapApplication(AppComponent).catch((err) => console.error(err))
export class AppModule { }
