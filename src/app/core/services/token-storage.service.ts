import { Injectable } from '@angular/core';

const KEY = 'access-token';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  set(value: string) {
    localStorage.setItem(KEY, value);
  }

  get() {
    return localStorage.getItem(KEY);
  }

  remove() {
    localStorage.removeItem(KEY);
  }

  exists() {
    return KEY in localStorage;
  }
}
