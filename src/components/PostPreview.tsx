import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import styles from "@/styles/PostPreview.module.css"

export default function PostPreview(props: PostMetadata) {
	return(
		<Link href={`/${props.slug}`} className={styles.postPreview}>
			<h3 className={styles.title}>{props.title}</h3>
			<p className={styles.subtitle}>{props.subtitle}</p>
			<p className={styles.date}>{props.date}</p>
		</Link>
	);
}
