import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { UnscannedComponent } from './components/unscanned/unscanned.component';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ShoeServiceService } from './services/shoe-service.service';



const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'unscanned', component: UnscannedComponent}

  
]

@NgModule({
  declarations: [
    AppComponent,
    UnscannedComponent,
    LandingComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [ShoeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
