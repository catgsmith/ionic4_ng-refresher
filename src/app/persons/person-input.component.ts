import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ["./person-input.component.css"]
})
export class PersonInputComponent implements OnInit {
  @Output() personCreate = new EventEmitter<string>();

  enteredPersonName = '';
  constructor() { }

  ngOnInit(): void {
  }

  onCreatePerson(): void {
    console.log('Created a person called ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
