import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Components
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const matComponents = [
  BrowserModule,
  BrowserAnimationsModule,
  MatCheckboxModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
];

// Components
import { SideNavigationComponent } from './modules/side-navigation/side-navigation.component';
import { HomeComponent } from './modules/home/home.component';
import { LibsComponent } from './modules/libs/libs.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { LecturesComponent } from './modules/lectures/lectures.component';
import { OneComponent } from './modules/lectures/one/one.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { MaintainComponent } from './modules/lectures/maintain/maintain.component';
import { FooterComponent } from './modules/footer/footer.component';
import { DataService } from './services/data.service';
import { HelperComponent } from './modules/lectures/helper/helper.component';
import { ResultComponent } from './modules/lectures/result/result.component';

@NgModule({
  declarations: [
    AppComponent,

    SideNavigationComponent,
    HomeComponent,
    LibsComponent,
    PageNotFoundComponent,
    LecturesComponent,
    OneComponent,
    AboutMeComponent,
    MaintainComponent,
    FooterComponent,
    HelperComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    matComponents,
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
