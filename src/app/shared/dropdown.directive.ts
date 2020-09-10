import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('click') mouseclick() {
        if (!this.elRef.nativeElement.classList.contains("open"))
            this.renderer.addClass(this.elRef.nativeElement, "open");
        else
            this.renderer.removeClass(this.elRef.nativeElement, "open");
    }
}