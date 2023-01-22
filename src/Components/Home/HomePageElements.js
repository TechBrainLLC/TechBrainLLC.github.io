import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const PageHeader = styled.h1`
    color: #000;
    font-size:3.5rem;
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
    font-size:2rem;
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
        height: ${height}
    `;
    return (
        <Section>
            {children}
        </Section>
    )

}

export const SupportingInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
    width: 40%;
    height: auto;
    align-items: center;
    align-self: center;
`;

export const ImageSectionL = styled.img`
        padding: 1rem 4rem;
        width: 30%;
        height: auto;
        max-width: 500px;
`;

export const ImageSectionXL = styled.img`
        padding: 2rem 5rem;
        width: 80%;
        height: auto;
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

        <LinkingContainer href="https://reactgo.com/react-open-link-new-tab/" target="_blank" rel="noreferrer">
            <Image src={src}></Image>
        </LinkingContainer>

    )
}
