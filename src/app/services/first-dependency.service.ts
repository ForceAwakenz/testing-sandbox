import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {
  defaultValue!: string;

  get defaultString() {
    return this.defaultValue;
  }

  constructor() { }

  returnValue(index: number): string {
    const values = ['one', 'two', 'three'];
    return values[index];
  }

  initValue(): void {
    this.defaultValue = 'one';
  }


}
