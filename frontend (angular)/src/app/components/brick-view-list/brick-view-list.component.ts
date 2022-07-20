import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpCalls } from '../../services/httpCalls.service';
import { LegoSet } from 'src/app/models/legoSet';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-brick-view-list',
  templateUrl: './brick-view-list.component.html',
  styleUrls: ['./brick-view-list.component.css'],
})
export class BrickViewListComponent implements OnInit {
  // Fields:
  legoSets: LegoSet[] = [];
  iconOK = faEdit;
  iconDelete = faTrash;

  // Constructor:
  constructor(private service: HttpCalls) {}

  // Methods:
  // OnInit(): fetches all bricks from the database with a GET request.
  ngOnInit(): void {
    this.service.findAllSets().subscribe((data) => {
      this.legoSets = data;
      console.log(this.legoSets);
    });
  }

  // OnEditClicked(brick.id): Recieves the brick id. Allows the selected brick to be edited
  // onEditClicked(id: number) {
  //   let selectedItem = this.bricks.find((item) => {
  //     return item.id === id;
  //   });
  //   console.log(selectedItem);
  // }
}
