import {Component} from '@angular/core'

export class Hero {
    id: number
    name: string
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)] = 'hero.name' placeholder = 'name'>
        </div>`
})

export class AppComponent {
    title = 'Tour of Heroes'
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }
}

//this is the root component of the app

//a component is the building block of an Angular app (controls the view through its associated template)

//the @Component decorator associated metadata with component
//  SELECTOR specifies css selector HTML element that represents component
//  TEMPLATE tells Angular how to render the view

//a component class controls the appearance and behavior of a view through its template

//double curly braces in template read properties from component and render them

//this is the "interpolation" form of one-way data binding