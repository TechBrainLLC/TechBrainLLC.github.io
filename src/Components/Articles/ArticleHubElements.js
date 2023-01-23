import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const ArticleBox = ({Title, SubTitle, Body, Image}, windowThreshold) => {
    const Container = styled.section`
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        align-items: center;
        height: 40vh;
        width 40vw;
        background: #f0f0f0;

        @media screen and (max-width: ${windowThreshold}px) {
            display: none
        }
        @media screen and (max-width: 760px) {
            width 70vw;
        }
        @media screen and (min-width: 1520px) {
            width 30vw;
            height: 50vh
        }
    `;

    const ImageElement = styled.img`
        margin-top: 1.7rem;
        width: 80%;
        max-width: 80%;
        max-height: 25vh;
        resize-mode: contain;
    `;

    const InformationSection = styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 30%;

        @media screen and (min-width: 1520px) {
            margin-top: 3vh;
        }

        align-items: center;
        justify-content: center;
        
    `;


    const TitleElement = styled(Link)`
        font-size: min(3vw, 2.5rem);
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        &:hover {
            transition: all 0.2s ease-in-out;
            color: #04cbd3;
          }
    `;

    const SubTitleElement = styled(Link)`
        max-width: min(35vw, 30rem);
        font-size: min(2vw, 1.5rem);
        text-align: center;
        white-space: pre-wrap;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        &:hover {
            transition: all 0.2s ease-in-out;
            color: #04cbd3;
          }
    `;

    return (
        <Container>
            <ImageElement src={Image}></ImageElement>
            <InformationSection>
                <TitleElement to={`/Articles/${Title}`} >{Title}</TitleElement>
                <SubTitleElement to={`/Articles/${Title}`}>{SubTitle}</SubTitleElement>
            </InformationSection>
        </Container>
    )
}

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Row = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 100%
    height: auto;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0rem;
`;