import { Component, OnInit } from '@angular/core';
import { Pokemon, pikachu } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  // by default set the pokemon to Pikachu for debugging
  pokemon: Pokemon = pikachu;

  // TODO: create and inject Pokemon Service
  constructor() { }

  ngOnInit() { }

  getTypes(): string {
    if(this.pokemon.types.length > 1){
      // If a 2nd type exists, display both separated with " / "
      return this.pokemon.types[0].type + " / " + this.pokemon.types[1].type; 
    } else {
      // If only a single type, display the type alone
      return this.pokemon.types[0].type;
    }
  }

}
