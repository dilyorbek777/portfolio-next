import Head from "next/head"
import { SeoProps } from "./seo.props"

const Seo = ({ children, metaTitle, metaDescription, metaKeywords, author }: SeoProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default Seo