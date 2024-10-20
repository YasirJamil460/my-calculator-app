import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcServicesService {

  private inputString: string = ''

  addInput(value: string)
  {
    this.inputString += value
  }
  removeInput()
  {
    this.inputString = this.inputString.slice(0, -1);
    this.currentString();
  }  
  clearInput() {
    this.inputString = '';
  }

  currentString()
  {
    return this.inputString
  }

  calculate()
  {
    try {
      return eval(this.inputString);
    } catch (error) {
      return NaN;
    }
  }

  constructor() { }
}
