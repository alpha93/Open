import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'open-custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomSelectorComponent),
    },
  ],
})
export class CustomSelectorComponent implements OnInit, ControlValueAccessor {
  selectedOption = '';
  isDisabled = false;

  @Input()
  heading: string = '';
  @Input()
  options: string[] = [];

  @ViewChild('optns', { static: true })
  optionsElementRef: ElementRef | undefined;
  @ViewChild('slctn', { static: true })
  selectionElementRef: ElementRef | undefined;
  @ViewChild('arrow', { static: true })
  arrowElementRef: ElementRef | undefined;

  @HostListener('document:click', ['$event'])
  collapseSelectMenu(event: Event) {
    if (
      this.selectionElementRef?.nativeElement.contains(event.target) &&
      !this.isDisabled
    ) {
      this.optionsElementRef?.nativeElement.classList.toggle('expand-options');
      this.arrowElementRef?.nativeElement.classList.toggle('rotate-arrow');
    } else {
      this.optionsElementRef?.nativeElement.classList.remove('expand-options');
      this.arrowElementRef?.nativeElement.classList.remove('rotate-arrow');
    }
  }

  private onChange: (selection: string) => void;
  private onTouched: () => void;

  constructor() {}

  ngOnInit(): void {
    this.selectedOption = this.options[Math.round(this.options.length / 2) - 1];
  }

  onSelect(inputElement: HTMLInputElement) {
    this.selectedOption = inputElement.value;
    this.onChange(this.selectedOption);
  }

  onBlur() {
    this.onTouched();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(obj: string) {
    this.selectedOption = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
    console.log(isDisabled);
  }
}
