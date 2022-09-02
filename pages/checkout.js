import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Checkout.module.css'
import axios from "axios"
import { server } from '../config'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrashCan, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const Checkout = ({ products }) => {
    const [lProducts, setLProducts] = useState()
    const [matchedProducts, setmatchedProducts] = useState([])
    const [sum, setSum] = useState(0)
    const router = useRouter()

    // Form States
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")

    const orderButton = async (e) => {
        if (lProducts === null || lProducts.length == 0) {
            console.log("Cart is empty")
        } else {
            localStorage.removeItem('products')
            const orderPayload = {
                name,
                phone,
                email,
                address1,
                address2,
                city,
                state,
                zip,
                lProducts
            }

            try {
                await axios({
                    url: "/api/orderForm",
                    method: "POST",
                    data: orderPayload
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    async function deleteProduct(e) {
        const products = JSON.parse(localStorage.getItem('products'))
        const index = products.indexOf(e)
        products.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(products))
        router.reload()
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const st = localStorage.getItem("products")
            setLProducts(JSON.parse(st))
        }

    }, [])

    useEffect(() => {
        if (lProducts) {
            const a = products.filter(el => lProducts.includes(el.id))
            setmatchedProducts(a)
        }
    }, [lProducts])

    useEffect(() => {
        const pSum = matchedProducts.map(e => e.price).reduce((prev, cur) => prev + cur, 0)
        setSum(pSum)
    })


    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Kenchi Organic | Checkout</title>
            </Head>
            <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/images/Kenchi-logo.png" alt="kecnhi" width="76" height="55" />
                    </a>
                    <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" id="navlist">
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" href="./products">Products</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" href="/#contact">Contact</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className="nav-link" id="cart-li" href="./checkout">Cart</a>
                            </li>
                        </ul>
                        <div className="right-nav">
                            <ul className="navbar-nav">
                                <a target="_blank" href="./checkout"><FontAwesomeIcon id='cart_icon' className={`${styles.i} fa-solid fa-cart-shopping`} icon={faCartShopping}></FontAwesomeIcon></a>
                                <li>
                                    <a href="#contact"><button type="button" className="btn px-4 py-2">Book Now</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <main className={`${styles.main} pt-4`}>
                <div className={`${styles.container} container wow fadeIn`}>
                    <h2 className="h2 text-center">Checkout form</h2>
                    <div className={styles.borders}>
                        <div className={styles.sec_headings_border}></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <form className="card-body" action="/">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="md-form ">
                                                <input type="text" value={name} onChange={({ target }) => setName(target.value)} required name="name" id="firstName" className="form-control" />
                                                <label htmlFor="firstName" className="">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="md-form">
                                                <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)} required name="phone" id="phone" className="form-control" />
                                                <label htmlFor="phone" className="">Phone no#</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="md-form mb-4">
                                        <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} id="email" name="email" className="form-control"
                                            placeholder="youremail@example.com" required />
                                        <label htmlFor="email" className="">Email</label>
                                    </div>
                                    <div className="md-form mb-4">
                                        <input type="text" value={address1} onChange={({ target }) => setAddress1(target.value)} required id="address" name="address1" className="form-control"
                                            placeholder="1234 Main St" />
                                        <label htmlFor="address" className="">Address</label>
                                    </div>
                                    <div className="md-form mb-4">
                                        <input type="text" value={address2} onChange={({ target }) => setAddress2(target.value)} id="address-2" name="address2" className="form-control"
                                            placeholder="Apartment or House" />
                                        <label htmlFor="address-2" className="">Address 2 (optional)</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 mb-4">
                                            <label htmlFor="country">City</label>
                                            <input type="text" value={city} onChange={({ target }) => setCity(target.value)} id="address" required name="city" className="form-control"
                                                placeholder="Karachi" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4">
                                            <label htmlFor="state">State</label>
                                            <select required value={state} onChange={({ target }) => setState(target.value)} name="state" className="custom-select d-block w-100" id="state">
                                                <option value="">Choose...</option>
                                                <option value="sindh">Sindh</option>
                                                <option value="punjab">Punjab</option>
                                                <option value="balochistan">Balochistan</option>
                                                <option value="kpk">KPK</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" value={zip} onChange={({ target }) => setZip(target.value)} name="zip" className="form-control" id="zip" placeholder="" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-block my-3">
                                        <div className="custom-control custom-radio">
                                            <input id="paypl" type="radio" readOnly className="custom-control-input" checked required />
                                            <label className="custom-control-label" htmlFor="paypl">Cash on delivery</label>
                                        </div>
                                    </div>
                                    <a href="/orderPlaced"><button onClick={orderButton} type="submit" className={`${styles.btn} btn btn-lg`}>Place
                                        Order</button></a>
                                </form>

                            </div>


                        </div>
                        <div className="col-md-4 mb-4">


                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className={`${styles.qMsg} text-muted`}>1 unit per product</span>
                            </h4>


                            <ul className="list-group mb-3 z-depth-1">
                                {matchedProducts.map((e) => (
                                    <li li className="list-group-item d-flex justify-content-between lh-condensed" key={e.id}>
                                        <div>
                                            <h6 className="my-0">{e.name}</h6>
                                            <small className="text-muted">{e.type}</small>
                                        </div>
                                        <FontAwesomeIcon onClick={() => deleteProduct(e.id)} className={styles.deleteIcon} icon={faTrashCan} />
                                        <span className={`${styles.text_muted} text-muted`}>{e.price}rs</span>
                                    </li>
                                ))}
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (PKR)</span>
                                    <span>{sum}rs</span>
                                </li>
                            </ul>
                            <a href="/products" className={styles.back_link}>
                                <p>Back to Shopping <FontAwesomeIcon className="fa-solid fa-right-long" icon={faRightLong} ></FontAwesomeIcon></p>
                            </a>

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

export const getServerSideProps = async () => {
    const res = await fetch(`${server}/api/products`)
    const products = await res.json()
    return {
        props: {
            products,
        },
    }
}

export default Checkout