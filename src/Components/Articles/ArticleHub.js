import React from "react";
import { useLayoutEffect } from "react";
import { Container, Row, ArticleBox } from "./ArticleHubElements";
import { useRef, useState } from "react";

export const ArticleHub = () => {

    const [articles, setArticles] = useState(
        [
            {
                "Title": "Attention is all you need",
                "SubTitle": "A stunning, comprehensive explanation of the Attention is all you need paper",
                "Body": "body text here",
                "Image": require('./../../Assets/BlueVisual.png')
            }
        ]
    )
    useLayoutEffect(() => {
        const getArticles = () => {
            setArticles([
                {
                    "Title": "Attention is all you need",
                    "SubTitle": "A stunning, comprehensive explanation of the Attention is all you need paper",
                    "Body": "body text here",
                    "Image": require('./../../Assets/BlueVisual.png')
                }
            ])
        }

        getArticles()
    }, [])


    const sizeThreshold = [0, 760, 1520]
    return (
        <Container>
            <Row>
                {ArticleBox(articles[0], sizeThreshold[0])}
                {ArticleBox(articles[0], sizeThreshold[1])}
                {ArticleBox(articles[0], sizeThreshold[2])}
            </Row>
        </Container>
        
    )
}
