import Head from "next/head"
import styles from "../styles/Product.module.css"
import style from "../styles/Home.module.css"
import { server } from "../config"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = ({ products }) => {
    const [localStorageProducts, setLocalStorageProducts] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('products')) {
            setLocalStorageProducts(JSON.parse(localStorage.getItem('products')))
        }
    }, [])

    const sendToLocalStorage = (e) => {
        const value = e.target.id
        setLocalStorageProducts([...localStorageProducts, value])
    }

    const isRendered = useRef(false)
    useEffect(() => {
        if (isRendered.current === true) {
            let a = JSON.stringify(localStorageProducts)
            localStorage.setItem('products', a)
        }
        return () => {
            isRendered.current = true
        }
    }, [localStorageProducts])

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Kenchi Organic Hair Salon | Products</title>
                <meta name="description" content="Kenchi Hair salon has it's own organic products which are widely used in the coutry. Order you organic product Now!" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kenchi.com/products" />
                <meta property="og:image" content="https://kenchi/images/card-image.png" />
                <meta property="og:title" content="Want to use the best organic products out there?." />
                <meta property="og:description" content="Kenchi Organic has it's own organic products which are widely used in the coutry. Order you organic product Now!" />
                <meta name="keywords" content="kenchi, kenchi organic, kenchi organics, hair, women hair salon near me, woman hair salon near me,  hair salon, hair growth, hair oil, hair growth oil, hair growth products, hair salon near me, best hair salon, hair salons in karachi, organic products, whitening cream, no makeup cream, beauty creams, best beauty creams, night cream, tint, cherry berry, moisturizer, hairstyles, hair color, hair dye, hair cutting, 2022, trending hairstyles,trending hair color, " />
            </Head>
            <header className={styles.header}>
                <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="/images/Kenchi-logo.png" alt="kenchi" width="76" height="55" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="cart-li" href="/checkout">Cart</a>
                                </li>
                            </ul>
                            <div className="right-nav">
                                <ul className="navbar-nav">
                                    <a target="_blank" href="/checkout"><FontAwesomeIcon id='cart_icon' className="fa-solid fa-cart-shopping" icon={faCartShopping}></FontAwesomeIcon></a>
                                    <li>
                                        <a href="/#contact"><button type="button" className="btn px-4 py-2">Book Now</button></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className={`${styles.bg_section} bg_section`}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                        }
                    }} className={`${style.bg_headings} bg_headings`}>
                        <h1>Beauty Products for you</h1>
                    </motion.div>
                </section>
            </header>
            <motion.main initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: .15
                    }
                }
            }}>
                <div className="container-fluid d-flex flex-wrap justify-content-center">
                    {products.map((product) => (
                        <div key={product.id} className={`${styles.card} card m-4`}>
                            <img className="card-img-top" alt="product image" src={product.img} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.name}
                                </h5>
                                <p className="card-text">
                                    {product.about}
                                </p>
                                <a href="#" id={product.id} onClick={sendToLocalStorage} className={`${styles.btn_add} btn mt-2`}>Add to Cart</a>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.main>
            <footer>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="col-md-4 d-flex align-items-center" id="copyright">
                            <a href="/" className="text-decoration-none ">
                                <img src="/images/kenchi-white.png" width="50px" alt="kenchi" />
                            </a>
                            <span className="ms-3 text-white">© 2022 Kenchi Organic's</span>
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

export const getServerSideProps = async () => {
    const res = await fetch(`${server}/api/products/products`)
    const products = await res.json()
    return {
        props: {
            products,
        },
    }
}

export default Product