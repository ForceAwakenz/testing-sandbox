import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerSpy: LoggerService;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj(LoggerService, ['log']);
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useValue: loggerSpy },
      ]
    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add function should correctly add nummbers', () => {
    expect(service.add(1, 2)).toBe(3);
    expect(loggerSpy.log).toHaveBeenCalledOnceWith(3);
  });

  it('should log the correct result once', () => {
    service.add(1, 2);
    expect(loggerSpy.log).toHaveBeenCalledOnceWith(3);
  });
});
