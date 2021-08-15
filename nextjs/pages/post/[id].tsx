import React, { ReactElement } from "react";
import { useRouter } from 'next/router'
import { GetServerSideProps } from "next";
import { SERVER_HOST } from "../../constants";

interface PostProps {
    post: {
        id: string;
        title: string;
    }
}

const Post: React.FC<PostProps> = ({post}) => {
    const {query} = useRouter();

    return (
        <>
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
