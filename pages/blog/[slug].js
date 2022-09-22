import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Link from "next/link"
import Head from "next/head"
import styles from "../../styles/Blog.module.css"
import styles_article from "../../styles/Article.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const PostPage = ({ frontmatter: { title, date, cover_image }, slug, content }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Kenchi Organic Hair Salon | Blog</title>
            </Head>
            <div className={styles_article.main}>
                <nav className={` navbar navbar-expand-lg ${styles_article.navbar}`} >
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src="/images/kenchi-white.png" alt="kenchi" width="76" height="55" />
                            <h3 className={`${styles_article.blog_heading} ms-5 mt-0 mb-0 fw-semibold`}>Kenchi Blog</h3>
                        </a>
                        <button className={`${styles_article.toggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} className={styles_article.bars} />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mt-0 ms-auto me-0">
                                <li className={`nav-item ${styles_article.navItem}`}>
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className={`nav-item ${styles_article.navItem}`}>
                                    <a className="nav-link" href="/#about">About</a>
                                </li>
                                <li className={`nav-item ${styles_article.navItem}`}>
                                    <a className="nav-link" href="/#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-lg-8">
                            <article>
                                <header class="mb-4">
                                    <Link href='/blog'><button type="button" className={`${styles_article.back_btn} btn btn-danger mb-4`}>Go Back</button></Link>
                                    <h1 class="fw-bolder mb-1">{title}</h1>
                                    <div class="text-muted fst-italic mb-2">Posted on {date}</div>
                                </header>

                                <figure class="mb-4"><img class="img-fluid rounded"
                                    src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>

                                <section dangerouslySetInnerHTML={{ __html: marked(content) }} class="mb-5">
                                </section>
                            </article>
                        </div>

                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-header">Categories</div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <ul class="list-unstyled mb-0">
                                                <li><a href="#!" className={styles_article.blog_links}>Hair Care</a></li>
                                                <li><a href="#!" className={styles_article.blog_links}>Skin Care</a></li>
                                                <li><a href="#!" className={styles_article.blog_links}>Beauty Hacks</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6">
                                            <ul class="list-unstyled mb-0">
                                                <li><a href="#!" className={styles_article.blog_links}>Trends</a></li>
                                                <li><a href="#!" className={styles_article.blog_links}>Best Products</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="py-3 bg-dark">
                <div class="container">
                    <p class="m-0 text-center text-white">Copyright &copy; Kenchi Organics {new Date().getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

export default PostPage
