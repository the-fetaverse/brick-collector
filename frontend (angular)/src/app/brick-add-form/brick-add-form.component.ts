import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpCalls } from '../services/httpCalls.service';
import { LegoSet } from '../models/legoSet';

@Component({
  selector: 'app-brick-add-form',
  templateUrl: './brick-add-form.component.html',
  styleUrls: ['./brick-add-form.component.css'],
})
export class BrickAddFormComponent implements OnInit {
  // fields:
  setDetails!: FormGroup;
  newSet: LegoSet = new LegoSet();

  // Constructor
  constructor(private formBuilder: FormBuilder, private service: HttpCalls) {}

  ngOnInit(): void {
    this.setDetails = this.formBuilder.group({
      name: [''],
      year: [''],
      theme: [''],
    });
  }

  addLegoSet() {
    this.newSet.name = this.setDetails.value.name;
    this.newSet.year = this.setDetails.value.year;
    this.newSet.theme = this.setDetails.value.theme;
    console.log(this.newSet);
    this.service.saveNewSet(this.newSet).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
