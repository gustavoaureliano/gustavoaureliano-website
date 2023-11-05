import Link from "next/link"
import styles from "./page.module.css"
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Header from "@/components/Header";

export default function Home() {
	const postMetadata = getPostMetadata();
	const postPreviews = postMetadata.map((post) => (
		<PostPreview key={"post.slug"} {...post}/>
	));
	postPreviews.sort((a,b) => a.props.date - b.props.date);
	return (
		<>
			<Header/>
			<main className={styles.main}>
				<h2>Comece por aqui!</h2>
				<section className={styles.posts}>
					{postPreviews}	
				</section>
			</main>
		</>
	)
}
