import {
    PageHeader,
    Container,
    TopSection,
    SupportText,
    Section,
    ImageSectionL,
    DLOnAppStoreIcon,
    SupportingInfoSection,
} from "./HomePageElements";


export const HomePage = () => {
    return (
        <>
            <Container>
                <PageHeader>Discover the power of Machine Learning!</PageHeader>
                {
                    Section(
                        '#fff',
                        <>
                            <SupportingInfoSection>
                                <SupportText>Master machine learning with our interactive mobile app. Download now and start learning today!</SupportText>
                                {DLOnAppStoreIcon(require('./../../Assets/DownloadOnTheAppStore.png'))}
                            </SupportingInfoSection>
                            <ImageSectionL src={require('./../../Assets/ExplorePage.png')}></ImageSectionL>
                        </>

                    )
                }
                {
                    Section(
                        '#800000',
                        <>
                            <ImageSectionL src={require('./../../Assets/ExplorePage.png')}></ImageSectionL>
                            <SupportingInfoSection>
                                <SupportText>Master machine learning with our interactive mobile app. Download now and start learning today!</SupportText>
                                {DLOnAppStoreIcon(require('./../../Assets/DownloadOnTheAppStore.png'))}
                            </SupportingInfoSection>
                        </>
                    )
                }
            </Container>

        </>
    )
}
