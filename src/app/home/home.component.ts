import {
  style,
  state,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { preserveWhitespacesDefault } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'open-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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

    // trigger('shrinkLogo', [
    //   state(
    //     'expandedLogo',
    //     style({
    //       // transform: 'scale(1)',
    //     })
    //   ),
    //   state(
    //     'shrunkenLogo',
    //     style({
    //       // width: '80px',
    //       transform: 'scale(.6)',
    //     })
    //   ),
    //   transition('shrunkenLogo <=> expandedLogo', [
    //     animate('200ms 0s ease-out'),
    //   ]),
    // ]),
  ],
})
export class HomeComponent {
  eligibilityForm: FormGroup;
  scrollSubscription: Subscription;
  reachedTop = true;
  headerState = 'expanded';
  logoState = 'expandedLogo';
  triggered = false;
  navLinks = ['Products', 'Solutions', 'Pricing'];
  tenureOptions = [
    '1 Month',
    '2 Months',
    '3 Months',
    '4 Months',
    '5 Months',
    '6 Months',
    '7 Months',
    '8 Months',
    '9 Months',
    '10 Months',
    '11 Months',
    '12 Months',
  ];
  tagLineTopLeft = 'We make it Super Simple';

  cardData1 = [
    {
      title: 'Quick cash disbursement',
      desc: 'Get terms loans that your business needs within 72 hrs',
      image: 'Get Paid Instantly@2x.png',
    },
    {
      title: 'Low-interest rate',
      desc:
        'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      image: 'Low interest rate@2x.png',
    },
    {
      title: 'Zero Paperwork',
      desc:
        'Get started instantly by submitting only your basic details & bank statements',
      image: 'Secure Payments@2x.png',
    },
  ];

  cardData2 = [
    {
      title: 'Ace your business finances',
      desc:
        'Manage banking, accounting & everything in between, on one platform',
      image: 'freelancer_feature_icon_6@1.5x@2x.png',
    },
    {
      title: 'Loans to fight COVID-19',
      desc:
        'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      image: 'Covid@2x.png',
    },
  ];

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

  ngOnInit(): void {
    // prettier-ignore
    this.eligibilityForm = new FormGroup({
      'emi': new FormControl(null),
      'repaymentTenure': new FormControl('6 Months'),
      'monthlyIncome': new FormControl('100000'),
      'monthlyExpense': new FormControl('0')
    });
  }
}
