import db from "../../../database/connection";
const orderForm_data = require('../../../database/orderScheema')
const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env
sgMail.setApiKey(SG_API_KEY)

export default async function orderFormData(req, res) {
    try {
        await db()

        const data = new orderForm_data(req.body)
        await data.save()

        const msg = {
            to: TO_EMAIL,
            from: FROM_EMAIL,
            subject: "Kenchi Order from Website",
            html: `<p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Address1:</strong> ${data.address1}</p>
            <p><strong>Address2:</strong> ${data.address2}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>State:</strong> ${data.state}</p>
            <p><strong>Zip:</strong> ${data.zip}</p>
            <p><strong>Order:</strong> ${req.body.lProducts}</p>`
        }

        await sgMail.send(msg)
        res.status(200).json({ message: "Email Sent" })
    } catch (e) {
        console.log(e)
    }
}
