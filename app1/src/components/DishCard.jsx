import React from 'react'
import {styled} from "styled-components"
import { BASE_URL } from '../App'

const DishCard = ({dish}) => {
  return (
    <Card>
        <DishImg>
            <img src={BASE_URL + dish.image} alt="" />
        </DishImg>
        <Description>
            <div>
                <h3>{dish.name}</h3>
                <p>{dish.text}</p>
            </div>
            <Button>
                ${dish.price.toFixed(2)}
            </Button>
        </Description>
    </Card>
  )
}

const Card = styled.div`
    width: 21rem;
    height: 11rem;
    color: #fff;
    display: flex;
    border: 1px solid transparent;
    border-image: linear-gradient(135deg, #A5EFFF, #6EBFF439, #A5EFFF);
    border-image-slice: 1;
    backdrop-filter: blur(13px);
    @media (0 < width < 350px) {
        width: 15rem;
        height: 20rem;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }
`

const DishImg = styled.div`
    padding-top: 0.5rem;
`

const Description = styled.div`
    position: relative;
    padding: 0.5rem;
    div h3{
        padding-bottom: 0.5rem;
    }
`

const Button = styled.button`
    all: unset;
    padding: 6px 12px;
    border-radius: 5px;
    background-color: #FF4343;
    color: #fff;
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    &:active{
        background-color: #FF0909
    }
    &:hover{
        background-color: #FF0909;
    }
    @media (0 < width < 350px) {
        position: absolute;
        bottom: -2rem;
        right: 1rem;
    }
`

export default DishCard