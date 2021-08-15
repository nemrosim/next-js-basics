import Link from 'next/link';
import { PostDto } from "../types";
import React from "react";

interface PostCardProps {
    post: PostDto;
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
    return (
        <div className="card m-2"
             style={{width: '18rem'}}
        >
            <img src={`https://picsum.photos/id/${post.id}/300/200`}
                 className="card-img-top"
                 alt="post-image"
            />
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {post.subTitle}
                </h6>
                <p className="card-text">
                    {post.shortText}
                </p>
                <Link href={`post/${post.id}`}>
                    <a className="card-link">
                        Show more
                    </a>
                </Link>
            </div>
        </div>
    )
}
