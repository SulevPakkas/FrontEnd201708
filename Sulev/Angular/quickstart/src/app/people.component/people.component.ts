import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person, PEOPLE } from './../person';

@Component({
    selector: 'my-people',
    templateUrl: './people.component.html',
    //styleUrls: ['./people.component.css'],
})
export class PeopleComponent { 
    people = PEOPLE;
    selectedPerson: Person;

    constructor(private router: Router) {
        
    }

    onSelect(person: Person) {
        this.selectedPerson = person;
    }
    goToPerson() {
        this.router.navigate(['/person', this.selectedPerson.id]);
    }

}
