import Link from 'next/link';
import { PostDto } from "../types";
import React from "react";
import Head from "next/head";

interface PostCardProps {
    post: PostDto;
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
    return (
        <>

            <div className="card m-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.subTitle}</h6>
                    <p className="card-text">{post.shortText}</p>
                    <Link href={`post/${post.id}`}>
                        <a className="card-link">Show more</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
