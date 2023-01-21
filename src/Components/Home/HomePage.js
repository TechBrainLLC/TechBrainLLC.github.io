import {
    PageHeader,
    Container,
    TopSection,
    SupportText,
    AppAdSectionTop,
    ImageSectionL,
    ImageSectioXL,
    SupportingInfoSection,
} from "./HomePageElements";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export const HomePage = () => {
    return (
        <>
            <Container>
                <PageHeader>Discover the power of Machine Learning!</PageHeader>
                <AppAdSectionTop>
                    <SupportingInfoSection>
                        <SupportText>Master machine learning with our interactive mobile app. Download now and start learning today!</SupportText>
                        <ImageSectioXL src={require('./../../Assets/DownloadOnTheAppStore.png')}></ImageSectioXL>
                    </SupportingInfoSection>

                    <ImageSectionL src={require('./../../Assets/ExplorePage.png')}></ImageSectionL>
                </AppAdSectionTop>
            </Container>

        </>
    )
}
