import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Person, PEOPLE } from './../person';

@Component({
    moduleId: module.id,
    selector: 'my-person',
    templateUrl: './person.component.html',
    //styleUrls: ['./person.component.css'],
})
export class PersonComponent { 
    selectedPerson: Person;


    constructor(private location: Location, private route: ActivatedRoute){
        //console.log(window.location.pathname.endsWith("101"));
        this.route.paramMap.subscribe((params: Params) => {
            this.selectedPerson = PEOPLE.find((value: Person) => {
                return window.location.pathname.endsWith(value.id.toString());
            });
        });
    }

    onSelect(person: Person) {
        this.selectedPerson = person;
    }
    goBack() {
        this.location.back;
    }

}
