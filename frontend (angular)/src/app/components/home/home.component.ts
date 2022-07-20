import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards = [
    {
      title: 'View Collection',
      img: '../../assets/icons/view_icon.png',
      link: '/view',
    },
    {
      title: 'Edit Collection',
      img: '../../assets/icons/edit_icon.png',
      link: '/edit',
    },
    {
      title: 'Add Bricks',
      img: '../../assets/icons/add_icon.png',
      link: '/add',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
