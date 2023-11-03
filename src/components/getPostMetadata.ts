import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

export default function getPostMetadata(): PostMetadata[] {
	const folder = "src/app/posts";
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));
	const posts = markdownPosts.map((filename) => {
		const fileContents = fs.readFileSync(`${folder}/${filename}`, "utf-8");
		const matterResult = matter(fileContents);
		return {
			title: matterResult.data.title,
			subtitle: matterResult.data.subtitle,
			date: matterResult.data.date,
			slug: filename.replace(".md", "")
		};
	});
	return posts;
}
