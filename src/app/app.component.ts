import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'netflix';
  menuOpened = false;

  listTitles = [{
    trailer: 'assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
    img: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
    name: 'Capitão América: O Primeiro Vingador',
    relevance: 90,
    age: 12,
    parts: '3 partes',
    categories: ['Épico', 'Filme de Fantasia', 'Adrenalina Pura']
  },{
    trailer: 'assets/videos/trailer_dark.mp4',
    img: 'assets/images/dark.jpg',
    name: 'Dark',
    relevance: 94,
    age: 18,
    parts: '3 partes',
    categories: ['Épico', 'Filme de Fantasia', 'Viagem no espaço']
  },{
    trailer: 'assets/videos/trailer_b99.mp4',
    img: 'assets/images/brooklyn99.jpg',
    name: 'Brooklyn Nine-Nine',
    relevance: 92,
    age: 16,
    parts: '6 partes',
    categories: ['Sitcoms', 'Comédias para TV', 'Série dos EUA']
  }
]


setMenuState(state: boolean){
  this.menuOpened = state;
}

closeMenu(){
  this.menuOpened = false;
}

}
