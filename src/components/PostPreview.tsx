import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

export default function PostPreview(props: PostMetadata) {
	return(
		<article>
			<Link href={`/${props.slug}`}>
				<h3>{props.title}</h3>
			</Link>
			<p>{props.subtitle}</p>
			<p>{props.date}</p>
		</article>
	);
}
