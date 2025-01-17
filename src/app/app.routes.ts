import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './brackfast/breakfast.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' , title: 'Home'},
  {path: 'home', component: HomeComponent , title: 'Home'},
  {path: 'about', component: AboutComponent , title: 'About'},
  {path: 'meals', component: MealsComponent , title: 'Meals'
    ,children: [
      {path: '', redirectTo: 'seafood', pathMatch: 'full'},
      {path: 'seafood', component: SeafoodComponent},
      {path: 'pasta', component: PastaComponent},
      {path: 'breakfast', component: BreakfastComponent}
    ]
  },
  {path: 'team', component: TeamComponent , title: 'Team'},
  {path: 'contacts', component: ContactsComponent , title: 'Contacts'},
  {path: '**', component: NotfoundComponent},
];

