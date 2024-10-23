import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcServicesService {

  private inputString: string = '0'

  addInput(value: string)
  {
    if(this.inputString === '0' || this.inputString ==='NaN')
    {
      this.inputString = ''
    }
    this.inputString += value
  }
  removeInput()
  {
    if(this.inputString ==='NaN' || this.inputString.length == 1)
    {
      this.inputString = '0'
    }
    else  
    {
      this.inputString = this.inputString.slice(0, -1);
    }
    this.currentString();
  }  
  clearInput() {
    this.inputString = '0';
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
