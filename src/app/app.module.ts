import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HomePageModule} from './home-page/home-page.module';
import { HeaderComponent } from './shared/components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConnectService} from './shared/services/connect.service';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule,
  MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {TitleCasePipe} from '@angular/common';
import { SymbolsPipe } from './shared/pipes/symbols.pipe';


@NgModule({
  declarations: [
    AppComponent,
  //  SymbolsPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomePageModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    NgbModule.forRoot()
  ],
  providers: [ConnectService, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
