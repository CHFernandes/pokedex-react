import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { About, Height, Moves, Pokemon, PokemonDetails, PokemonHeader, PokemonStats, Stats, Type, TypeImage, Weight } from '../styles';

type Pokemon = {
    id: number;
    code: string;
    name: string;
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
	console.log(pokemonId);

	return (
		<Pokemon type='grass'>
			<PokemonHeader>
				<span>Bulbasaur</span>
				<span>#001</span>
			</PokemonHeader>
			<PokemonDetails>
				<TypeImage>
					<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
					<div>
						<Type type='grass'>  Grass  </Type>
						<Type type='poison'>  Poison </Type>
					</div>
				</TypeImage>
				<div>
					<About type='grass'>
						<div>
							<span>About</span>
						</div>
						<div>
							<Weight>
								<div>
									<img src="" alt="" />
									<span>6.9 kg</span>
								</div>
								<div>
									<span>
										Weight
									</span>
								</div>
							</Weight>
							<Height>
								<div>
									<img src="" alt="" />
									<span>0.7m</span>
								</div>
								<div>
									<span>
										Height
									</span>
								</div>
							</Height>
							<Moves>
								<div>
									<span>Chlorophyll</span>
									<span>Overgrow</span>
								</div>
								<div>
									<span>
										Moves
									</span>
								</div>
							</Moves>
						</div>
						<div>
							<p>descrição</p>
						</div>
					</About>
				</div>
				<PokemonStats type='grass'>
					<span>Base Stats</span>
					<div>
						<span>
							HP
						</span>
						<div>
							<span>045</span>
							<div>
								<Stats stat={45} />
							</div>
						</div>
					</div>
					<div>
						<span>
							ATK
						</span>
						<div>
							<span>049</span>
							<div>
								<Stats stat={49} />
							</div>
						</div>
					</div>
					<div>
						<span>
							DEF
						</span>
						<div>
							<span>049</span>
							<div>
								<Stats stat={49} />
							</div>
						</div>
					</div>
					<div>
						<span>
							SATK
						</span>
						<div>
							<span>085</span>
							<div>
								<Stats stat={85} />
							</div>
						</div>
					</div>
					<div>
						<span>
							SDEF
						</span>
						<div>
							<span>085</span>
							<div>
								<Stats stat={85} />
							</div>
						</div>
					</div>
					<div>
						<span>
							SPD
						</span>
						<div>
							<span>045</span>
							<div>
								<Stats stat={45} />
							</div>
						</div>
					</div>
				</PokemonStats>
			</PokemonDetails>
		</Pokemon>
	);
}

export default Details;