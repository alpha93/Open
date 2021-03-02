import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'open-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent implements OnInit {
  @Input()
  width: string;
  @Input()
  height: string;
  @Input()
  image: string;
  @Input()
  title: string;
  @Input()
  description: string;
  @ViewChild('icon', { static: true })
  iconElementRef: ElementRef;

  imageUrl: string = '../../assets/';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.imageUrl = `url("${this.imageUrl}${this.image}")`;
    this.renderer.setStyle(
      this.iconElementRef.nativeElement,
      'backgroundImage',
      this.imageUrl
    );
  }
}
