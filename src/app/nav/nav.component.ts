import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navLinks } from '../models/navLinks.interface';
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links: navLinks[] = [
    {titleLink: 'Home', srcLink: '/home'},
    {titleLink: 'About', srcLink: '/about'},
    {titleLink: 'Meals', srcLink: '/meals'},
    {titleLink: 'Team', srcLink: '/team'},
    {titleLink: 'Contacts', srcLink: '/contacts'},
  ]
  
}
