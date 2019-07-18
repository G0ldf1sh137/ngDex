export interface PokemonType {
  slot: number
  type: string | any
}

export interface PokemonSprites {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

export interface PokemonStat {
  stat: any
  effort: number
  base_stat: number
}

export interface Pokemon {
  id: number
  name: string
  base_experience?: number
  height?: number
  is_default?: boolean
  order?: number
  weight?: number
  img: string
  sprites?: PokemonSprites[]
  types: PokemonType[]
}

export const pikachu: Pokemon = {
  id: 25,
  name: "Pikachu",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  types: [{ slot: 1, type: "Electric" }],
  height: 0.7,
  weight: 1.2
}
