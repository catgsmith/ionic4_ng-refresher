import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ["./person-input.component.css"]
})
export class PersonInputComponent implements OnInit {
  enteredPersonName = '';

  constructor(private prsService: PersonsService) { }

  ngOnInit(): void {
  }

  onCreatePerson(): void {
    console.log('Created a person called ' + this.enteredPersonName);
    this.prsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
