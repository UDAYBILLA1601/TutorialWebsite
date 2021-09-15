import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecoundComponent } from './secound/secound.component';
import { ThirdComponent } from './third/third.component';
import { routes } from './module/routes/routes.module';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstComponent, SecoundComponent, ThirdComponent]
