import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {
  @Input() minuto: number = 0;
  @Input() segundo: number = 0;
  reloj: string;

  interval: any;
  pause: boolean = false;

  @Output() evtHistorial: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.reloj = this.parseEtiquetaReloj();
  }

  iniciarCronometro() {
    this.pause = false;
    this.interval = setInterval(() => {

      if (this.pause) {
        return;
      }

      this.segundo += 1;
      if (this.segundo == 60) {
        this.segundo = 0;
        this.minuto += 1;
      }
      this.reloj = this.parseEtiquetaReloj();
    }, 1000);
  }

  pausarCronometro() {
    this.pause = true;
    clearInterval(this.interval);
  }

  pararCronometro() {
    this.segundo = 0;
    this.minuto = 0;
    this.reloj = this.parseEtiquetaReloj();
    clearInterval(this.interval);
  }

  emitirHistorial() {
    console.log(this.reloj);
    this.evtHistorial.emit(this.reloj);
  }

  parseEtiquetaReloj() {
    return `${this.minuto.toString().padStart(2, '0')}:${this.segundo.toString().padStart(2, '0')}`;
  }

}
