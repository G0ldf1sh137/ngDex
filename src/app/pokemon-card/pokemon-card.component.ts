import { Component, OnInit } from '@angular/core';

interface PokemonType {
  slot: number
  type: string | any
}

interface PokemonSprites {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

interface PokemonStat {
  stat: any
  effort: number
  base_stat: number
}

interface Pokemon {
  id: number
  name: string
  base_experience?: number
  height?: number
  is_default?: boolean
  order?: number
  weight?: number
  img: string
  types: PokemonType[];
}


const pikachu: Pokemon = {
  id: 25,
  name: "Pikachu",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  types: [
    { slot: 1, type: "Electric" },
    //{ slot: 2, type: "Fire" }
  ]
}


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  // by default set the pokemon to Pikachu for debugging
  pokemon: Pokemon = pikachu;

  constructor() { }

  ngOnInit() {
  }

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
