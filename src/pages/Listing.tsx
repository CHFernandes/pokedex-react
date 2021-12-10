import React, { ChangeEvent, useEffect, useState } from 'react';

import { Header, Pokemon, List, SearchBar } from '../styles';
import { api } from '../services/api';

type Pokemon = {
	id: number;
	code: string;
	name: string;
	sprite: string;
	type: string;
}

type PokemonReturnData = {
	name: string;
	url: string;
}

function Listing () : JSX.Element {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
	// const [offset, setOffset] = useState(0);

	useEffect(() => {
		async function getPokemon() {
			const { data } = await api.get('pokemon?limit=20&offset=0');
			const pokemonReturnData: PokemonReturnData[] = data.results;

			const promises = pokemonReturnData.map(async pokemonUrl => {
				const { url } = pokemonUrl;

				const { data } = await api.get(url);

				const pokemon: Pokemon = {
					id: data.id,
					code: `#${String(data.id).padStart(3,'0')}`,
					name: String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1),
					type: data.types[0].type.name,
					sprite: data.sprites.other['official-artwork']['front_default']
				};

				return pokemon;

			});

			const results = await Promise.all(promises);

			setPokemonList(results);
			
		}

		getPokemon();
	}, []);

	async function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
		try { 
			const { value } = event.target;
			const search = String(value).toLowerCase();
			const { data } = await api.get(`pokemon/${search}`);
			console.log(data);

			const pokemon: Pokemon = {
				id: data.id,
				code: `#${String(data.id).padStart(3,'0')}`,
				name: String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1),
				type: data.types[0].type.name,
				sprite: data.sprites.other['official-artwork']['front_default']
			};

			setPokemonList([pokemon]);
		} catch(e) {
			setPokemonList([]);
		}
		
	}

	return (
		<>
			<Header>
				<img src="https://user-images.githubusercontent.com/9741252/81717987-83b84000-947b-11ea-9ac9-5ad1d59adf7a.png" alt="Pokédex" />
				<h1>Pokédex</h1>
			</Header>
			<SearchBar>
				<input
					type='text'
					name='Procurar'
					id='Procurar'
					placeholder='Procurar'
					onChange={handleInputChange}
				/>
			</SearchBar>
			<List>
				{
					pokemonList.map((pokemon) => {
						return(
							<Pokemon key={pokemon.id} type={pokemon.type}>
								<div>
									<span>{pokemon.code}</span>
									<img src={pokemon.sprite} alt={pokemon.name} />
								</div>
								<p>{pokemon.name}</p>
							</Pokemon>
						);
					})
				}
			</List>
		</>
	);
}

export default Listing;