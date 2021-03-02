import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'open-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent),
    },
  ],
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input()
  heading: string = '';
  @ViewChild('inp', { static: true })
  inputElementRef: ElementRef;
  isDisabled = false;

  private onChange: (inputValue: string) => void;
  private onTouched: () => void;

  constructor() {}

  ngOnInit(): void {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(obj: string) {
    this.inputElementRef.nativeElement.value = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event) {
    this.onChange(this.inputElementRef.nativeElement.value);
  }

  onBlur(event: Event) {
    this.onTouched();
  }
}
