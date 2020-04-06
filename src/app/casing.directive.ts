import { Directive,HostListener,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[inputCasing]'
})
export class CasingDirective {

  @Input('inputCasing') format: string;
  constructor(private ele: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value:string =this.ele.nativeElement.value;
    if(this.format=='uppercase')
      this.ele.nativeElement.value=value.toUpperCase();
    else
    this.ele.nativeElement.value=value.toLowerCase();
  }


}
