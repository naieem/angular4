import { Component, OnInit } from '@angular/core';
import { TestService } from './service/test.service';
import { Posts } from './service/Posts';

@Component({
  selector: 'test-root',
  templateUrl: './template/test.component.html'
})
export class TestComponent implements OnInit {
  employees: Posts[];
  hero: any[];
  title = 'app works! from test component';
  constructor(private _employees: TestService) { }
  ngOnInit() {
    this._employees.getHeroes()
      .then((response) => {
        debugger;
        this.employees = response
      });
  }
  sayHi(data): void {
    this.hero = data;
    console.log(data);
  }
}