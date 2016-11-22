import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {AppComponent} from './app.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }

//this is the root module and entry point of the app

//since this is a web app, BrowserModule is imported
//this is minimum amount of Angular that is need to run in browser
