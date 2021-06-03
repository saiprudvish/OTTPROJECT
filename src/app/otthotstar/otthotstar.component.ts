import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otthotstar',
  templateUrl: './otthotstar.component.html',
  styleUrls: ['./otthotstar.component.css']
})
export class OtthotstarComponent implements OnInit {


    
  @Input() productObj;

  constructor(private router:Router) { }
  onSelectImage(id){
    this.router.navigateByUrl('hotstar/'+id)
  }

  ngOnInit(): void {
  }

}
