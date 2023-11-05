import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/getPostMetadata";
import { notFound } from "next/navigation";
import styles from "@/styles/post.module.css"

function getPostContent(slug: string) {
	const filepath = `src/app/posts/${slug}.md`;
	if (!fs.existsSync(filepath)) notFound();
	const content = fs.readFileSync(filepath, "utf-8");
	return matter(content);
}

export async function generateStaticParams() {
	const posts = getPostMetadata();
	return posts.map((post) => (
		{ slug: post.slug }
	));
}

export default function Post( {params}: {params: {slug: string}} ) {
	const slug = params.slug;
	const post = getPostContent(slug);
	return (
		<main className={styles.post}>
			<Markdown>{post.content}</Markdown>
		</main>
	);
} 
