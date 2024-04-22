import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-block-text-pic',
  templateUrl: './block-text-pic.component.html',
  styleUrl: './block-text-pic.component.css'
})
export class BlockTextPicComponent {

  @Input() image: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() hasHeaderTitle: boolean = false;
  @Input() headingTitle: string = "";
  @Input() isPicRight: boolean = false;
  @Input() position: boolean = false;
  @Input() fromTop: number = 0;
  @Input() fromLeft: number = 0;
  @Input() objectPosition: string = ""
  @Input() hasBorder: boolean = false;

  @ViewChild('imageElement') imageElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  // ngAfterViewInit() {
  //   if (this.position) {
  //     this.renderer.setStyle(this.imageElement.nativeElement, 'object-position', this.objectPosition);
  //   }
  // }


}
