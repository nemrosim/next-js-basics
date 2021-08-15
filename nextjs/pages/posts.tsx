import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { SERVER_HOST } from "../constants";
import { PostDto } from "../types";
import { PostCard } from "../components";

interface PostsProps {
    posts: Array<PostDto>;
}

const Posts: React.FC<PostsProps> = ({posts}) => {
    return (
        <>
            <Head>
                <title>NextJS. Posts page</title>
                <meta
                    name="description"
                    content="Posts page description"
                />
            </Head>
            <h1>Posts page</h1>
            <div className="container">
                <div className="row">
                    {posts.map(post => (
                        <div
                            key={post.id}
                            className="col"
                        >
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
            </div>
        </>);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${SERVER_HOST}/posts`);
    const posts = await res.json();

    return {props: {posts}}
}

export default Posts;
