import db from "../../database/connection";
const contactForm_data = require('../../database/CformScheema')
const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env
sgMail.setApiKey(SG_API_KEY)

export default function formData(req, res) {


    db().then(() => {
        console.log("DB Connected")
    }).catch(err => console.error(err))

    const data = new contactForm_data(req.body)
    data.save().then(() => {
        console.log("Form Submitted")
    }).catch(err => {
        res.status(400).json("Error:" + err)
    })

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: "Query from Webite",
        html: `<p> <strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong> ${data.message}</p>`
    }

    sgMail.send(msg).then(() => {
        console.log("Email Sent!")
    }).catch((e) => {
        console.log(e)
    })
    res.status(200).json({ message: "Email Sent" })
}
