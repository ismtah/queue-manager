import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthContainerComponent } from './auth-container.component';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupComponent } from '../components/signup/signup.component';

fdescribe('AuthContainerComponent', () => {
  let component: AuthContainerComponent;
  let fixture: ComponentFixture<AuthContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthContainerComponent, LoginComponent, SignupComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show no data div when inputData empty', () => {
    component.inputData = [];
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.noData')).toBeDefined()
  })
  it('should show no data when inputData is undefined', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.noData')).toBeDefined()
  })
  it('should list inputData elements', () => {
    component.inputData = ['hello', 'from', 'other', 'side'];
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('.dataList').children)
    expect(compiled.querySelector('.dataList').children.length).toEqual(4)
  })
  it('should be red', () => {
    component.inputData = ["azer"];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dataList').children[0].classList).toContain('even')
  })
  it('should be red', () => {
    component.inputData = ["aze"];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dataList').children[0].classList).toContain('odd')
  })

});
