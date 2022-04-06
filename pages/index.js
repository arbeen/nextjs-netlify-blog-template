import Head from "next/head";
import Image from "next/image";
import HomePage from "../src/index";
import { fetchAPI } from "../lib/api";

const Home = ({ faqs }) => <HomePage faqs={faqs} />;

export async function getStaticProps() {
	// Run API calls in parallel
	const faqsRes = await fetchAPI("/faqs");

	return {
		props: {
			faqs: faqsRes.data,
		},
		revalidate: 1,
	};
}
export default Home;
