import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

constructor(private loggerService: LoggerService) {}

add(num1: number, num2: number): number {
  const result: number = num1 + num2;
  this.loggerService.log(result);
  return result;
}

}
