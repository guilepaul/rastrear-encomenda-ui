import { Component, OnInit } from '@angular/core';

import { EncomendasService } from '../encomedas/encomendas.service';

@Component({
  selector: 'app-encomenda-cadastro',
  templateUrl: './encomenda-cadastro.component.html',
  styleUrls: ['./encomenda-cadastro.component.css']
})
export class EncomendaCadastroComponent implements OnInit {

  encomenda = { steps: []};
  step: any = {};
  clientes: Array<any>;
  locais: Array<any>;

  constructor(private encomendaService: EncomendasService) { }

  ngOnInit() {
    this.encomendaService.listarClientes()
      .subscribe(response => this.clientes = response);

    this.encomendaService.listarLocais()
      .subscribe(response => this.locais = response);
  }

  incluirStep() {

    this.step.recebimento = this.step;

    this.encomenda.steps.push(this.step);

    this.step = {};
  }

}
