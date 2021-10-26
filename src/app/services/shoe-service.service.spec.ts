import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShoeServiceService } from './shoe-service.service';
import { HttpClient } from '@angular/common/http';

describe('ShoeServiceService', () => {
  let service: ShoeServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ShoeServiceService]
    });
    service = TestBed.get(ShoeServiceService);
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should fetch shoes as an Observable', async(inject([HttpTestingController,ShoeServiceService],(HttpClient:HttpTestingController,shoeService:ShoeServiceService) => {
    const shoes = [{
        "id":1,
        "Title":"The first title in this series",
        "imageUrl":"string",
        "price":67999,
        "size": "medium"
    }]
    shoeService.getData().subscribe((shoes:any)=>{
      expect(shoes.length).toBe(1)
    })
    
  })));
});
