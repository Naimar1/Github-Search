import { Directive ,ElementRef,} from '@angular/core';

@Directive({
  selector: '[appDirectname]'
})
export class DirectnameDirective {

  constructor(private elem:ElementRef) { }
}
