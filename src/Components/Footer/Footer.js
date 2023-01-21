import React from "react"
import {
    FooterSection,
    FooterCompanyInfoSection,
    FooterContentSection,
    FooterContentSectionRow,
    FooterCopyright,
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
            {FooterCopyright('@ 2023 TechBrain LLC')}
        </FooterSection>
    )
}