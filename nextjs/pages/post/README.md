# Static generation

```tsx
/**
 * This function gets called at BUILD time
 * You can check more info about it here:
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths() {
    const res = await fetch(`${SERVER_HOST}/posts`)
    const posts: Array<{ id: number }> = await res.json();

    const paths = posts.map((post) => ({
        params: {id: `${post.id}`},
    }))

    /*
        We'll pre-render only these paths at build time.
        { fallback: false } means other routes should 404.
     */
    return {paths, fallback: false}
}

/**
 * This also gets called at build time
 * @param params
 */
export async function getStaticProps({params}: any) {

    /*
        "params" contains the post `id`.
        If the route is like /posts/1, then params.id is 1
     */
    const response = await fetch(`${SERVER_HOST}/post/${params.id}`);
    const post = await response.json();

    return {props: {post}}
}
```

# Server side rendering

```tsx
/**
 * This gets called on every request
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
        const res = await fetch(`${SERVER_HOST}/post/${context.params?.id}`);

        let post;
        try {
            post = await res.json();
        } catch (e) {
            console.log('Error', e);
        }

        if (!post) {
            return {
                notFound: true,
            }
        }

        return {props: {post}}
    }
```
