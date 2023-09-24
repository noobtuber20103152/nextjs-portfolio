import nodemailer from "nodemailer";
// password="businessujjawal100"
// SMTP_PASSWORD = "yknhemcsgutjdlka"
// SMTP_USER="jobsujjawal100@gmail.com"
export default async (req, res) => {
    // console.log(req.body)
    const { name, email, message } = req.body;
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: "jobsujjawal100@gmail.com",
            pass: "yknhemcsgutjdlka"
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "jobsujjawal100@gmail.com",
            subject: `${name} Message You`,
            text: message,
            html: `<p>You have contact form submission from portfolio</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
        });
        // res.send({status:200, message:'Hello'})
    } catch (error) {
        console.log(error.message)
        return res.send({ status: 500, error: error.message });
    }
    return res.send({ status: 200, error: "" });
};