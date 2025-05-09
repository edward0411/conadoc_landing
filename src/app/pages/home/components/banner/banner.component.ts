import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  currentSlide = 0;

  slides = [
    {
      imagen: 'assets/bienvenidos.jpg',
      titulo: 'La Cooperativa Nacional de Docentes le da la bienvenida',
      descripcion: 'Descubre cómo puedes hacer parte de nuestra comunidad solidaria.'
    },
    {
      imagen: 'assets/creditos.jpg',
      titulo: 'Créditos Educativos',
      descripcion: 'Apoyo financiero para docentes y sus familias.'
    },
    {
      imagen: 'assets/educacion.jpg',
      titulo: 'Programas Educativos',
      descripcion: 'Capacitación y formación continua.'
    },
    {
      imagen: 'assets/turismo.jpg',
      titulo: 'Turismo Solidario',
      descripcion: 'Viajes accesibles y experiencias inolvidables.'
    },
    {
      imagen: 'assets/convenios.jpg',
      titulo: 'Convenios Nacionales',
      descripcion: 'Alianzas estratégicas con empresas del país.'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
