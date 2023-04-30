import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  
  public countClick: number = 53
  public name: string = ''
  
  addClick() {
    this.countClick++
  }

  zeraClick() {
    this.countClick = 0
  }

  keyUp(event: any) {
    this.name = event.target.value
  }
}
