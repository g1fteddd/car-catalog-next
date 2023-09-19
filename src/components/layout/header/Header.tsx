import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

//TODO: 25 минута гдето
const Header: React.FC = () => {
    const { pathname } = useRouter();
    console.log(pathname);
    return (
        <header className={styles["header"]}>
            <Link href="/" className={pathname === "/" ? styles["active"] : ""}>
                Home
            </Link>
            <Link
                href="/about"
                className={pathname === "/about" ? styles["active"] : ""}
            >
                About Page
            </Link>
        </header>
    );
};

export default Header;
