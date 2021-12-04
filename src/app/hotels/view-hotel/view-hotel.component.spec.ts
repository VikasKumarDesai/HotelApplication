import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HotelFilterPipe } from '../hotel-filter.pipe';

import { ViewHotelComponent } from './view-hotel.component';

describe('ViewHotelComponent', () => {
  let component: ViewHotelComponent;
  let fixture: ComponentFixture<ViewHotelComponent>;

      const fakeActivatedRoute = {
      snapshot: {
        paramMap: convertToParamMap({
          some: 'some',
          else: 'else',
        })
      }
    } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],     
      declarations: [ ViewHotelComponent, HotelFilterPipe ],
      providers:[HttpClientModule,{provide: ActivatedRoute, useClass: fakeActivatedRoute}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
