import type { AppProps } from 'next/app'
import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <nav className="nav">
                <a className="nav-link" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a
                    className="nav-link disabled"
                    href="#"
                    aria-disabled="true">Disabled</a>
            </nav>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
