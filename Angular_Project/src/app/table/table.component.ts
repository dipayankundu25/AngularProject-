import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';

  interface Country {
    name: string;
    email: string;
    phone: number;
    address: string;
  }

  
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    email: 'gb@gmail.come',
    phone: 146989754,
    address: 'H/F',
  },
  {
    name: 'Canada',
    email: 'gb@gmail.come',
    phone: 36624199,
    address: 'H/F',
  },
  {
    name: 'United States',
    email: 'gb@gmail.come',
    phone: 324459463,
    address: 'H/F',
  },
  {
    name: 'China',
    email: 'gb@gmail.come',
    phone: 1409517397,
    address: 'H/F',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [NgFor, DecimalPipe],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  countries = COUNTRIES;
}
