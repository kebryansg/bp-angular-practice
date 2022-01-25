import {Component, ViewChild} from '@angular/core';
import {CronometroComponent} from './cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  nombreEstudiante: string = 'Kevin Suárez';
  edadEstudiante: number = 26;
  horaActual: Date;
  colors: IColor[] = [
    {redSocial: 'Whatsapp', color: '#25D366'},
    {redSocial: 'Facebook', color: '#4267B2'},
    {redSocial: 'Twitter', color: '#1DA1F2'},
    {redSocial: 'Youtube', color: '#FF0000'},
  ];

  logAcumulador: string[] = [];

  insertLogAcumulador(log: string) {
    console.log(log)
    this.logAcumulador.push(log);
  }

  mostrarHora(evento: any) {
    console.log(evento);
    this.horaActual = new Date();
    const {target} = evento;
    target.innerHTML = `Cambio la Hora - ${this.horaActual.getSeconds()}`;
  }

  mostrarConsola(phone: string) {
    console.log(phone);
  }


  listMarcadores: string[] = [];

  addMarcador(marcador: string) {
    this.listMarcadores.unshift(marcador);
  }


  // @ViewChild(CronometroComponent) crtFirst: CronometroComponent;
  @ViewChild('cronometroFirst') crtFirst: CronometroComponent;
  @ViewChild('cronometroSecond') crtSecond: CronometroComponent;
  @ViewChild('cronometro') crt: CronometroComponent;

  iniciarCrono() {
    console.log('Iniciar Crono(s)!!');
    this.crtFirst.iniciarCronometro();
    this.crtSecond.iniciarCronometro();
    this.crt.iniciarCronometro();
  }


}


interface IColor {
  redSocial: string;
  color: string;
}
