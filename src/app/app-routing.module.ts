import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ItemsPageComponent} from "./items-page/items-page.component";
import {MultiInputComponent} from "./multi-input/multi-input.component";
import {MultiComboExampleComponent} from "./multi-combo-example/multi-combo-example.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'items', component: ItemsPageComponent},
  {path: 'multi', component: MultiInputComponent},
  {path: 'multi-combo', component: MultiComboExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
