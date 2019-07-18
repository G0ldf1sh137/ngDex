import { Component, OnInit } from '@angular/core';

interface PokemonType {
  slot1: string
  slot2?: string
}

interface Pokemon {
  name: string
  id: number
  img: string
  type: PokemonType
}


const pikachu: Pokemon = {
  id: 25,
  name: "Pikachu",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  type: { slot1: "Electric" }
}


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemon: Pokemon = pikachu;

  constructor() { }

  ngOnInit() {
  }

}
