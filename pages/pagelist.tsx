import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div style={{ padding: 40 }}>
            <Link href="/">
                <a style={{ color: "#fff" }}>Home</a>
            </Link>
            <br></br>
            <Link href="/about-us">
                <a style={{ color: "#fff" }}>About us</a>
            </Link>
            <br></br>
            <Link href="/contact">
                <a style={{ color: "#fff" }}>Contact</a>
            </Link>
        </div>
    );
};

export default Home;
