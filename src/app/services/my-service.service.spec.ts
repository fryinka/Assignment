import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  let service: MyServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[MyServiceService]
    });
    service = TestBed.get(MyServiceService);
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should fetch items as an Observable', async(inject([HttpTestingController,MyServiceService],(HttpClient:HttpTestingController,myService:MyServiceService) => {
    const items: any= [{
      "trackingID": "SE453574501",
      "desc": "Sz 45 Coffee Mix Floter Italian Leather Men Penny Loafers",
      "lastScanned": "10/06/2021 09:59:22",
      "lastLocation": "Box 16",
      "dept": "Men Loafers",
      "qty": 2
    }]
    myService.getData().subscribe((items:any)=>{
      expect(items.length).toBe(1)
    })
    let req = httpMock.expectOne('http://localhost:2500/Items');
      expect(req.request.method).toBe("GET");

      req.flush(items);
      httpMock.verify();
  })));
});
