import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/shoeData';
import { ShoeServiceService } from 'src/app/services/shoe-service.service';


@Component({
  selector: 'app-unscanned',
  templateUrl: './unscanned.component.html',
  styleUrls: ['./unscanned.component.css']
})
export class UnscannedComponent implements OnInit {
  
  
    shoes:Shoe[] = [];
 

    constructor(private itemService:ShoeServiceService) { }

    ngOnInit(): void {
    //   this.updateSubscription = interval(1000).subscribe(
    //     (val) => { this.getData()});
    //     }

    
    // getData(){

      this.itemService.getData().subscribe((shoes)=> this.shoes = shoes);
    }
  }
  
