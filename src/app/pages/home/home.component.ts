import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/model/sponsor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sponsor_diamante = {
    photo: 'available_diamante',
    name: ''
  }

  sponsors_oro: Sponsor[] = [{
    photo: 'disabled_oro',
    name: ' '
  },
  {
    photo: 'disabled_oro',
    name: ''
  },
  {
    photo: 'available_oro',
    name: ''
  },
  {
    photo: 'available_oro',
    name: ''
  }]

  sponsors_plata: Sponsor[] = [{
    photo: 'disabled_plata',
    name: ''
  },
  {
    photo: 'available_plata',
    name: ''
  },
  {
    photo: 'available_plata',
    name: ''
  },
  {
    photo: 'available_plata',
    name: ''
  }]

  sponsors_bronce: Sponsor[] = [{
    photo: 'available_bronce',
    name: ''
  },
  {
    photo: 'available_bronce',
    name: ''
  },
  {
    photo: 'available_bronce',
    name: ''
  },
  {
    photo: 'available_bronce',
    name: ''
  },
  {
    photo: 'available_bronce',
    name: ''
  }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
