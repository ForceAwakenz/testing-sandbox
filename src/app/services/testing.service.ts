import { Injectable } from '@angular/core';
import { FirstDependencyService } from './first-dependency.service';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private firstDependencyService: FirstDependencyService) { }

  getValue(index: number): string {
    return this.firstDependencyService.returnValue(index);
  }
}
