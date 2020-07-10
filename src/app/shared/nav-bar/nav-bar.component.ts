import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

  @Input() opened = false; // Essa váriavel foi criada para o menu abrir/fechar -> Menu inicia fechado
  // NgClass no html que valida e aplica determinada classe no html

  searchOpened = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.opened = !this.opened; // Inverte estado da váriavel opened
    this.menuToggle.emit(this.opened); // Está disparando o evento para a variavel menuToggle
    // Está variavel "exporta" o evento para o elemento "pai" (appcomponent.html)
  }
  formControl(){
    this.searchOpened = !this.searchOpened;
  }
}
