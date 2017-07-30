import { Component, OnInit } from '@angular/core';
import { TestService } from './service/test.service';
@Component({
  selector: 'test-root',
  templateUrl: './template/test.component.html'
})
export class TestComponent implements OnInit {
  employees = [];
  title = 'app works! from test component';
  constructor(private _employees: TestService) {}
  ngOnInit() {
    this._employees.getHeroes()
      .subscribe(response => this.employees = response);
  }
}