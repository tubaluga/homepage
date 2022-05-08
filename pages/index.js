import Head from "next/head";
import Header from "./components/Header";
import styles from "../styles/Home.module.css";
import Container from "./components/Container";
import MainSection from "./components/MainSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sergey A. Bazylev - homepage</title>
                <meta name="Portfolio" content="Trust me. I'm a programmer!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Header />
                <MainSection id="section1" />
                <WorkSection id="section2" />
                <AboutSection id="section3" />
                <Footer />
            </Container>
        </div>
    );
}
