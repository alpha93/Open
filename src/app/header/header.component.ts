import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  style,
  state,
  trigger,
  transition,
  animate,
  query,
} from '@angular/animations';
import { HostListener } from '@angular/core';

@Component({
  selector: 'open-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('shrink', [
      state(
        'expaned',
        style({
          backgroundColor: 'transparent',
        })
      ),
      state(
        'shrunken',
        style({
          backgroundColor: 'white',
          height: '70px',
          boxShadow: '0px 0px 10px #00000033',
        })
      ),
      transition('expanded <=> shrunken', [animate('200ms 0s ease-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  navLinks = ['Products', 'Solutions', 'Pricing'];
  headerState = 'expanded';
  logoState = 'expanded';

  @ViewChild('logo', { static: true })
  logoRef: ElementRef;

  @HostListener('document:scroll', ['$event'])
  trgiggerAnimation(event: Event) {
    console.log(document.documentElement.scrollTop);
    if (
      document.documentElement.scrollTop > 0 &&
      this.headerState === 'expanded'
    ) {
      this.renderer.setStyle(
        this.logoRef.nativeElement,
        'transform',
        'scale(.6)'
      );

      this.headerState = 'shrunken';
    } else if (
      document.documentElement.scrollTop === 0 &&
      this.headerState === 'shrunken'
    ) {
      this.renderer.setStyle(
        this.logoRef.nativeElement,
        'transform',
        'scale(1)'
      );

      this.headerState = 'expanded';
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
}
