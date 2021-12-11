import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, List, SearchBar, Load, PokemonListItem } from '../styles';
import { FiSearch } from 'react-icons/fi';
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
	const [searchQuery, setSearchQuery] = useState('');
	const [searched, setSearched] = useState(false);
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

		if(pokemonList.length + 20 < 700 && !loading && !searched) {
			getPokemon();
		}
	}, [offset]);

	async function handleInputChange (event: ChangeEvent<HTMLInputElement>) {

		if(loading) {
			return;
		}

		const { value } = event.target;
		const search = String(value).toLowerCase();
		setSearchQuery(search);
		
	}

	async function handleSearch () {
		if(loading) {
			return;
		}

		try { 
			const search = searchQuery.toLowerCase();

			if(search === '') {
				const { data } = await api.get('pokemon?limit=20&offset=0');
				setOffset(0);
				setSearched(false);
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
			setSearched(true);
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
			setSearched(false);
		}
	}

	function handleOpenPokemon (pokemonId: number) {
		navigate(`/Details/${pokemonId}`);
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
				<button
					onClick={handleSearch}
				>
					<FiSearch />
				</button>
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
			{ 
				!searched && (
					<Load>
						<button onClick={handleLoadPokemon}>
							<span> Carregar Mais </span>
						</button>
					</Load>
				)
			}
		</>
	);
}

export default Listing;