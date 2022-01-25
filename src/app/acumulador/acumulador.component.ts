import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})
export class AcumuladorComponent implements OnInit {


  @Input() nombre: string;
  @Input() contador: number = 0;
  @Input('acm') acumulador: number = 0;

  @Output() evtClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit(): void {
  }

  changeValue(valor:number) {
    this.contador = this.contador + valor

    this.evtClick.emit(`[${this.nombre}] -> Incremento -o- Decremento: ${valor}`)

  }

}
