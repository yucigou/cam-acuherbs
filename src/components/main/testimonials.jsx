import React from 'react';
import styled from 'styled-components'
import MainSection from '../ui/atom/main-section'

const Blockquote = styled.blockquote`
	padding: 30px 30px 30px 90px;
	background: #fafafa;
	border: 1px solid #eee;
	position: relative;
	font-size: 0.95em;
	font-style: italic;
	&:after {
		content: '”';
		width: 90px;
		font-family: 'Georgia', serif;
		font-size: 72px;
		line-height: 72px;
		font-weight: 700;
		font-style: normal;
		text-align: center;
		color: #ca2017;
		position: absolute;
		top: 31px;
		left: 0px;
	}
	p {
		font-style: italic;
	}
`

const Testimonials = () => {
	return (
    <MainSection>
      <h2>Testimonials</h2>
      <Blockquote><p>The Chinese herb and acupuncture helped me to alleviate my stress, relieving the desire to smoke. <p>— Marcie Roche</p></p></Blockquote>
      <Blockquote><p>Before I started receiving Chinese massage, I could barely move my head but now I have free movement. <p>— William Yu</p></p></Blockquote>
			<Blockquote><p>The pain in my back is so much better. <p>— Barbara Parkin</p></p></Blockquote>
    </MainSection>
  )
}

export default Testimonials
