import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<Card>
					<CardBody>
						<div className="felx flex-col w-full">
							<div className="flex justify-center">
								<Image alt="CoopTing profile picture" src="/CoopTing.png" width={200} height={200} />
							</div>
							<div className="flex justify-center pt-2">

							</div>
						</div>
					</CardBody>
				</Card>
			</section>
		</DefaultLayout>
	);
}
