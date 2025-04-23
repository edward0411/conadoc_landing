import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { EnvioMensajesComponent } from './envio-mensajes/envio-mensajes.component';
import { FaqContactoComponent } from './faq-contacto/faq-contacto.component';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormularioContactoComponent, EnvioMensajesComponent, FaqContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {}
