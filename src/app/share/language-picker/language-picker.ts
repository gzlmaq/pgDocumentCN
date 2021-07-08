import {Component, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageStorage, LanguageInfo} from './ language-storage';
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
  constructor(private http: HttpClient) {}

  languages = [
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
  language = LanguageStorage.storageKey;  
  //Languages = this.http.get<LanguageInfo[]>(this.languages);
  
  onLanguageChanged(language: LanguageInfo) {
    LanguageStorage.storageKey = language.title;
  }
}

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, CommonModule],
  exports: [LanguagePicker],
  declarations: [LanguagePicker]
})
export class LanguagePickerModule {}
