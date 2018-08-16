import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cards = [
    {img: "https://happyonline.gr/media/k2/items/cache/f7a0a54c92471ac4480e727e4ccf93df_L.jpg" },
    {img: "https://happyonline.gr/media/k2/items/cache/f7a0a54c92471ac4480e727e4ccf93df_L.jpg" },
    {img: "https://happyonline.gr/media/k2/items/cache/f7a0a54c92471ac4480e727e4ccf93df_L.jpg" },
    {img: "https://happyonline.gr/media/k2/items/cache/f7a0a54c92471ac4480e727e4ccf93df_L.jpg" },
    {img: "https://happyonline.gr/media/k2/items/cache/f7a0a54c92471ac4480e727e4ccf93df_L.jpg" },
    {img: "https://happyonline.gr/media/k2/items/cache/f7a0a54c92471ac4480e727e4ccf93df_L.jpg" },

  ];
  constructor() {
    document.body.style.backgroundImage = 'url(../../../assets/img/mainback.jpg)';
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = '100vh';
  }

  ngOnInit() {
  }

}
