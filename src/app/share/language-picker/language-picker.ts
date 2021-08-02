import {Component, Inject, LOCALE_ID, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageStorage, LanguageInfo} from './language-storage';
import {CommonModule, Location} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';



@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.html'
})
export class LanguagePicker {
  languages: LanguageInfo[] = [
    {
      "localeId": "zh-Hans",
      "title": "简体中文"
    },
    {
      "localeId": "en",
      "title": "English"
    },
    {
      "localeId": "zh-Hant",
      "title": "繁体中文"
    },
    {
      "localeId": "fr",
      "title": "fr"
    },
    {
      "localeId": "de",
      "title": "de"
    },
    {
      "localeId": "jp",
      "title": "jp"
    },
    {
      "localeId": "kr",
      "title": "kr"
    }
  ];
  
 
  constructor(private location: Location, @Inject(LOCALE_ID) protected localeId: string, private http: HttpClient, private languageStorage: LanguageStorage) {
  }

  currentLanguage: string = this.localeId;

  ngOnInit(){
    if(window.localStorage[LanguageStorage.storageKey]){
      this.currentLanguage =window.localStorage[LanguageStorage.storageKey];
    }
  }
  
  onLanguageChanged(language: LanguageInfo) {
    this.currentLanguage = language.localeId;
    this.languageStorage.storeLanguage(language);
    const path = location.pathname.split('/');
    path[1] = language.localeId;
    const url = location.origin + path.join('/');
    (window as any).location.href = url;
  }
}

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, CommonModule],
  exports: [LanguagePicker],
  declarations: [LanguagePicker],
  providers:[LanguageStorage]
})
export class LanguagePickerModule {}
