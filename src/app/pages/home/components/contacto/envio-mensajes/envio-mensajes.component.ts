import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-envio-mensajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './envio-mensajes.component.html',
  styleUrls: ['./envio-mensajes.component.scss']
})
export class EnvioMensajesComponent {
  nombre = '';
  correo = '';
  telefono = '';
  mensaje = '';

  enviarMensaje() {
    if (this.nombre && this.correo && this.mensaje) {
      alert('Mensaje enviado correctamente ✅');
      this.nombre = '';
      this.correo = '';
      this.telefono = '';
      this.mensaje = '';
    } else {
      alert('Por favor, completa los campos obligatorios.');
    }
  }
}
