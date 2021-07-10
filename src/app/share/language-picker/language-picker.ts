import {Component, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageStorage, LanguageInfo} from './language-storage';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';



@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.html'
})
export class LanguagePicker {
  constructor(private http: HttpClient, private languageStorage: LanguageStorage) {    
  }

  languages: LanguageInfo[] = [
    {
      "url": "https://material.angular.io/",
      "title": "zh_CN"
    },
    {
      "url": "https://v11.material.angular.io/",
      "title": "en"
    },
    {
      "url": "https://v10.material.angular.io/",
      "title": "zh_TW"
    },
    {
      "url": "https://v9.material.angular.io/",
      "title": "fr"
    },
    {
      "url": "https://v8.material.angular.io/",
      "title": "de"
    },
    {
      "url": "https://v7.material.angular.io/",
      "title": "jp"
    },
    {
      "url": "https://v6.material.angular.io/",
      "title": "kr"
    }
  ];
  currentLanguage = "zh_CN";
  
  onLanguageChanged(language: LanguageInfo) {    
    this.languageStorage.storeLanguage(language);    
    this.currentLanguage = language.title;
  }
}

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, CommonModule],
  exports: [LanguagePicker],
  declarations: [LanguagePicker],
  providers:[LanguageStorage]
})
export class LanguagePickerModule {}
