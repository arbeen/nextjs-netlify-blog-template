import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, AppShell, Header } from "@mantine/core";
import { DoubleNavbar } from "../src/layout/sidebar";
import { HeaderSearch } from "../src/layout/header";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: "light",
				}}
			>
				<AppShell
					padding="md"
					navbar={<DoubleNavbar />}
					header={<HeaderSearch />}
					styles={(theme) => ({
						main: {
							backgroundColor:
								theme.colorScheme === "dark"
									? theme.colors.dark[8]
									: theme.colors.gray[0],
						},
					})}
				>
					{/* Your application here */}
					<Component {...pageProps} />
				</AppShell>
			</MantineProvider>
		</>
	);
}
