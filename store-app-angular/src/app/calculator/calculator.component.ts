import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}
  result = 0;
  oldResult = this.result;
  starting = false;
  idCounter: any | undefined = undefined;

  increment() {
    this.result += 1;
  }

  decrease() {
    if (this.result > 0) {
      this.result -= 1;
    }
  }

  start() {
    if (this.result <= 0) return;
    this.starting = true;
    this.idCounter = setInterval(() => {
      if (!this.idCounter) return;
      if (this.result > 0) {
        this.result -= 1;
      } else {
        clearInterval(this.idCounter);
        this.starting = false;
      }
    }, 1000);
  }

  stop() {
    if (!this.idCounter) return;
    if (!this.starting) return;
    clearInterval(this.idCounter);
    this.starting = false;
  }

  ngAfterContentInit(): void {
    console.log('this is ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('this is ngAfterContentChecked');
  }

  getValue(event: Event): number {
    return parseInt((event.target as HTMLInputElement).value);
  }

  ngDoCheck(): void {
    if (_.isEqual(this.result, this.oldResult)) return;
    this.oldResult = this.result;
    console.log('this is ngDoCheck of calculator');
  }

  ngOnInit(): void {
    if (_.isEqual(this.result, this.oldResult)) return;
    this.oldResult = this.result;
    console.log('this is ngOnInit of calculator');
  }
}
