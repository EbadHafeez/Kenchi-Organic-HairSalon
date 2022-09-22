import Head from "next/head"
import styles from "../styles/Blog.module.css"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortByDate } from "../utils"

const Blog = ({ posts }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Kenchi Organic Hair Salon | Blog</title>
            </Head>
            <nav className={` navbar navbar-expand-lg ${styles.navbar}`} >
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src="/images/Kenchi-logo.png" alt="kenchi" width="76" height="55" />
                        <h3 className={`${styles.blog_heading} ms-5 mb-0 fw-semibold`}>Kenchi Blog</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" href="/#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className={styles.main}>
                <header className={`${styles.header} py-5 bg-light border-bottom mb-4`}>
                    <div class="container">
                        <div class="text-center my-5">
                            <h1 class="fw-bolder">Welcome To Our Blog Page!</h1>
                            <p class="lead mb-0">All types of blogs regarding beauty.</p>
                        </div>
                    </div>
                </header>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                {posts.map((post, index) => (
                                    <div class="col-lg-6" key={index}>
                                        <div className={`${styles.card} card mb-4`}>
                                            <a href="#!"><img class="card-img-top"
                                                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                            <div class="card-body">
                                                <div class="small text-muted">{post.frontmatter.date}</div>
                                                <h2 class="card-title h4">{post.frontmatter.title}</h2>
                                                <p class="card-text">{post.frontmatter.excerpt}</p>
                                                <Link href={`/blog/${post.slug}`}><a className={`${styles.button} btn btn-primary mt-2`}>Read more →</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <nav aria-label="Pagination">
                                <hr class="my-0" />
                                <ul className={`${styles.pagination} pagination justify-content-center my-4`} >
                                    <li class="page-item"><a class="page-link" href="#" tabindex="-1">Back to Top</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-4">
                            <div className={`${styles.card} card mb-4`}>
                                <div class="card-header">Categories</div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <ul class="list-unstyled mb-0">
                                                <li><a href="#!" className={styles.blog_links}>Hair Care</a></li>
                                                <li><a href="#!" className={styles.blog_links}>Skin Care</a></li>
                                                <li><a href="#!" className={styles.blog_links}>Beauty Hacks</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6">
                                            <ul class="list-unstyled mb-0">
                                                <li><a href="#!" className={styles.blog_links}>Trends</a></li>
                                                <li><a href="#!" className={styles.blog_links}>Best Products</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="col-md-4 d-flex align-items-center" id="copyright">
                            <Link href="/">
                                <a className="text-decoration-none ">
                                    <img src="/images/kenchi-white.png" width="50px" alt="kenchi" />
                                </a>
                            </Link>
                            <span className="ms-3 text-white">© {new Date().getFullYear()} Kenchi Organic's</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/kenchi321/"
                                target="_blank"><img src="/icons/facebook.png" width="24px" alt="facebook" /></a>
                            </li>
                            <li className="ms-3"><a className="text-muted"
                                href="https://instagram.com/kenchi_by_namrah?utm_medium=copy_link" target="_blank"><img
                                    src="/icons/instagram.png" width="24px" alt="instagram" /></a></li>
                            <li className="ms-3"><a className="text-muted" href="https://wa.me/message/OQZ3YX65G3RIN1"
                                target="_blank"><img src="/icons/whatsapp.png" width="24px" alt="whatsapp" /></a></li>
                            <li className="ms-3"><a className="text-muted" href="mailto:namrahfayyaz0@gmail.com" target="_blank"><img
                                src="/icons/email.png" width="24px" alt="email" /></a></li>
                        </ul>
                    </footer>
                </div>
            </footer>
        </>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'))

    // Get Slug

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)
        return {
            slug,
            frontmatter,
        }
    })
    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}

export default Blog