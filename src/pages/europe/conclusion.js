import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import NavbarSubLinks from "../../components/in-depth/navbarsub"


// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   grid-template-rows: auto;
//   grid-gap: 2rem;
//   align-self: center;
//   justify-content: center;
// `;

// const Item = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// width: 800px;
// margin: 0 auto;

// @media (max-width: 1280px) {
//   width: 600px;
//   }
//   @media (max-width: 600px) {
//     width: 300px;
//     }
// `

const TextBox = styled.div`
display: flex;
flex-direction: column;
width:100%;
max-width: 800px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:600px;
}
@media (max-width: 1024px) {
  padding:0 32px;
}
p {
  letter-spacing: 0px;
  color: #606060;
  font-size:18px;
  line-height:38px;
  @media (max-width: 1440px) {
    font-size:16px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:15px;
    line-height:30px;
  }
  @media (max-width: 768px) {
    padding:0 32px;
  }
}
`

const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
  
  }
`


const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:0;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
`
const Conclusion = (props) => (
    <Layout location={props.location}>

<div className="row" id="first-section">
    <div className="col">

    <NavbarSubLinks />
      
     <TitleSection>Conclusion</TitleSection>

     <Gap/>

  

<TextBox>
    <p>As a conclusion, we can say that the pandemic hit Europe severely. In the first wave, western countries had a high number of cases and deaths.  COVID-19 hit especially prosperous countries with high mobility in their airports. Eastern countries had a little more time for preventive actions, so they minimized the spread of the virus. Another important issue is that half of the deaths in first wave took place in elderly care homes, showing us the importance to protect these places. In the second wave, apart from western countries, poor countries in the region of Balkans and Central Europe also suffered strongly from COVID-19. Scandinavian countries with the exception of Sweden, as well as Baltic countries, were the most successful in the battle against COVID-19 until now. This virus is so aggressive that without prevention measures, can lead to the disruption of the healthcare system as we watched happening in Bergamo, Italy, at the beginning of the pandemic.
</p>


    </TextBox>

    </div>
    </div>


</Layout>
)

export default Conclusion