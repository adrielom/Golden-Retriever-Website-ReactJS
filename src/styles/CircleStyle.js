import styled from 'styled-components';

export const CircleImage = styled.div`
	div {
		position: relative;
		border-radius: 50%;
		overflow: hidden;
		z-index: 1;
		left: ${(props) => props.left + 'px'};
		top: ${(props) => props.top + 'px'};
		right: ${(props) => props.right + 'px'};
		bottom: ${(props) => props.bottom + 'px'};
		width: ${(props) => props.radius * 2 + 'px'};
		height: ${(props) => props.radius * 2 + 'px'};
		background: ${(props) => `url(${props.background}) no-repeat top center`};
		background-repeat: no-repeat;
		background-color: #f5b272;
		background-position-x: 85px;
		background-position-y: 50px;
		background-size: contain;
	}
`;

export const Circle = styled.div`
	position: absolute;
	border-radius: 50%;
	overflow: hidden;
	z-index: 1;
	left: ${(props) => props.left + 'px'};
	top: ${(props) => props.top + 'px'};
	right: ${(props) => props.right + 'px'};
	bottom: ${(props) => props.bottom + 'px'};
	width: ${(props) => props.radius * 2 + 'px'};
	height: ${(props) => props.radius * 2 + 'px'};
	background-color: #ff6b76;
`;
