import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navLinks } from '../models/navLinks.interface';
@Component({
  selector: 'app-nav-meals',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-meals.component.html',
  styleUrl: './nav-meals.component.css'
})
export class NavMealsComponent {
  links: navLinks[] = [
    {titleLink: 'seafood', srcLink: 'seafood'},
    {titleLink: 'pasta', srcLink: 'pasta'},
    {titleLink: 'breakfast', srcLink: 'breakfast'},
  ]
}
