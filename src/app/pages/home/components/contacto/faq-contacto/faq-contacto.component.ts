import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-contacto.component.html',
  styleUrls: ['./faq-contacto.component.scss']
})
export class FaqContactoComponent {
    faqs = [
        {
          pregunta: '¿Cómo puedo afiliarme a CONADOC?',
          respuesta: 'Puedes afiliarte diligenciando el formulario oficial y entregándolo en nuestras oficinas o enviándolo por correo.',
          abierto: false
        },
        {
          pregunta: '¿Qué beneficios obtengo como afiliado?',
          respuesta: 'Accedes a servicios financieros, educativos, turísticos y convenios exclusivos para docentes afiliados.',
          abierto: false
        },
        {
          pregunta: '¿Dónde están ubicadas las oficinas?',
          respuesta: 'Nuestras oficinas principales están ubicadas en Bogotá, pero también contamos con presencia en otras ciudades.',
          abierto: false
        }
      ];
      
      toggle(index: number) {
        this.faqs[index].abierto = !this.faqs[index].abierto;
      }
      
}
