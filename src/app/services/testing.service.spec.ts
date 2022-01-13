import { TestBed } from '@angular/core/testing';
import { FirstDependencyService } from './first-dependency.service';
import { TestingService } from './testing.service';


describe('TestingService', () => {
  let service: TestingService;
  let firstDependencyService: FirstDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // TestingService,
      ]
    });
    service = TestBed.inject(TestingService);
    firstDependencyService = TestBed.inject(FirstDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call dependencies', () => {
    expect(service.getValue(0)).toBe('one');
    expect(firstDependencyService.returnValue(0)).toBe('one');
  });
});
