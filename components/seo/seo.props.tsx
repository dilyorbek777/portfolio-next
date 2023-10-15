import { ReactNode } from "react";

export interface SeoProps {
    children: ReactNode;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    author: string;
}
