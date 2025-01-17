import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { NavMealsComponent } from "../nav-meals/nav-meals.component";

@Component({
  selector: 'app-meals',
  imports: [RouterOutlet, NavMealsComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
