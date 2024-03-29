import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FeaturesComponent } from './features/features.component';
import { ConnectingComponent } from './connecting/connecting.component';
import { ThemePicker, ThemePickerModule } from './share/theme-picker';
import { StyleManager } from './share/style-manager';
import { LanguagePickerModule } from './share/language-picker';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AnnouncementsComponent,
    FeaturesComponent,
    ConnectingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ThemePickerModule,
    LanguagePickerModule
  ],
  providers: [StyleManager, {provide: LOCALE_ID, useValue: 'zh' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
