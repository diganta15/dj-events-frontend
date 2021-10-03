import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from '@/styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
export default function Layout({title, keywords, description, children}) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title:'DJ Events | Find the hottest parties',
    description:'Find the latest DJ and other musical events',
    keywords:'music, dj, edm',
    

}
