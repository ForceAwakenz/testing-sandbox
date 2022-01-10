import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private calcularorService: CalculatorService) { }

  ngOnInit(): void {
    this.calcularorService.add(1, 2);
  }

}
