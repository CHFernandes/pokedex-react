import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { About, Height, Moves, Pokemon, PokemonDetails, PokemonHeader, PokemonStats, Stats, Type, TypeImage, Weight } from '../styles';
import { FiChevronLeft } from 'react-icons/fi';
import { GiWeight } from 'react-icons/gi';
import { FaRulerVertical } from 'react-icons/fa';

type Pokemon = {
    id: number;
    code: string;
    name: string;
	sprite: string;
    mainType: string;
    types: string[];
    weight: string;
    height: string;
    moves: string[];
    description: string;
    stats: {
        hp: number;
        atk: number;
        def: number;
        satk: number;
        sdef: number;
        spd: number;
    }
}

function Details(): JSX.Element {
	const params = useParams();
	const pokemonId = params.id;
	const navigate = useNavigate();
	const defaultPokemon: Pokemon = {
		id: 0,
		code: '#000',
		name: 'Ditto',
		sprite: '',
		mainType: '???',
		types: [],
		weight: '? kg',
		height: '? m',
		moves: [],
		description: 'Ditto is here to placehold a pokemon',
		stats: {
			hp: 0,
			atk: 0,
			def: 0,
			satk: 0,
			sdef: 0,
			spd: 0,
		}
	};
	const [pokemonData, setPokemonData] = useState<Pokemon>(defaultPokemon);

	useEffect(() => {
		async function getPokemonData() {
			const { data } = await api.get(`pokemon/${pokemonId}`);

			const { abilities, height, id, name, stats, types, weight, sprites, species } = data;

			const { data:speciesData } = await api.get(species.url);

			const { flavor_text_entries: flavorEntries } = speciesData;

			const description = String(flavorEntries[0].flavor_text).replace('', ' ');

			const sprite = sprites.other['official-artwork']['front_default'];

			const typesArray: string[] = types.map((type: { type: { name: string; }; }) => {
				return type.type.name;
			});

			const movesArray: string[] = abilities.map( (ability: { ability: { name: string; }; }) => {
				return String(ability.ability.name).charAt(0).toUpperCase() + String(ability.ability.name).slice(1);
			});

			const pokemon: Pokemon = {
				id: Number(id),
				code: `#${String(id).padStart(3,'0')}`,
				name: String(name).charAt(0).toUpperCase() + String(name).slice(1),
				sprite: String(sprite),
				mainType: typesArray[0],
				types: typesArray,
				weight: `${Number(weight)/10} kg`,
				height: `${Number(height)/10} m`,
				moves: movesArray,
				description: String(description),
				stats: {
					hp: Number(stats[0].base_stat),
					atk: Number(stats[1].base_stat),
					def: Number(stats[2].base_stat),
					satk: Number(stats[3].base_stat),
					sdef: Number(stats[4].base_stat),
					spd: Number(stats[5].base_stat),
				}
			};
			setPokemonData(pokemon);
		}

		getPokemonData();
	}, []);

	function handleGoBack () {
		navigate('/');
	}

	return (
		<Pokemon type={pokemonData.mainType}>
			<PokemonHeader>
				<button onClick={handleGoBack}>
					<FiChevronLeft />
				</button>
				<div>
					<span>{pokemonData.name}</span>
					<span>{pokemonData.code}</span>
				</div>
			</PokemonHeader>
			<PokemonDetails>
				<TypeImage>
					<img src={pokemonData.sprite} alt={pokemonData.name} />
					<div>
						{ pokemonData.types.map( (type, index) => {
							return (
								<Type key={index} type={type}>
									{type.charAt(0).toUpperCase() + type.slice(1)} 
								</Type>
							);
						} ) }
					</div>
				</TypeImage>
				<div>
					<About type={pokemonData.mainType}>
						<div>
							<span>About</span>
						</div>
						<div>
							<Weight>
								<div>
									<GiWeight />
									<span>{pokemonData.weight}</span>
								</div>
								<div>
									<span>
										Weight
									</span>
								</div>
							</Weight>
							<Height>
								<div>
									<FaRulerVertical />
									<span>{pokemonData.height}</span>
								</div>
								<div>
									<span>
										Height
									</span>
								</div>
							</Height>
							<Moves>
								<div>
									{pokemonData.moves.map((move, index) => {
										return (
											<span key={index}>{move}</span>
										);
									})}
								</div>
								<div>
									<span>
										Moves
									</span>
								</div>
							</Moves>
						</div>
						<div>
							<p>{pokemonData.description}</p>
						</div>
					</About>
				</div>
				<PokemonStats type={pokemonData.mainType}>
					<span>Base Stats</span>
					<div>
						<span>
							HP
						</span>
						<div>
							<span>{String(pokemonData.stats.hp).padStart(3,'0')}</span>
							<div>
								<Stats stat={pokemonData.stats.hp} />
							</div>
						</div>
					</div>
					<div>
						<span>
							ATK
						</span>
						<div>
							<span>{String(pokemonData.stats.atk).padStart(3,'0')}</span>
							<div>
								<Stats stat={pokemonData.stats.atk} />
							</div>
						</div>
					</div>
					<div>
						<span>
							DEF
						</span>
						<div>
							<span>{String(pokemonData.stats.def).padStart(3,'0')}</span>
							<div>
								<Stats stat={pokemonData.stats.def} />
							</div>
						</div>
					</div>
					<div>
						<span>
							SATK
						</span>
						<div>
							<span>{String(pokemonData.stats.satk).padStart(3,'0')}</span>
							<div>
								<Stats stat={pokemonData.stats.satk} />
							</div>
						</div>
					</div>
					<div>
						<span>
							SDEF
						</span>
						<div>
							<span>{String(pokemonData.stats.sdef).padStart(3,'0')}</span>
							<div>
								<Stats stat={pokemonData.stats.sdef} />
							</div>
						</div>
					</div>
					<div>
						<span>
							SPD
						</span>
						<div>
							<span>{String(pokemonData.stats.spd).padStart(3,'0')}</span>
							<div>
								<Stats stat={pokemonData.stats.spd} />
							</div>
						</div>
					</div>
				</PokemonStats>
			</PokemonDetails>
		</Pokemon>
	);
}

export default Details;