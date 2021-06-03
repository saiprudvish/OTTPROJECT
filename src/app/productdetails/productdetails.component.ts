import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
 constructor(private router :Router){}
  
  @Input() productObj;
  onSelectImage(id){
    this.router.navigateByUrl('home/'+id)
  }
}
