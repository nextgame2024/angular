import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  standalone: false,
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighLighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log("Directive created..");
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    console.log($event);
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.toggleHighlight);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.toggleHighlight);
  }

  toggle() {
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  // @HostBinding("attr.disabled")
  // get disabled() {
  //   return true;
  // }
}
