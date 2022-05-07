import Head from "next/head";
import Header from "./components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="Portfolio" content="Trust me. I'm a programmer!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </div>
    );
}
