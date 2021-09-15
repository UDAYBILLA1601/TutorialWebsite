import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FirstComponent } from 'src/app/first/first.component';
import { SecoundComponent } from 'src/app/secound/secound.component';
import { ThirdComponent } from 'src/app/third/third.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
export const routes: Routes = [
  {
    path : 'first',
    children : [{
      path : 'third',
      component : ThirdComponent
    }],
    component : FirstComponent
  },
  {
    path : 'secound',
    component : SecoundComponent
  },
  
];
