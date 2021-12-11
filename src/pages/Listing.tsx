import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, List, SearchBar, Load, PokemonListItem } from '../styles';
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
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

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
			setLoading(false);
		}

		getPokemon();
	}, []);

	useEffect(() => {
		async function getPokemon() {
			const { data } = await api.get(`pokemon?limit=20&offset=${offset}`);
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

			setPokemonList(pokemonList => [...pokemonList, ...results]);
			
		}

		if(pokemonList.length + 20 < 700 && !loading) {
			getPokemon();
		}
	}, [offset]);

	async function handleInputChange (event: ChangeEvent<HTMLInputElement>) {

		if(loading) {
			return;
		}

		try { 
			const { value } = event.target;
			const search = String(value).toLowerCase();

			if(search === '') {
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
				return;
			}

			const { data } = await api.get(`pokemon/${search}`);

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

	function handleOpenPokemon (pokemonid: number) {
		console.log(pokemonid);
		navigate(`/Details/${pokemonid}`);
	}

	function handleLoadPokemon () {
		setOffset(offset => offset + 20);
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
							<PokemonListItem key={pokemon.id} type={pokemon.type} onClick={() => handleOpenPokemon(pokemon.id)}>
								<div>
									<span>{pokemon.code}</span>
									<img src={pokemon.sprite} alt={pokemon.name} />
								</div>
								<p>{pokemon.name}</p>
							</PokemonListItem>
						);
					})
				}
			</List>
			<Load onClick={handleLoadPokemon}>
				<span> Carregar Mais </span>
			</Load>
		</>
	);
}

export default Listing;