import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

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
                            <NavLink href="/meals">Browse meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Fooodies community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>;
}