import React from 'react';
import styled from 'styled-components';
import StarsRatings from 'react-star-ratings';

//import articles from '../../ikea.json';

// console.log();

const Article = (props)=>{
    const article= props.article;
    return(
                <ContPrincipal>
                    {
                        article.imageArticle.map(
                            (image,j)=>{
                            return (<ImgArticle key = {j}>
                            <img src={image.src} srcset={image.srcset} sizes={image.sizes} alt={image.alt} />
                            </ImgArticle>
                            );
                            }
                        )
                    }
                    <NomArticle>{article.nomArticle}</NomArticle>
                    <DescriptionArticle>{article.description}</DescriptionArticle>
                    <PrixArticle>{article.prix} €</PrixArticle>
                    <DonArticle>Dont Eco-Part. Mobilier {article.don} €</DonArticle>
                    <p><StarsRatings
                        rating={article.note}
                        starRatedColor="#ffdb4d"
                        numberOfStars={5}
                        name='rating'
                        starDimension = '20px'
                        starSpacing = '2px'
                    />{article.note}</p>
                </ContPrincipal>
    );
}

// const MainDiv = styled.div`
// display: flex;
// grid-template-columns: 1fr 1fr;
// justify-content: space-around;
// `;
const ImgArticle = styled.div`

`;

const ContPrincipal = styled.div`

`;

const NomArticle = styled.h3`

`

const DescriptionArticle = styled.p`

`

const PrixArticle = styled.h2`

`

const DonArticle = styled.p`
color : #407ab1 ;
`

export default Article;