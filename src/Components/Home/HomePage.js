import {
    PageHeader,
    Container,
    TopSection,
    SupportText,
    Section,
    ImageSectionL,
    DLOnAppStoreIcon,
    SupportingInfoSection,
    ImageSectionXL
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
                            <SupportingInfoSection>
                                <SupportText>Master machine learning with our interactive mobile app. Download now and start learning today!</SupportText>
                                {DLOnAppStoreIcon(require('./../../Assets/DownloadOnTheAppStore.png'))}
                            </SupportingInfoSection>
                            <ImageSectionL src={require('./../../Assets/ExplorePage.png')}></ImageSectionL>
                        </>,
                        'auto', '100%'

                    )
                }
                {
                    Section(
                        'column',
                        '#c2b5a8',
                        <>
                            <ImageSectionXL src={require('./../../Assets/CourseSpiral.png')}></ImageSectionXL>
                            <SupportingInfoSection>From Beginners to advanced, we have courses for all</SupportingInfoSection>

                        </>,
                        '10rem', '100%'
                    )
                }
            </Container>

        </>
    )
}
