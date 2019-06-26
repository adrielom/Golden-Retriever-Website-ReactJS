import styled from 'styled-components';

export const TextStyle = styled.div`
	position: relative;
	z-index: 2;
	width: 40%;
	margin-left: 2.2rem;
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 2.5em;
		color: white;
		margin: 0;
		margin-top: 3rem;
		width: 120%;
		font-family: kamerik-bold;
		font-weight: 100;
		line-height: 1.4em;
		letter-spacing: .15em;
	}
	p {
		width: 100%;
		font-size: 1.1em;
		letter-spacing: .11em;
		font-family: kamerik-book;
		line-height: 1.4em;
		font-weight: 100;
		color: white;
	}
	button {
		margin-top: 4rem;
		justify-content: flex-end;
		height: 40px;
		width: 30%;
		background-color: #2077ae;
		color: white;
		font-size: .8em;
		font-family: kamerik-bold;
		font-weight: 100;
		border: none;
		border-radius: 7px;
	}
`;

export const ContentStyle = styled.div`
	display: flex;
	height: 100%;
`;

export const GalleryStyle = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 3;
	justify-content: center;
	align-items: center;
	height: 45%;
	padding-top: 2rem;
	width: 100%;
	.dots {
		z-index: 4;
		width: 6rem;
		height: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		.dot {
			height: 8px;
			width: 8px;
			border-radius: 50%;
			&:hover {
				animation: growCircle 300ms ease-in-out;
			}
		}
		.dot-active {
			background-color: #2077ae;
		}
		.dot-inactive {
			background-color: white;
		}
	}
	.interactionContainer {
		display: flex;
		flex: 1;
		justify-content: space-around;
		color: white;
		margin-top: 5rem;
		h4 {
			margin: 0 20px;
		}
	}
	.prev {
		position: relative;
		display: flex;
		flex-direction: row;
		img {
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
		}
		&:hover {
			cursor: pointer;
		}
	}
	.next {
		position: relative;
		display: flex;
		flex-direction: row;
		&:hover {
			cursor: pointer;
		}
	}
	.interactionContainer {
		width: 100%;
		height: auto;
	}

	@keyframes growCircle {
		0% {
			height: 8px;
			width: 8px;
		}
		50% {
			height: 10px;
			width: 10px;
		}
		100% {
			height: 8px;
			width: 8px;
		}
	}
`;
