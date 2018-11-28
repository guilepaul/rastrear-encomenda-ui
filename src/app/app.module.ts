import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EncomendasListagemComponent } from './encomendas-listagem/encomendas-listagem.component';
import { EncomendaCadastroComponent } from './encomenda-cadastro/encomenda-cadastro.component';
import { RastreioPesquisaComponent } from './rastreio-pesquisa/rastreio-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncomendasListagemComponent,
    EncomendaCadastroComponent,
    RastreioPesquisaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    TableModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    CalendarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
