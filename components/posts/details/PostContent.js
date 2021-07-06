import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostHeader from "./PostHeader";
import NextBlog from "../../layout/NextBlog";
import ReactMarkdown from "react-markdown";

function PostContent({ post, allPosts }) {
  const imagePath = `/images/postImages/${post.slug}/${post.image}`;
  // renderers tells markdown how we want something rendered
  // now markdown no longer renders an image into an image tag but instead calls our image method,and takes in data about the image and returns our nextjs image component
  // in our markdown file, the alt text is the text between square brackets
  // image.properties.src is available between parentheses
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/postImages/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  // grab all titles from posts array
  const allPostTitles = allPosts.map((post) => post.title);

  // grab all slugs from posts array for routing
  const allPostSlugs = allPosts.map((post) => post.slug);

  // get current index of current blog page
  const index = allPostSlugs.indexOf(post.slug);

  // get the post slug of the next blog by taking the current blogs index in allPostTitles array and adding 1 (the array is already sorted in the util file)
  const nextBlogSlug = allPostSlugs[index + 1];
  // get title for next caption
  const nextBlogTitle = allPostTitles[index + 1];

  // get post slug of previous blog
  const previousBlogSlug = allPostSlugs[index - 1];
  // get title for previous caption
  const previousBlogTitle = allPostTitles[index - 1];

  // create path to pass to href in Link
  const linkPathNextBlog = `/posts/${nextBlogSlug}`;
  const linkPathPreviousBlog = `/posts/${previousBlogSlug}`;

  return (
    <article className="mb-20">
      <div className="container max-w-4xl mx-auto">
        <PostHeader title={post.title} author={post.author} date={post.date} />
        <ReactMarkdown
          className="prose prose-sm max-w-xl mx-auto"
          components={customRenderers}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <div className="flex flex-row justify-between mx-4 sm:mx-20 mt-20 space-x-10">
        <div className="w-full sm:w-1/3">
          {index - 1 >= 0 ? (
            <Link href={linkPathPreviousBlog}>
              <a className="text-sm">
                <NextBlog direction="PREVIOUS" title={previousBlogTitle} />
              </a>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="w-full sm:w-1/3">
          <Link href={linkPathNextBlog}>
            <a>
              <NextBlog direction="NEXT" title={nextBlogTitle} />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostContent;
