import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import BlogListing from "./BlogListing/BlogListing";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <BlogListing
    	postHeadline={post.title}
      postSnippet={post.snippet}
    	postUrl={'/posts/' + post.slug}
    	postDate={parseISO(post.date)}
    />
  );
}
