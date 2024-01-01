import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if(req.method !== "POST"){
        return resizeBy.status(405).end()
    }
    const {name, email, subject, message} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user:"dpkgaikwad47@gmail.com",
                pass:"Deepak@123"
            }
        })
        const mailOptions = {
            from: email,
            to: 'dpkgaikwad47@gmail.com',  // Replace with your email
            subject: subject,
            text: `From: ${name}\nEmail: ${email}\n\n${message}`,
          };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.log(error);
    }
}