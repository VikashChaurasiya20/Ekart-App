import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
// This one is custom directive 
@Directive({
    selector:'[setBackground]'
})
export class SetBackground{
//    @Input('setBackground') backColor:string='#36454F';
//    @Input() textColor:string='White';
  
   @Input('setBackground') changeTextAndBackColor:{backColor:string,textColor:string}
constructor(private element:ElementRef, private renderer:Renderer2){

}
ngOnInit(){
    // this.element.nativeElement.style.backgroundColor='#36454F'
    // this.element.nativeElement.style.color='#FFF'
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeTextAndBackColor.backColor);  // it will tack 3 arguments
    this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextAndBackColor.textColor);  // it will tack 3 arguments
    // this.renderer.setAttribute(this.element.nativeElement,'title','this is Example Title');  // it will tack 3 arguments
};
}

// Video 48 completed