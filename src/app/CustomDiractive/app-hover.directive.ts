import { ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
@HostBinding('style.backgroundColor') backgroundColor:string='#28282B';
@HostBinding('style.border') border:string='none';
@HostBinding('style.color') color:string='#fff';

@HostListener('mouseenter') onMouseEnter(){
this.backgroundColor='white';
this.border='2px solid #28282B';
this.color='#28282B'
}
@HostListener('mouseout') onMouseOut(){
this.backgroundColor='#28282B';
this.border='none';
this.color='#fff'
}
}
