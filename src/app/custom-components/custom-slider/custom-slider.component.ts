import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'open-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomSliderComponent),
    },
  ],
})
export class CustomSliderComponent implements OnInit, ControlValueAccessor {
  selectedValue: string = '';
  isDisabled = false;

  @Input()
  heading: string = '';
  @Input()
  lowerRange: string = '0';
  @Input()
  upperRange: string = '100000';
  @Input()
  showRanges: boolean = true;

  private onChange: (selection: string) => void;
  private onTouched: () => void;

  constructor() {}

  ngOnInit(): void {
    this.selectedValue = this.lowerRange;
  }

  onSlide(event: Event, inputElement: HTMLInputElement) {
    this.selectedValue = inputElement.value;

    const selectionPercentage =
      (100 / (+this.upperRange - +this.lowerRange)) *
      (+this.selectedValue - +this.lowerRange);

    const sliderColor = `linear-gradient(to right, #663399 ${selectionPercentage}%, #dfc4f1 ${selectionPercentage}%)`;

    inputElement.style.backgroundImage = sliderColor;

    this.onChange(this.selectedValue);
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
    this.selectedValue = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}
