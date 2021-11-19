import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMenuComponent } from './top-menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {PesquisaModule} from "./pesquisa/pesquisa.module";
import { NavBarModule } from './nav-bar/nav-bar.module';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {MatIconModule} from "@angular/material/icon";
import {ProdutoCrudModule} from "../../sessao/fornecedor/forms/produto-crud/produto-crud.module";
import {TopMenuRoutingModule} from "./top-menu-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    TopMenuComponent,
  ],
  exports: [
    TopMenuComponent,

  ],
  imports: [
    CommonModule,
    PesquisaModule,
    NavBarModule,


    TopMenuRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatIconModule,
    ProdutoCrudModule,
    FlexLayoutModule,

  ]
})
export class TopMenuModule {

}

