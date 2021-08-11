import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/ItemData';
import { MyServiceService } from 'src/app/services/my-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-unscanned',
  templateUrl: './unscanned.component.html',
  styleUrls: ['./unscanned.component.css']
})
export class UnscannedComponent implements OnInit {
  
  
    items:Item[] = [];
  updateSubscription: Subscription | undefined;

    constructor(private itemService:MyServiceService) { }

    ngOnInit(): void {
    //   this.updateSubscription = interval(1000).subscribe(
    //     (val) => { this.getData()});
    //     }

    
    // getData(){

      this.itemService.getData().subscribe((items)=> this.items = items);
    }
  }
  
