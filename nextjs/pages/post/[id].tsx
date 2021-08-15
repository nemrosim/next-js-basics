import React from "react";
import { useRouter } from 'next/router'
import { GetServerSideProps } from "next";
import { SERVER_HOST } from "../../constants";
import Head from "next/head";
import { PostDto } from "../../types";

interface PostProps {
    post: PostDto
}

const Post: React.FC<PostProps> = ({post}) => {
    const {query} = useRouter();

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.subTitle}/>
            </Head>
            <p>Post: {query.id}</p>
            <h2>{post.title}</h2>
        </>
    );
}

/**
 * This gets called on every request
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${SERVER_HOST}/post/${context.params?.id}`);

    let post;
    try {
        post = await res.json();
    } catch (e) {
        // console.log('Error', e);
    }

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {props: {post}}
}

export default Post
