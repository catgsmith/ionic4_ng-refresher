import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit{
  personList: string[];
  //private prsnService: PersonsService; 

  constructor(private prsService: PersonsService) {
    //this.prsnService = prsnService; // adding private into constructor is shortcut for this assignment
  }

  ngOnInit(): void {
    // use lifecycle hook to get service info (better that doing in constructor)
    this.personList = this.prsService.persons;
  }
}
