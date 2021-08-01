import {Injectable, EventEmitter} from '@angular/core';

export interface LanguageInfo {
  localeId: string;
  title: string;
}

@Injectable()
export class LanguageStorage {
  static storageKey = 'currentLanguage';
  onLanguageUpdate: EventEmitter<LanguageInfo> = new EventEmitter<LanguageInfo>();

  storeLanguage(language: LanguageInfo) {
    try {
      window.localStorage[LanguageStorage.storageKey] = language.localeId;
    } catch { }
    this.onLanguageUpdate.emit(language);
  }

  getStoredLanguageName(): string | null {
    try {
      return window.localStorage[LanguageStorage.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(LanguageStorage.storageKey);
    } catch { }
  }
}
