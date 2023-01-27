// tipagem dos dados
export type PokemonData = {
    name: string
    id: number
    sprites: {
        front_default: string;
    }
    types: {
        slot: number
        type: {
            name: string
            url: string
        }
} []
}

// o correto é tipar todos os dados da API,
    // para evitar o uso de 'any'
