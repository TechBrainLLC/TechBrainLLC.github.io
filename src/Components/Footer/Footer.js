import React from "react"
import {
    FooterSection,
    FooterCompanyInfoSection,
    FooterContentSection,
    FooterContentSectionRow,
    FooterBottom,
    FooterContentRowsSection
} from "./FooterElements"

import { Privacy, About } from "../Footer/FooterRoutingObjects";

export const Footer = () => {
    return (
        <FooterSection>
            <FooterContentSection>
                {FooterCompanyInfoSection()}
                <FooterContentRowsSection>
                    {FooterContentSectionRow(About)}
                    {FooterContentSectionRow(Privacy)}
                </FooterContentRowsSection>
            </FooterContentSection>
            {FooterBottom(['@ 2023 TechBrain LLC', 'TechBrainApp@gmail.com'])}
        </FooterSection>
    )
}