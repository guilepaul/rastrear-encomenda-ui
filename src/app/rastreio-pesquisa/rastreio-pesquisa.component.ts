import { EncomendasService } from './../encomedas/encomendas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rastreio-pesquisa',
  templateUrl: './rastreio-pesquisa.component.html',
  styleUrls: ['./rastreio-pesquisa.component.css']
})
export class RastreioPesquisaComponent implements OnInit {

  steps: Array<any>;

  constructor(private encomendaService: EncomendasService) { }

  ngOnInit() {
    this.encomendaService.listar()
      .subscribe(response => this.steps = response);
  }

}
