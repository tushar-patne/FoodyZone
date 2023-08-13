import {styled} from "styled-components"
import DishCard from './DishCard'

const Menu = ({filter, displayFood}) => {
    
  return (
    <MenuContainer>
        <MenuCardsContainer>
        {
          displayFood?.map((dish, index) => <DishCard dish={dish} key={dish.name}/>)
        }
        </MenuCardsContainer>
    </MenuContainer>
  )
}

const MenuContainer = styled.main`
    min-height: calc(100vh - 12.5rem);
    background-image: url('/images/bg.png');
    background-size: cover;
`

const MenuCardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 4rem 0rem;
  justify-content: center;
  align-items: center;
`

export default Menu