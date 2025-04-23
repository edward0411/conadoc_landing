import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent, 
    QuienesSomosComponent, 
    ServiciosComponent, 
    DocumentosComponent, 
    BlogComponent, 
    ContactoComponent, 
    ChatbotComponent  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
