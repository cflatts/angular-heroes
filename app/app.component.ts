import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular!</h1>'
})

export class AppComponent {}

//this is the root component of the app

//a component is the building block of an Angular app (controls the view through its associated template)

//the @Component decorator associated metadata with component
//  SELECTOR specifies css selector HTML element that represents component
//  TEMPLATE tells Angular how to render the view

//a component class controls the appearance and behavior of a view through its template