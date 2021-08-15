import type { AppProps } from 'next/app'
import Link from 'next/link';
import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <nav className="nav">
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
                <Link href="/posts">
                    <a className="nav-link">Posts</a>
                </Link>
                <Link href="/about">
                    <a className="nav-link">About</a>
                </Link>
            </nav>
            <div className="container">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp
