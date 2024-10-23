import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcServicesService } from './services/Calculator/calc-services.service'
import { CalcPipesPipe } from '../pipes/calculator/calc-pipes.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CalcPipesPipe,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMode: number = 1;  

  constructor(private CalcServicesService: CalcServicesService){}
    
  addInput (value: string)
  {
    this.CalcServicesService.addInput(value)
  }

  calc()
  {    
    const result = this.CalcServicesService.calculate();
    this.CalcServicesService.clearInput();  // Clear input after calculation
    this.CalcServicesService.addInput(result.toString());
  }

  get currentString()
  {
    return this.CalcServicesService.currentString()
  }

  reset()
  {
    this.CalcServicesService.clearInput()
    return this.currentString
  }

  toggleTheme() {
    this.currentMode = this.currentMode < 3 ? this.currentMode + 1 : 1; // Cycle through modes
  }

  removeInput()
  {
    this.CalcServicesService.removeInput()
  }
}
