import { styled } from 'styled-components'

const Navbar = ({filter, filterHandler, searchHandler, searchedFood}) => {
    
    return (
        <NavMain>
            <NavTop>
                <img src="/images/Foody Zone.svg" alt="logo" />
                <input type="search" name="" id="" placeholder='Search food....' onChange={searchHandler} value={searchedFood} />
            </NavTop>
            <NavBottom>
                <label htmlFor="all" className={filter==='all'? "active-btn": ""}>
                    All<input type="radio" name="filter" value="all" id="all" checked={filter === "all"} onClick={filterHandler} />
                </label>
                <label htmlFor="breakfast" className={filter==="breakfast"? "active-btn": ""}>
                    Breakfast<input type="radio" name="filter" value="breakfast" id="breakfast" onClick={filterHandler} checked={filter === "breakfast"} />
                </label>
                <label htmlFor="lunch" className={filter==="lunch"? "active-btn": ""}>
                    Lunch<input type="radio" name="filter" value="lunch" id="lunch" onClick={filterHandler} checked={filter === "lunch"} />
                </label>
                <label htmlFor="dinner" className={filter==="dinner"? "active-btn": ""}>
                    Dinner<input type="radio" name="filter" value="dinner" id="dinner" onClick={filterHandler} checked={filter === "dinner"} />
                </label>
            </NavBottom>
        </NavMain>
    )
}

const NavMain = styled.nav`
    background-color: #323334;
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
    padding: 3rem 7.5rem 2rem 7.5rem;
    @media (0 < width < 350px) {
        gap: 2rem;
    }
`
const NavTop = styled.nav`
    display: flex;
    justify-content: space-between;
    input{
        all: unset;
        border-radius: 5px;
        border: 1px solid #FF0909;
        background-color: transparent;
        color: #fff;
        padding: 6px 12px;
        transition: all 0.2s ease;
        &::placeholder{
            color: #fff;
        }
        &:focus{
            border: 1px solid #FFF;
        }
    }
    @media (0 < width < 700px){
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        input{
            width: 10rem;
        }
    }
`
const NavBottom = styled.nav`
    display: flex;
    gap: 14px;
    justify-content: center;
    label{
        all: unset;
        padding: 6px 12px;
        border-radius: 5px;
        background-color: #FF4343;
        color: #fff;
        cursor: pointer;
        &:active{
            background-color: #FF0909
        }
        &:hover{
            background-color: #FF0909;
        }
    }
    input{
        all: unset;
    }
    .active-btn{
        background-color: #FF0909;
        outline: 1px solid #d0a2a2;
    }
    @media (0 < width < 350px) {
        flex-wrap: wrap;
    }
`

export default Navbar