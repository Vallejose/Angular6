import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: string[];
  celular: string[];
  constructor() {
    this.destinos = ["Paris", "Barcelona", "Madrid", "Montevideo"];
    this.celular = ["xiaomi", "x3 NFC", "64GB, 6RAM", "324" , "https://www.mercadolibre.com.uy/xiaomi-poco-x3-nfc-dual-sim-64-gb-shadow-gray-6-gb-ram/p/MLU16163950?product_trigger_id=MLU16163952&pdp_filters=category%3AMLU1055&applied_product_filters=MLU16163950&quantity=1"];

  }

  ngOnInit(): void {
  }

}
