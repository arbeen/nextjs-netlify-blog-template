import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Arbin Shrestha</title>
				<meta name="description" content="Arbin Shrestha" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hello World!</h1>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://instagram.com/arbeen_stha"
					target="_blank"
					rel="noopener noreferrer"
				>
					Arbin © 2022
				</a>
			</footer>
		</div>
	);
}
