import styled from 'styled-components';

type PokemonProps = {
    type: string;
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

export const Pokemon = styled.div<PokemonProps>`
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