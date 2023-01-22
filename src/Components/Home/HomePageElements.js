import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const PageHeader = styled.h1`
    color: #000;
    font-size: min(8vw, 60px);
    text-align: center;
    max-width: 900px;
    padding: 0rem 2rem;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    
    

`;

export const SupportText = styled.text`
    color: #000;
    font-size: min(3vw, 40px);
    text-align: center;
    max-width: 400px;
    padding: 0rem 0rem 2rem 0rem;
    margin-top: -30%;
`;

export const Section = (direction, background, children, height, width) => {
    const Section = styled.section`
        display: flex;
        flex-direction: ${direction};
        align-items: center;
        justify-content: center;
        align-self: center;
        background: ${background};
        width: ${width},
        height: ${height},
        border-radius: 50px;
    `;
    return (
        <Section>
            {children}
        </Section>
    )

}

export const SupportingInfoTopSectionSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    width: 60vw;
    height: auto;
    align-items: center;
    align-self: center;
`;

export const ImageSectionL = styled.img`
        padding: 1rem 8vw;
        width: 30%;
        height: auto;
        max-width: 500px;
`;

export const ImageSectionXL = styled.img`
        padding: 2rem 0rem;
        width: 80%;
        height: auto;
`;

export const SecondSectionText = styled.text`
    font-size: min(5vw, 2.5rem);
    max-width: 80%;
    margin-bottom: 50px;
    text-align: center;
`;

export const DLOnAppStoreIcon = (src) => {
    const Image = styled.img`
        display: flex;
        width: 70%;
        height: auto;
        max-width: 600px;
        
    `;

    const LinkingContainer = styled.a`
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        display: flex;
    `;


    return (

        <LinkingContainer href="https://apps.apple.com/app/id1662166914" target="_blank" rel="noreferrer">
            <Image src={src}></Image>
        </LinkingContainer>

    )
}

export const CourseSpiralHorizontal = styled.img`
    padding: 2rem 0rem;
    width: 80%;
    height: auto;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const CourseSpiralVertical = styled.img`
    padding: 2rem 0rem;
    width: 80%;
    height: auto;
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const ThirdSectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ThirdSectionColumn = styled.section`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 70%;
    height: auto;
    align-items: center;
`;

export const ThirdSectionImage = styled.img`
    padding: 2rem 5rem 1rem 5rem;
    width: 50%;
    height: auto;
    @media screen and (max-width: 1000px) {
        padding: 2rem 0rem 1rem 0rem;
        width: 100%;
        max-width: 20rem
    }
`;
export const ThirdSectionTextHeader = styled.text`
    font-weight: bold;
    font-size: min(3vw, 2rem);
    text-align: center;
    padding: 0rem 1rem;
    @media screen and (max-width: 1000px) {
        font-size: min(5vw, 2rem);
    }
`;

export const ThirdSectionText = styled.text`
    font-size: min(2.5vw, 1.5rem);
    padding: 0rem 1.5rem;
    text-align: center;
    @media screen and (max-width: 1000px) {
        font-size: min(4vw, 2rem);
    }
`;


