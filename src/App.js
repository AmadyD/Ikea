import React from 'react';
// import logo from './logo.svg';
import styled from 'styled-components';
import articles from './ikea.json';
import './App.css';

import Entete from './components/entete/index';
import Article from './components/article/index';


function App() {
  return (
    <div className="App">
      <Entete></Entete>
      <AccueilText >
        <h2>Créez l'ambiance avec l'éclairage connecté</h2>
      </AccueilText>
      <img src="https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=s" srcset="https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=xxxl 1400w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=xxl 950w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=xl 800w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=l 750w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=m 600w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=s 500w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=xs 400w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=xxs 300w,
                           https://www.ikea.com/images/0a/f3/0af3aa074c4708e151ce5ddcfae01f9d.jpg?f=xxxs 240w" sizes="100vw"  alt="éclairages LED connectés" />
      <ArticlesDiv>
        {
          articles.map(
            (article,i)=>{
              //console.log("article : "+article.nomArticle);
              return(
                <ArticleContainer key={i}> 
                <Article  article={article}></Article>
                </ArticleContainer>
              );
            }
          )
        }
        <LienArticles><Lien href="">Je découvre plus d'inspiration</Lien></LienArticles>
      </ArticlesDiv> 
      <Footer>
      <Copyright>
        © Inter IKEA Systems B.V 1999-2020
      </Copyright>
      <FooterMenu>
        <FooterList>
              <FooterElement ><FooterLink href="https://www.ikea.com/fr/fr/customer-service/terms-conditions/" >Conditions générales</FooterLink></FooterElement>
              <FooterElement ><FooterLink href="https://www.ikea.com/fr/fr/customer-service/privacy-policy/" >Charte de protection des données</FooterLink></FooterElement>
              <FooterElement ><FooterLink href="https://www.ikea.com/fr/fr/customer-service/cookie-policy/" >Politique relative aux cookies</FooterLink></FooterElement>
              <FooterElement ><FooterLink href="javascript:Optanon.ToggleInfoDisplay()" >Paramètres des cookies</FooterLink></FooterElement>
              <FooterElement ><FooterLink href="https://www.ikea.com/fr/fr/customer-service/services/mentions-legales-pub40d9d951" >Mentions légales</FooterLink></FooterElement>
              <FooterElement ><FooterLink href="https://www.ikea.com/fr/fr/customer-service/services/ce-ne-sont-pas-des-offres-ikea-pubc0d6ed0d" >Alertes fraude</FooterLink></FooterElement>
              <FooterElement ><FooterLink href="https://www.ikea.com/fr/fr/customer-service/product-guides/recalls/" >Rappel produit</FooterLink></FooterElement>
        </FooterList>
      </FooterMenu>
      </Footer>
    </div>
  );
}

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

const LienArticles = styled.div`
margin-top:10%;
height: 50px;
width: 300px;
border: 2px solid #0074d9;
color: #0074d9;
`;

const Footer = styled.footer`
font: 100% sans-serif;
font-size: 15px;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
line-height: 1.6;
font-weight: 400;
outline: none;
box-sizing: border-box;
margin: 0;
display: block;
padding: 0 0 2rem 0;
color: #fff;
background: #0058a3;
flex: none;
`;

const FooterMenu = styled.div`
font: 100% sans-serif;
font-size: 15px;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
line-height: 1.6;
font-weight: 400;
color: #fff;
outline: none;
box-sizing: border-box;
margin: 0;
padding: 0;
text-align: center;
padding-bottom: 1.5rem;
padding-left: 1.5rem;
padding-right: 1.5rem;
`;

const FooterList = styled.ul`
font: 100% sans-serif;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
font-weight: 400;
color: #fff;
text-align: center;
outline: none;
box-sizing: border-box;
margin: 0;
padding: 0;
list-style: none;
margin-left: 0;
padding-left: 0;
font-size: .75rem;
line-height: 1.3334;
`;

const FooterElement = styled.li`
font: 100% sans-serif;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
font-weight: 400;
color: #fff;
list-style: none;
font-size: .75rem;
line-height: 1.3334;
outline: none;
box-sizing: border-box;
display: inline-block;
margin: 0 0 .5rem 0;
padding: 0;
`;
const FooterLink = styled.a`
font: 100% sans-serif;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
list-style: none;
font-size: .75rem;
line-height: 1.3334;
outline: none;
box-sizing: border-box;
position: relative;
background: transparent;
text-decoration: none;
color: #fff;
fill: #fff;
font-weight: 400;
`;



const Copyright = styled.div`
font: 100% sans-serif;
font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
line-height: 1.6;
font-weight: 400;
color: #fff;
outline: none;
box-sizing: border-box;
margin: 0;
padding: 0;
font-size: 0.75rem;
text-align: center;
margin-bottom: 1rem;
`;

const Lien = styled.a`
margin-top:50px;
`;

const ArticleContainer = styled.div`
margin-top:10%;
width: 50%;
`;
const ArticlesDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

export default App;
