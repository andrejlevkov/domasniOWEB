import { Component, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Car } from '../module/klasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{

  constructor() {}

  @Input()
  brend: String="";

  @Input()
  kola: Car = {} as Car;

  @Input()
  redenbr: Number = {} as Number;

  @Output()
  vozilo: Car = {} as Car;

  @Output()
  foo = new EventEmitter<any>();

  ngOnInit(): void {
    
  }
  klasi(){
    return {'poz':this.kola.category=="coupe", 
    'course-card': true}
  }
  klik(){
    var link = this.kola.iconUrl;
    window.open(link, "_blank");
    console.log("Button clicked");
    this.foo.emit(this.kola);
  }
  styles(){
    if(this.kola.category == "convertible"){
      return {'text-decoration': 'underline', 'font-style': 'italic','color': 'white' ,'background-color': '#25294b'}
    }
    return;
  }
}
