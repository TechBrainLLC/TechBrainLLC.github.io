import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const ImageSectionL = styled.img`
        padding: 1rem 4rem;
        width: 30%;
        height: auto;
        max-width: 500px;
`;

export const ImageSectioXL = styled.img`
        padding: 1rem 4rem;
        width: 50%;
        height: auto;
        max-width: 500px;
`;

export const FooterSection = styled.section`
    display: flex;
    background: #A9A9A9;
    flex-direction: column;
    max-height: 350px;
    width: 100%;
`;

export const FooterContentSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px

`;

export const FooterCompanyInfoSection = () => {
    const Container = styled.section`
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
        width: 50%;
    `;
    const CompanyText = styled.text`
        color: #000;
        font-size: 3rem;
    `;
    const LogoSection = styled.img`
        padding: 1rem 1rem 1rem 4rem;
        width: 9rem;
        height: auto;
        max-width: 500px;
    `;

    const Name = "TechBrain"
    const logo = require('./../../Assets/TechBrainLogo.png')
    return (
        <Container>
            <LogoSection src={logo}></LogoSection>
            <CompanyText>{Name}</CompanyText>
        </Container>
    )
}

export const FooterContentRowsSection = styled.section`
    display: flex;
    flex-direction: row;
    padding: 1rem 5rem;
`;

export const FooterContentSectionRow = (info) => {
    const Container = styled.section`
        width: 8rem;
        height: auto;
        padding: 3rem 0rem;
        display: flex;
        flex-direction: column;
    `;

    const TitleText = styled.text`
        color: #000;
        font-size: 1.5rem;
        margin-bottom: .2rem;
        font-weight: bold;
    `;

    const ItemText = styled(Link)`
        color: #000;
        font-size: 1.1rem;
        padding .5rem 0rem;
        text-decoration: none;
    `;

    return (
        <Container>
            <TitleText>{info.Title}</TitleText>
            {Object.keys(info).map((key) => {
                if (key == "Title") {
                    return null
                } else {
                    return (
                        <ItemText to={info[key]} activeStyle>
                            {key}
                        </ItemText>
                    )
                }

            })}
        </Container>
    )



}


export const FooterCopyright = (text) => {
    const FooterText = styled.text`
    color: #000;

    font-size: 1rem;

`;
    const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items; center;
    justify-content: center;
    height: 50px;
    width: 100%;
    padding: 2rem 0rem 0rem 0rem;


    `;

    return (
        <Container>
            <FooterText>{text}</FooterText>
        </Container>
    )
}

