import React from "react";
// nextjs component
import Head from "next/head";
// components
import PostContent from "../../components/posts/details/PostContent";
// utils
import {
  getPostData,
  getPostsFiles,
  getAllPosts,
} from "../../utils/posts-utils";

function PostDetails(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} allPosts={props.allPosts} />;
    </>
  );
}

// get single post per given slug
export function getStaticProps(context) {
  const { params } = context;

  const { slug } = params;

  // gives us the data for the current slug file and reads it
  const postData = getPostData(slug);

  // gets all post data to be used for the next/previous feature
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts: allPosts,
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetails;
