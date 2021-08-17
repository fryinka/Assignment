import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/ItemData';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  items:Item[] = [];
 

  constructor(private itemService:MyServiceService) { }

  ngOnInit(): void {
    this.itemService.getData().subscribe((items)=> this.items = items);
  }

}
