import {
    PageHeader,
    Container,
    TopSection,
    SupportText,
    Section,
    ImageSectionL,
    DLOnAppStoreIcon,
    SupportingInfoTopSectionSection,
    ImageSectionXL,
    SecondSectionText,
    ThirdSectionColumn,
    ThirdSectionContainer,
    ThirdSectionImage,
} from "./HomePageElements";


export const HomePage = () => {
    return (
        <>
            <Container>
                <PageHeader>Discover the power of Machine Learning!</PageHeader>
                {
                    Section(
                        'row',
                        '#fff',
                        <>
                            <SupportingInfoTopSectionSection>
                                <SupportText>Master machine learning with our interactive mobile app. Download now and start learning today!</SupportText>
                                {DLOnAppStoreIcon(require('./../../Assets/DownloadOnTheAppStore.png'))}
                            </SupportingInfoTopSectionSection>
                            <ImageSectionL src={require('./../../Assets/ExplorePage.png')}></ImageSectionL>
                        </>,
                        'auto', '100%'

                    )
                }
                {
                    Section(
                        'column',
                        '#f0f0f0',
                        <>
                            <ImageSectionXL src={require('./../../Assets/CourseSpiral.png')}></ImageSectionXL>
                            <SecondSectionText>
                                From beginner to advanced, we cover the latest techniques and technologies. Improve your skills and stay ahead of the rest in this field of cutting-edge technology.
                            </SecondSectionText>

                        </>,
                        '10rem', '100%'
                    )
                }
                {
                    Section(
                        'column',
                        '#fff',
                        <ThirdSectionContainer>
                            <ThirdSectionColumn>
                                <ThirdSectionImage src={require('./../../Assets/ExplorePage.png')}></ThirdSectionImage>
                            </ThirdSectionColumn>
                            <ThirdSectionColumn>
                                <ThirdSectionImage src={require('./../../Assets/ExplorePage.png')}></ThirdSectionImage>
                            </ThirdSectionColumn>
                            <ThirdSectionColumn>
                                <ThirdSectionImage src={require('./../../Assets/ExplorePage.png')}></ThirdSectionImage>
                            </ThirdSectionColumn>
                        </ThirdSectionContainer>,
                        '10rem', '100%'
                    )
                }
            </Container>

        </>
    )
}
