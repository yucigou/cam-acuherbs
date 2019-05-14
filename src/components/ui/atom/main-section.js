import styled from 'styled-components'

const MainSection = styled.div`
  text-align: left;
  padding: 0 5% 2% 5%;
  font-family: 'Neuton', serif;
  p, li {
    font-size: 1.2em;
  }

  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    width: 38%;
    float: left;
    margin-top: -70px;
    margin-left: 50px;
    background-color: white;
    border: 1px solid #ddd;
    p, li {
      font-size: 1.3em;
    }
    padding: 2% 7% 7.3% 7%;
  }
`

export default MainSection
