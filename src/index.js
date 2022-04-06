import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";
import { DoubleNavbar } from "./layout/sidebar";

const useStyles = createStyles((theme, _params, getRef) => {
	const control = getRef("control");

	return {
		wrapper: {
			paddingTop: theme.spacing.xl * 2,
			paddingBottom: theme.spacing.xl * 2,
			minHeight: 650,
		},

		title: {
			fontWeight: 400,
			marginBottom: theme.spacing.xl * 1.5,
		},

		control: {
			ref: control,

			"&:hover": {
				backgroundColor: "transparent",
			},
		},

		item: {
			borderRadius: theme.radius.md,
			marginBottom: theme.spacing.lg,

			border: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[3]
					: theme.colors.gray[3]
			}`,
		},

		itemOpened: {
			[`& .${control}`]: {
				color: theme.colors[theme.primaryColor][
					theme.colorScheme === "dark" ? 4 : 6
				],
			},
		},
	};
});

const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export default function HomePage({ faqs }) {
	const { classes } = useStyles();
	return (
		<div>
			<Container size="lg" className={classes.wrapper}>
				<Title align="center" className={classes.title}>
					Frequently Asked Questions
				</Title>

				<Accordion
					iconPosition="right"
					classNames={{
						item: classes.item,
						itemOpened: classes.itemOpened,
						control: classes.control,
					}}
				>
					{faqs.map((faq) => (
						<Accordion.Item label={faq.attributes.question}>
							{faq.attributes.answer}
						</Accordion.Item>
					))}
				</Accordion>
			</Container>
		</div>
	);
}
