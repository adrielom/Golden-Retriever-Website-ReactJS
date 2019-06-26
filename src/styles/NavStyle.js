import styled from 'styled-components';

export const Main = styled.main`
	background-color: #fb5b6b;
	width: 100%;
	height: 100vh;
	z-index: 0;
	overflow: hidden;
	position: relative;
`;

export const Nav = styled.nav`
	display: flex;
	position: relative;
	flex-direction: row;
	height: 10vh;
	align-items: flex-start;
	padding: 10px 25px;
	color: white;
	padding-top: 2rem;
	z-index: 2;
	.fa-bars {
		font-size: 1.3em;
		margin-right: 2rem;
	}
	.fa-search {
		font-size: 1.3em;
		margin-right: 1.2rem;
	}
	.hamburguerIcon {
		flex-grow: .3;
		margin-left: .8rem;
	}
	.headerLinks {
		flex-grow: 2;
		a {
			margin: 0 20px;
			text-decoration: none;
			color: white;
			position: relative;
			font-family: kamerik-bold;
			font-size: .8em;
			font-weight: normal;
			&:hover::after {
				content: "";
				position: absolute;
				width: 100%;
				left: 0;
				bottom: -5px;
				border: 1px solid white;
				animation: lineBelow .3s ease-in;
			}
		}
	}

	@keyframes lineBelow {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}

	.headerSearch {
		flex-grow: 1;
		display: flex;
		justify-content: flex-end;
		#search {
			width: 100px;
			background: transparent;
			border: none;
			color: white;
			text-align: right;
			font-size: 1em;
			padding-right: 1rem;
			::placeholder {
				color: #fff;
				opacity: .9;
			}
		}
	}
`;
