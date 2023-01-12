import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';



@NgModule({
  declarations: [AppComponent, AddComponent, RemoveComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, TableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
