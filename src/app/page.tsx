import Link from "next/link"
import styles from "./page.module.css"
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function Home() {
	const postMetadata = getPostMetadata();
	const postPreviews = postMetadata.map((post) => (
		<PostPreview key={"post.slug"} {...post}/>
	));
	postPreviews.sort((a,b) => a.props.date - b.props.date);
	return (
		<main className={styles.main}>
			<h1>Seja bem vindo ao meu site</h1>
			<section className={styles.posts}>
				<h2>Comece por aqui!</h2>
				{postPreviews}	
				<Link href="https://onepiecefamily.gustavoaureliano.com.br" className={styles.project}>
					<h3>OnePieceFamily</h3>
				</Link>
				<Link href="https://www.worldcubeassociation.org/persons/2018AURE01" className={styles.project}>
					<h3>World Cube Association</h3>
				</Link>
				<Link href="https://lotodata.tk" className={styles.project}>
					<h3>LotoData</h3>
				</Link>
				<Link href="https://github.com/gustavoaureliano/iPET" className={styles.project}>
					<h3>iPET</h3>
				</Link>
			</section>
		</main>
	)
}
