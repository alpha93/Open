import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { CustomSelectorComponent } from './custom-selector/custom-selector.component';
import { CustomToggleSwitchComponent } from './custom-toggle-switch/custom-toggle-switch.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomSliderComponent,
    CustomSelectorComponent,
    CustomToggleSwitchComponent,
    CustomInputComponent,
    FeatureCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgScrollbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgScrollbarReachedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
