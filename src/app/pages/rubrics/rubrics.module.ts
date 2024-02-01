import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubricsRoutingModule } from './rubrics-routing.module';
import { RubricsComponent } from './rubrics.component';

import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    RubricsComponent
  ],
  imports: [
    CommonModule,
    RubricsRoutingModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    InMemoryWebApiModule
  ]
})
export class RubricsModule { }
