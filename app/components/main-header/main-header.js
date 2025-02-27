import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
    return <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="A plate with the food on it" priority />
                    NextLevel food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Fooodies community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>;
}