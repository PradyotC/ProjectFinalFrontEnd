import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myInterval = 1500;
  activeSlideIndex = 0;
  activeSlideIndex1 = 0;
  activeSlideIndex2 = 0;
  slides = [
    {image: '../../../assets/images/carousel/3.jpg'},
    {image: '../../../assets/images/carousel/2.jpg'},
    {image: '../../../assets/images/carousel/1.jpg'}
  ];

  public pages:number[] = [0,1,2];
  public pageItem:number[] = [0,1,2];

  slides2 = [
    {image: '../../../assets/images/carousel/1.jpg'},
    {image: '../../../assets/images/carousel/2.jpg'},
    {image: '../../../assets/images/carousel/3.jpg'},
    {image: '../../../assets/images/carousel/4.jpg'},
    {image: '../../../assets/images/carousel/5.jpg'},
    {image: '../../../assets/images/carousel/6.jpg'},
    {image: '../../../assets/images/carousel/7.jpg'},
    {image: '../../../assets/images/carousel/8.jpg'},
    {image: '../../../assets/images/carousel/1.jpg'}
  ];

  public pageItem2:number[] = [0,1,2,3];

  slides3 = [
    {image: '../../../assets/images/carousel/1.jpg'},
    {image: '../../../assets/images/carousel/2.jpg'},
    {image: '../../../assets/images/carousel/3.jpg'},
    {image: '../../../assets/images/carousel/4.jpg'},
    {image: '../../../assets/images/carousel/5.jpg'},
    {image: '../../../assets/images/carousel/6.jpg'},
    {image: '../../../assets/images/carousel/7.jpg'},
    {image: '../../../assets/images/carousel/8.jpg'},
    {image: '../../../assets/images/carousel/1.jpg'},
    {image: '../../../assets/images/carousel/4.jpg'},
    {image: '../../../assets/images/carousel/5.jpg'},
    {image: '../../../assets/images/carousel/6.jpg'}
  ];
 
  constructor() { 
  }

  ngOnInit() {
  }

}
