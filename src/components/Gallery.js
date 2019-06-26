import React, { useState, useEffect } from 'react';
import { GalleryStyle } from '../styles/ContentStyle';
import { CircleImage } from '../styles/CircleStyle';
import img1 from '../images/358599_thumb.png';
import img2 from '../images/golden_0_burned.png';
import img3 from '../images/Golden-Retriever-PNG-Background.png';
import img4 from '../images/Download-Golden-Retriever-Puppy-PNG-Transparent-Image-For-Designing-Projects.png';
import arrow from '../images/Vector1.svg';
import uuid from 'uuid/v4';

const Gallery = () => {
	const [ active, setActive ] = useState([ false, true, false, false ]);
	const [ index, setIndex ] = useState(1);

	const changeStatus = (i) => {
		const value = !active[i];
		if (i > 3) {
			setIndex(0);
			i = 0;
		} else if (i < 0) {
			setIndex(3);
			i = 3;
		} else {
			setIndex(i);
		}

		const s = [ false, false, false, false ];
		console.log(s);
		s[i] = value;
		setActive(s);
		console.log(`index = ${index} e i = ${i}`);
	};

	const pictures = [ img1, img2, img3, img4 ];

	return (
		<GalleryStyle>
			<CircleImage top='-25' radius='280' background={pictures[index]}>
				<div />
			</CircleImage>
			<div className='dots'>
				{active.map((a, i) => (
					<div
						key={uuid()}
						onClick={() => {
							changeStatus(i);
						}}
						className={'dot ' + (a === true ? 'dot-active' : 'dot-inactive')}
					/>
				))}
			</div>
			<div className='interactionContainer'>
				<div onClick={() => changeStatus(index - 1)} className='prev'>
					<img src={arrow} alt='arrow' />
					<h4>Prev</h4>
				</div>
				<div onClick={() => changeStatus(index + 1)} className='next'>
					<h4>Next</h4>
					<img src={arrow} alt='arrow' />
				</div>
			</div>
		</GalleryStyle>
	);
};

export default Gallery;
