import Image from "next/image";
import logo from "@/public/next.svg"
import Link from "next/link";
import { PageWrapperNav, PageWrapperText } from "./PageMotion";
import BtnQuery from "./BtnQuery";



export default function Navbar() {
    // let showMe = false;
 
    return (
        <PageWrapperNav>
            <nav className="px-32 wd3 py-4 flex flex-wrap w-[calc(100%-50px)] bg-white/70 my-4 mx-autoh fixed-nav rounded-md z-50 items-center justify-between">
                <Link href='/' className="logo">
                    <Image
                        src={logo}
                        width={150}
                        height={0}
                        alt="logo of our website"
                    />
                </Link>
             
                <BtnQuery/>
            </nav>
        </PageWrapperNav>
    )
}
