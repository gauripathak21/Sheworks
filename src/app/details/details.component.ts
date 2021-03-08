import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  skillData: Array<any> = [
    { name: 'Adobe Photshop', value: '0' },
    { name: 'Php', value: '1' },
    { name: 'HTML', value: '2' },
    { name: 'Html5', value: '3' },
    { name: 'Javascript', value: '4' },
  ];
  
  indExperience: Array<any> = [
    { name: 'Agriculture', value: '0' },
    { name: 'Software', value: '1' },
    { name: 'Finance', value: '2' },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
