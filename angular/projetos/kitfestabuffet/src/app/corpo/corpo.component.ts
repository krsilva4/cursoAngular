import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {


  private logomarca: string = "assets/logomarca.png"
  constructor() { }

  ngOnInit() {
  }

}
