import React from 'react';
import styled from 'styled-components'
import MainSection from '../ui/atom/main-section'

const Blockquote = styled.blockquote`
	padding: 5px 5px 5px 80px;
	background: #fafafa;
	border: 1px solid #eee;
	position: relative;
	font-size: 0.95em;
	font-style: italic;
	&:after {
		content: '”';
		width: 90px;
		font-family: 'Neuton', serif;
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
      <h1>Testimonials</h1>
      <Blockquote><p>The Chinese herb and acupuncture helped me to alleviate my stress, relieving the desire to smoke.</p><p>— Marcie Roche</p></Blockquote>
      <Blockquote><p>Before I started receiving Chinese massage, I could barely move my head but now I have free movement.</p><p>— William Yu</p></Blockquote>
			<Blockquote><p>The pain in my back is so much better.</p><p>— Barbara Parkin</p></Blockquote>
    </MainSection>
  )
}

export default Testimonials
