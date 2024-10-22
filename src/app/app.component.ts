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
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkTheme: boolean = false;  

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

  toggleTheme()
  {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
  }

  removeInput()
  {
    this.CalcServicesService.removeInput()
  }
}
