import styled from 'styled-components'

const MainSection = styled.div`
  text-align: left;
  padding: 0 5% 2% 5%;
  font-family: 'Neuton', serif;
  p, li {
    font-size: 1.2em;
  }

  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    width: 50%;
    float: left;
  }
`

export default MainSection
