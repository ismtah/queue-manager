import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appThumbTemperature]'
})
export class ThumbTemperatureDirective implements OnChanges {
  @Input('appThumbTemperature') width: number;

  constructor(public el: ElementRef) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.el.nativeElement.style.background = this.makeBackground();
  }

  makeBackground(): any {
    let res = "linear-gradient(to right, rgb(224, 222, 224) 0%, rgb(224, 222, 224)" + this.width + "%, tomato " + this.width + "%, tomato  100%)";
    return res;
  }


}
