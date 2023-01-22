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
    ThirdSectionText,
    ThirdSectionTextHeader,
    CourseSpiralHorizontal,
    CourseSpiralVertical
} from "./HomePageElements";

import useWindowDimensions from "../GeneralUse/Dimensions";
import { useState, useEffect } from "react";


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
                                <CourseSpiralHorizontal src={require(`./../../Assets/CourseSpiralHorizontal.png`)}></CourseSpiralHorizontal>
                                <CourseSpiralVertical src={require(`./../../Assets/CourseSpiralVertical.png`)}></CourseSpiralVertical>
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
                                <ThirdSectionImage src={require('./../../Assets/BlueVisual.png')}></ThirdSectionImage>
                                <ThirdSectionTextHeader>Comprehensive Courses</ThirdSectionTextHeader>
                                <ThirdSectionText>
                                    Rest assured that these courses will provide you with a solid understanding of machine learning
                                </ThirdSectionText>
                            </ThirdSectionColumn>
                            <ThirdSectionColumn>
                                <ThirdSectionImage src={require('./../../Assets/OrangeVisual.png')}></ThirdSectionImage>
                                <ThirdSectionTextHeader>Easy to Understand</ThirdSectionTextHeader>
                                <ThirdSectionText>
                                    These courses are designed to make learning machine learning simple and understandable, no matter the age
                                </ThirdSectionText>
                            </ThirdSectionColumn>
                            <ThirdSectionColumn>
                                <ThirdSectionImage src={require('./../../Assets/GreenVisual.png')}></ThirdSectionImage>
                                <ThirdSectionTextHeader>Interactive Quizzes</ThirdSectionTextHeader>
                                <ThirdSectionText>
                                    Test and solidify your knowledge of machine learning through engaging quizzes
                                </ThirdSectionText>
                            </ThirdSectionColumn>
                        </ThirdSectionContainer>,
                        '10rem', '100%'
                    )
                }
            </Container>

        </>
    )
}
