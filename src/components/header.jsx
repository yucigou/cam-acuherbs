import React from 'react';
import styled from 'styled-components'
import Menu from './menu'

const HeaderWrapper = styled.div`
  text-align: center;
`

const StyledHeader = styled.header`
  padding: 0 24px;
  margin: 0 5%;
	border: none;
	color: #111;
	font-family: 'Playfair Display', serif;
	-webkit-font-smoothing: antialiased;
`

const Link = styled.a`
	text-decoration: none;
`

const Title = styled.div`
	font-size: 1.5em;
  padding: 10px 0;
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 1.7em;
    br {
      display: none;
    }
  }
`

const SubTitle = styled.div`
	font-size: 1em;
  padding: 0 0 10px 0;
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 0 0 20px 0;
  }
`

const HeaderImage = styled.div`
	max-height: 350px;
	background-size: cover;
	background-position: center;
	display: block;
`

const Img = styled.img`
	max-width: 100%;
	height: auto;

  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
    margin-top: -35px;
    position: relative;
    z-index: -1;
    transform: scale(1, 0.8);
    -webkit-transform: scale(1, 0.8); /* Saf3.1+, Chrome */
    -moz-transform: scale(1, 0.8); /* FF3.5+ */
    -ms-transform: scale(1, 0.8); /* IE9 */
    -o-transform: scale(1, 0.8); /* Opera 10.5+ */
  }
`

const Header = () => {
	return (
		<HeaderWrapper>
	    <StyledHeader>
	      <Title><Link href="/" title="Cambridge Acupuncture &amp; Herbs — Member of The Association of Traditional Chinese Medicine (UK)" rel="home"><strong>Cambridge Acupuncture <br/>&amp; Herbs</strong></Link></Title>
	      <SubTitle>Member of The Association of <br/>Traditional Chinese Medicine (UK)</SubTitle>
	    </StyledHeader>
      <Menu />
			<HeaderImage>
				<Img src="/images/cam-acuherbs-banner-1.png"></Img>
			</HeaderImage>
		</HeaderWrapper>
  )
}

export default Header
