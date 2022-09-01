import Link from "next/link"
import Head from 'next/head'
import { useState } from "react"
import axios from "axios"
import style from "../styles/Home.module.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    const contactPayload = {
      name,
      email,
      phone,
      service,
      message
    }
    try {
      await axios({
        url: "/api/contactForm",
        method: "POST",
        data: contactPayload
      })

    } catch (err) {
      console.log("Error: ", err)
    }

  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kenchi Organic Hair Salon</title>
        <meta name="description" content="Kenchi is a Hair salon for women and also a certified Organic beauty products seller. A salon where you can get your desired Haircuts without even shortening your Hair length." />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kenchi.com" />
        <meta property="og:image" content="https://kenchi/images/card-image.png" />
        <meta property="og:title" content="Kenchi Organic's Hair Salon." />
        <meta property="og:description" content="Customize your Hair style with Kenchi and try our organic products Now!" />
        <meta name="keywords" content="kenchi, kenchi organic, kenchi organics, hair, women hair salon near me, woman hair salon near me,  hair salon, hair growth, hair oil, hair growth oil, hair growth products, hair salon near me, best hair salon, hair salons in karachi, organic products, whitening cream, no makeup cream, beauty creams, best beauty creams, night cream, tint, cherry berry, moisturizer, hairstyles, hair color, hair dye, hair cutting, 2022, trending hairstyles,trending hair color, " />
        <link rel="canonical" href="https://Kenchi.com/" />
      </Head>
      <header className={style.header}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link href="#">
              <a className="navbar-brand"><img src="/images/Kenchi-logo.png" alt="kenchi" width="76" height="55" /></a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/"><a className="nav-link active" aria-current="page">Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="#about"><a className="nav-link">About</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="/products"><a className="nav-link">Products</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="#contact"><a className="nav-link">Contact</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="/checkout"><a className="nav-link" id="cart-li">Cart</a></Link>
                </li>
              </ul>
              <div className="right-nav">
                <ul className="navbar-nav">
                  <Link target="_blank" href="./checkout"><FontAwesomeIcon id="cart_icon" className="fa-solid fa-cart-shopping" icon={faCartShopping} /></Link>
                  <li>
                    <Link href="#contact"><button type="button" className="btn px-4 py-2">Book Now</button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <section className={`${style.bg_section} bg_section`}>
          <span className={`${style.bg_border} bg_border`}></span>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                delay: .2
              }
            }
          }} className={`${style.bg_headings} bg_headings`}>
            <h3>Have a great hair day with</h3>
            <h1>Kenchi Organic Women's Hair Salon</h1>
            <a href="#contact"><button id="contact_btn" type="button" className="btn py-2 px-3">Book Now</button></a>
          </motion.div>
          <span className={`${style.bg_border} bg_border`}></span>
        </section>
      </header>
      <main>
        <section className="about" id="about">
          <div className="section-about-heading">
            <h1>About Us</h1>
            <div className="sec-headings-border"></div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                delay: .15
              }
            }
          }} className="about-content">
            <div id="about-left-side" className="left-side">
              <h2>About our Experience,</h2>
              <div className="content-heading-border"></div>
              <p>Kenchi is a Hair salon for women and also a certified Organic beauty products seller. We first started as a hair salon in 2012. A salon where you can get your desired Haircuts without even shortening your Hairlength. And then we gradually started expanding our business by producing Beauty Organic products such as Whitening Creams, Hair Oil, Moisturizer Liptint etc. Our first ever Organic product was our Kenchi Organic Hair Oil which boosted our business in Organic fields.
                <br />
                <br />
                People choose us for our reasonable prices and beauty resulting products. We also care for your Beauty and Hair!
              </p>
              <Link href="https://www.facebook.com/kenchi321" target="_blank"><button type="button"
                className="btn">Facebook</button></Link>
            </div>
            <span className="about-splitter"></span>
            <div id="about-right-side" className="right-side">
              <img src="/images/about.png" alt="about image" />
            </div>
          </motion.div>
        </section>
        <section className="hairoil">
          <div className="hairoil-overlay">
            <div className="section-hair-heading">
              <h1>Hair Product</h1>
              <div className="sec-headings-border"></div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: .15
                }
              }
            }} className="hairoil-content">
              <div id="hairoil-left-side" className="left-side">
                <img src="/images/product-pics/kenchiHairoil.jpg" alt="hairoil image" />
              </div>
              <div id="hairoil-right-side" className="right-side">
                <h2>Check out our Hair Oil</h2>
                <div className="content-heading-border"></div>
                <p>Hair oiling is the practice of pouring oil onto hair and massaging it into the scalp to increase moisture, luster, and shine. Hair oiling may soften the hair and provide vitamins and minerals that get stripped from frequent washing.
                  <br />
                  <br />
                  Kenchi Organic Hair Oil is available with rich coconut and almond mixture of hair oil products with soothing male and feminine scent. This Hair oil nourishes your hair and maintains style at the same time. Positioned on more then 4 mixtures of hair oil and nutrients rich herbs results in shining and strong hair.
                </p>
                <Link href="/products"><button type="button" id="hairoil-btn" className="btn">Try our beauty products</button></Link>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="spacing"></div>
        <section className="cream">
          <div className="cream-overlay">
            <div className="section-cream-heading">
              <h1>Face Product</h1>
              <div className="sec-headings-border"></div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1
              }
            }} className="cream-content">
              <div id="cream-right-side" className="right-side">
                <img src="/images/product-pics/togetherCream.jpg" alt="cream image" />
              </div>
              <div id="cream-left-side" className="left-side">
                <h2>Herbal Skincare Product</h2>
                <div className="content-heading-border"></div>
                <p>Have you ever gone to a store and searched for skin care products which prevent wrinkles and enhance your looks 24/7 ? Well I am too young to not even think about getting wrinkles. The solution to your old looking face is our Kenchi Organic Cream COMBO!
                  <br />
                  <br />
                  Our Kenchi Whitening Cream is used as a night cream made up of special nutrient rich herbs which will even out your tone and prevent acne. With that our No-makeup cream is used as a foundation to give you that natural beauty look without makeup.
                </p>
                <Link href="/products"><button type="button" id="cream-btn" className="btn">Try our beauty products</button></Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="section-contact-heading">
            <h1>Make an Appointment</h1>
            <div className="sec-headings-border"></div>
          </div>
          <div className="contact-form-main">
            <div className="contact-form">
              <div className="contact-left-side">
                <h2>Contact Form</h2>
                <form action="/" method="post">
                  <div className="input-box" id="input-box1">
                    <input type="text" required name="name" id="name" placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} />
                    <input type="email" required name="email" id="name" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                  </div>
                  <div className="input-box" id="input-box2">
                    <input type="text" required name="phone" id="name" placeholder="Phone #" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    <input type="text" required name="service" id="name" placeholder="Service" value={service} onChange={({ target }) => setService(target.value)} />
                  </div>
                  <div className="text-box" id="input-box3">
                    <textarea name="message" required id="message" cols="30" rows="10"
                      placeholder="Message us" value={message} onChange={({ target }) => setMessage(target.value)} ></textarea>
                  </div>
                  <button id="c-submit" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
              </div>
              <div className="contact-right-side">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7355052875027!2d67.06696231498584!3d24.907002049524625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb05ae99dd7%3A0xa8650e8dcd3680cf!2sBaloch%20goth%20Gulshan-e-Iqbal!5e0!3m2!1sen!2s!4v1653242081475!5m2!1sen!2s"
                  width="100%" height="100%" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
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