import { Component, EventEmitter, OnInit } from '@angular/core';
import { LegoSet } from '../models/legoSet';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { HttpCalls } from '../services/httpCalls.service';
@Component({
  selector: 'app-brick-edit-list',
  templateUrl: './brick-edit-list.component.html',
  styleUrls: ['./brick-edit-list.component.css'],
})
export class BrickEditListComponent implements OnInit {
  selectedColorEvent = new EventEmitter<string>();
  legoSets: LegoSet[] = [];
  iconOK = faCheck;
  iconDelete = faTrash;

  constructor(private service: HttpCalls) {}

  ngOnInit(): void {
    this.service.findAllSets().subscribe((data) => {
      this.legoSets = data;
      console.log(this.legoSets);
    });
  }
}
