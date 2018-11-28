import { Component, OnInit } from '@angular/core';

import { EncomendasService } from '../encomedas/encomendas.service';

@Component({
  selector: 'app-encomendas-listagem',
  templateUrl: './encomendas-listagem.component.html',
  styleUrls: ['./encomendas-listagem.component.css']
})
export class EncomendasListagemComponent implements OnInit {

  encomendas: Array<any>;

  constructor(private encomendaService: EncomendasService) { }

  ngOnInit() {
    this.encomendaService.listar()
      .subscribe(response => this.encomendas = response);
  }

}
