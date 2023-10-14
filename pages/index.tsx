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
import { Chip } from "@nextui-org/chip"

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
								<h2 className="text-3xl font-bold">Dev Boy</h2>
							</div>
							<div className="flex justify-center m-4 gap-4">
								<Chip
									variant="shadow"
									color="primary"
									size="sm"
								>
									Next.js 13
								</Chip>
								<Chip
									variant="shadow"
									color="primary"
									size="sm"
								>
									NextUI
								</Chip>
								<Chip
									variant="shadow"
									color="primary"
									size="sm"
								>
									YouTuber
								</Chip>
							</div>
							<div className="flex justify-center max-w-sm">
								<p className="text-lg text-center font-semibold">
									I build websites and make smoothies. I also make music in my free time!
								</p>
							</div>
							<div className="flex flex-col justify-center gap-4 pt-4">
								<a href="https://www.youtube.com/channel/UCPyZ_rtuhtTMv_e3XPgQR3w" target="_blank">
									<Card className="w-full" isHoverable>
										<CardBody className="p-3">
											<h3 className="self-center text-lg">YouTube</h3>
										</CardBody>
									</Card>
								</a>
								<a href="https://github.com/chadhindsight" target="_blank">
									<Card className="w-full" isHoverable>
										<CardBody className="p-3">
											<h3 className="self-center text-lg">GitHub</h3>
										</CardBody>
									</Card>
								</a>
								<a href="https://thecodeletter.com" target="_blank">
									<Card className="w-full" isHoverable>
										<CardBody className="p-3">
											<h3 className="self-center text-lg">The Codeletter</h3>
										</CardBody>
									</Card>
								</a>
							</div>
						</div>
					</CardBody>
				</Card>
			</section>
		</DefaultLayout>
	);
}
