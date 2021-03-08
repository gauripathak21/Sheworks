import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  experienceData: Array<any> = [
    { name: ' Below 1 experience', value: '0' },
    { name: '1 year experience', value: '1' },
    { name: '2 year experience', value: '2' },
    { name: '3 year experience', value: '3' },
    { name: '5 year experience', value: '5' },
  ];
  constructor(private router :Router) { }

  ngOnInit() {
  }
  goToDetailsPage(){
    this.router.navigate(['/details']);
  }
}
