import styled, { createGlobalStyle } from 'styled-components';

type PokemonProps = {
    type: string;
}

type StatProp = {
	stat: number;
}

type TypeColorObject = {
	[key: string]: number | string | undefined;
}

const typeColorObject: TypeColorObject = {
	normal: '#C6C6A7',
	fighting: '#D67873',
	flying: '#C6B7F5',
	poison: '#C183C1',
	ground: '#EBD69D',
	rock: '#D1C17D',
	bug: '#C6D16E',
	ghost: '#A292BC',
	steel: '#D1D1E0',
	fire: '#F5AC78',
	water: '#9DB7F5',
	grass: '#A7DB8D',
	electric: '#FAE078',
	psychic: '#FA92B2',
	ice: '#BCE6E6',
	dragon: '#A27DFA',
	dark: '#A29288',
	fairy: '#F4BDC9',
	'???': '#68A090',
};

function calculateStatLength(stat: number){
	const length = (stat * 100) / 180;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
    background: #FFF;
    height: 6.5rem;

    display: flex;
    flex-direction: row;
	align-items: center;
    padding: 2rem 4rem;

    h1 { 
        margin-left: 2.5rem;
        font: 5rem sans-serif;
		font-weight: bold;
        color: #303030;
    }

	img {
        height: 100%;
		object-fit: contain;
	}
`;

export const SearchBar = styled.div`
	display: flex;
	justify-content: center;
	height: 3rem;

	input { 
		height: 100%;
		width: 80%;
		border-radius: 2rem;
		text-align: center;
	}

`;

export const List = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export const PokemonListItem = styled.div<PokemonProps>`
    background: ${ props => typeColorObject[props.type]};
	padding: 0.2rem;
	width: 15%;
	border-radius: 0.4rem;
	margin-top: 1rem;
	cursor: pointer;

	div { 
		background: #FFF;

		span {
			display: flex;
			flex-direction: row-reverse;
			color: ${ props => typeColorObject[props.type]};
		}

		img { 
			width: 100%;
            height: 100%;
			object-fit: contain;
		}
	}

	p { 
		display: flex;
		justify-content: center;
		color: #FFF;
	}
`;

export const Load = styled.button`
	background: #8ACEF6;
	width: 100%;
	height: 5rem;
	border-radius: 1rem;
	cursor: pointer;
	text-align: center;
	margin-top: 3rem;

	span { 
		font-size: 2rem;
	}
`;

export const Pokemon = styled.div<PokemonProps>`
	background: ${ props => typeColorObject[props.type]};
	padding: 0.25rem;
	display: flex;
	flex: 1;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	justify-content: space-between;
`;

export const PokemonHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	span { 
		color: #FFF;

		&:first-child {
			font-size: 2rem;
			font-weight: bold;
		}

		&:last-child {
			font-size: 1.5rem;
			font-weight: bold;
		}
	}
`;

export const PokemonDetails = styled.div`
	background: #FFF;
	border-radius: 2rem;
	height: 70%;
`;

export const TypeImage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		position: absolute;
		top: 5rem;
		height: 30%;
	}

	div { 
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		justify-items: space-between;
	}
`;

export const Type = styled.div<PokemonProps>`
	background: ${ props => typeColorObject[props.type]};
	color: #FFF;
	border-radius: 0.75rem;
	display: flex;
	justify-content: center;
	padding: 0.25rem;
	margin: 0.5rem;
`;

export const About = styled.div<PokemonProps>`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	margin-top: 1.5rem;

	div { 
		display: flex;
		justify-items: center;
		align-items: center;
		span { 
			color: ${ props => typeColorObject[props.type]};
			font-size: 2rem;
			font-weight: bold;
		}

		p {
			margin-top: 1rem;
		}
	}
`;

export const Weight = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	height: 100%;

	div { 
		span { 
			font-size: 0.5rem;
			color: #040404;
			justify-self: flex-end;
		}

		&:first-child {
			flex-direction: column;
			span { 
				font-size: 1rem;
				color: #040404;
			}
		}
	}
`;

export const Height = styled.div`
	flex-direction: column;
	justify-items: center;
	align-items: center;
	border-left: 1px solid #e6e8eb;
	border-right: 1px solid #e6e8eb;
	padding-left: 2.5rem;
	padding-right: 2.5rem;
	margin-left: 2.5rem;
	margin-right: 2.5rem;
	height: 100%;

	div { 
		span { 
			font-size: 0.5rem;
			color: #040404;
		}

		&:first-child {
			flex-direction: column;
			span { 
				font-size: 1rem;
				color: #040404;
			}
		}
	}
`;

export const Moves = styled.div`
	flex-direction: column;
	justify-items: center;
	align-items: center;
	height: 100%;

	div { 
		span { 
			font-size: 0.5rem;
			color: #040404;
		}

		&:first-child {
			flex-direction: column;
			span { 
				font-size: 1rem;
				color: #040404;
			}
		}
	}
`;

export const Stats = styled.div<StatProp>`
	width: ${ props => (Number(props.stat) * 100 / 180) }% !important;
`;

export const PokemonStats = styled.div<PokemonProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	margin-top: 2rem;
	width: 100%;

	span { 
		color: ${ props => typeColorObject[props.type]};
		font-size: 2rem;
		margin-bottom: 1.5rem;
		font-weight: bold;
		text-align: right;
	}

	div { 
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;

		span { 
			text-align: right; 
			width: 10%;
			color: ${ props => typeColorObject[props.type]};
			font-size: 1rem;
			margin-left: 0;
			border-right: 2px solid #e6e8eb;
			padding-right: 3rem;
		}

		div { 
			width: 75%;
			border-radius:1rem;
			span { 
				text-align: center;
				color: #000;
				border-right: 0;
				padding-right: 0;
			}

			div { 
				background: #e6e8eb;
				width: 100%;
				height: 0.5rem;
				margin-top: 0.35rem;
				justify-content: left;

				${Stats} { 
					background: ${ props => typeColorObject[props.type]};
					margin-top: 0;
					margin-left: 0;
				}
			}
		}
	}
`;