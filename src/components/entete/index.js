import React from 'react';
// import ReactDOM from 'react-dom';
import panImage from '../image/add-to-basket.png';

import styled from 'styled-components';

// faire un state pour le formulaire

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
const Entete = ()=>{
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
    return(
        <div>
            <HeaderContainer>
            <MenuToggle ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </MenuToggle>
            <LogoContainer>
                        <a href="https://www.ikea.com/fr/fr/">
                            <img src="https://www.ikea.com/fr/fr/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg" alt="IKEA" title="IKEA"/>
                            {/* <span class="hnf-header__sr-only">IKEA</span> */}
                        </a>
            </LogoContainer>
            <Panier><a href="#"><img src={panImage}></img></a></Panier>
            </HeaderContainer>
            <FormStyled role="search" action="https://www.ikea.com/fr/fr/search/" class="search-box">
                <FormContainer class="search-field">
                <StyledInput type="search" name="q" maxlength="150" class="search-field__input" spellcheck="false" aria-label="Trouver des articles, des nouveautés ou des idées inspirantes" aria-placeholder="Rechercher par produits, inspiration ou nouveautés" autocapitalize="off" autocomplete="off" autocorrect="off">
                </StyledInput>
                    </FormContainer>
              </FormStyled>
                <MainContainer>
                <AccueilText >
                <h2>Créez l'ambiance avec l'éclairage connecté</h2>
                </AccueilText>
                </MainContainer>
              </div>
            )
}

const Panier = styled.div`
margin-left: 60%;
`
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const MenuToggle = styled.div`

`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
box-sizing: border-box;
overflow: visible;
font-family: inherit;
outline-offset: -2px;
display: block;
-webkit-appearance: none;
width: 100%;
padding: .75rem 7.25rem .75rem 3.25rem;
margin: 0 auto;
font-size: 16px;
line-height: 1.5;
background-color: #eee;
border: 0;
border-radius: 50em;
outline: 0;
`

const FormStyled = styled.form`
font: 100% sans-serif;
font-size: 15px;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
color: #111;
font-weight: 400;
outline: none;
box-sizing: border-box;
margin: 0;
padding: 0;
position: relative;
z-index: 9;
line-height: 1.5rem;
background: #fff;
`
const StyledNav =  styled.nav`
font: 100% sans-serif;
font-size: .875rem;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
color: #111;
line-height: 1.6;
font-weight: 400;
outline: none;
box-sizing: border-box;
margin: 0;
padding: 0;
order: 3;
display: block;
margin-left: 2rem;
`;

const FormContainer = styled.div`
font: 100% sans-serif;
font-size: 15px;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
color: #111;
font-weight: 400;
line-height: 1.5rem;
outline: none;
box-sizing: border-box;
position: relative;
max-width: 88rem;
padding: .5rem 0;
margin: 0 1rem;
`
const MainContainer = styled.div`

`;

const AccueilText = styled.div`
font: 100% sans-serif;
font-size: .875rem;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
color: #111;
line-height: 1.6;
font-weight: 400;
outline: none;
box-sizing: border-box;
padding: 0;
margin: 0 1rem 2rem;
margin-bottom: 1rem;
`;
const AccueilImage = styled.div`
font: 100% sans-serif;
font-size: .875rem;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
line-height: 1.6;
font-weight: 400;
color: #407ab1;
outline: none;
box-sizing: border-box;
margin: 0;
padding: 0;
background-color: #eee;
position: relative;
overflow: hidden;
width: 100%;
padding-bottom: 55.272265625%;
`;

export default Entete;