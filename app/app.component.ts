import {Component} from '@angular/core'

export class Hero {
    id: number
    name: string
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class = 'heroes'>
            <li *ngFor = 'let hero of heroes'>
                <span class = 'badge'>{{hero.id}}.</span> {{hero.name}}
            </li>
        </ul>
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
    heroes = HEROES
}

//this is the root component of the app

//a component is the building block of an Angular app (controls the view through its associated template)

//the @Component decorator associated metadata with component
//  SELECTOR specifies css selector HTML element that represents component
//  TEMPLATE tells Angular how to render the view

//a component class controls the appearance and behavior of a view through its template

//double curly braces in template read properties from component and render them

//this is the "interpolation" form of one-way data binding

//the two way data binding happens because by using [(ngModel)] - anywhere hero.name is found it will change to what the input of the value is

//* indicates that HTML element and its children are constitute a master template

//ngFor iterates over heroes array returned by AppComponent.heroes

//text says take each element in the array and store it in the local variable, and make it available to the corresponding template

//