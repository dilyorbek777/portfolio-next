"use client"

import Link from "next/link";
import { useState } from "react";

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/services", text: "Services" },
    { href: "/projects", text: "Projects" }
]
export default function BtnQuery() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    return (
        <>


            <ul className={showMe ? "links flex gap-28 trued" : "links flex gap-28"} id="links" >
                {links.map((a, i) => (
                    <li key={i} className="font-bold hover:text-black/50 transition-all" onClick={toggle}><Link href={a.href}>{a.text}</Link></li>
                ))}
            </ul>
            <div className="icon-bar" onClick={toggle}>
                {showMe ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                }
            </div>
        </>
    );
}