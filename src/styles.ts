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

	button {
		margin-left: 2rem;
		background: #8ACEF6;
		border-radius: 10rem;
		width: 5%;
		height: 100%;
		cursor: pointer;

		svg {
			width: 50%;
			height: 50%;
		}
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

export const Load = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 5rem;
	margin-top: 3rem;
	margin-bottom: 1rem;

	button {
		width: 80%;
		background: #8ACEF6;
		border-radius: 1rem;
		cursor: pointer;
		text-align: center;

		span { 
			font-size: 2rem;
		}
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
	margin-top: 1rem;
	display: flex;
	flex-direction: row;

	button {
		cursor: pointer;
		color: #FFF;
		margin-left: 1rem;
		margin-right: 3rem;
		height: 100%;
		border: none;
		outline: none;
		background: none;

		svg {
			height: 100%;
			width: 100%;
		}
	}

	div{
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
		margin-top: 3rem;
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
	margin-top: 1rem;

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
			flex-direction: row;
			span { 
				margin-left: 0.5rem;
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
			flex-direction: row;
			span { 
				margin-left: 0.5rem;
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
	margin-top: 1.5rem;
	width: 100%;

	span { 
		color: ${ props => typeColorObject[props.type]};
		font-size: 2rem;
		margin-bottom: 1rem;
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
				color: #040404;
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