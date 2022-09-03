import db from "../../database/connection";
const contactForm_data = require('../../database/CformScheema')
const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env
sgMail.setApiKey(SG_API_KEY)

export default async function formData(req, res) {
    try {
        await db()

        const data = new contactForm_data(req.body)
        await data.save()

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

        await sgMail.send(msg)
        res.status(200).json({ message: "Email Sent" })
    } catch (e) {
        console.log(e)
    }
}
