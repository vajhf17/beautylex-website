import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post("/contact", async (req, res) => {

  const { nombre, email, mensaje } = req.body

  try {

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h2>Nuevo contacto desde BeautyLex</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    res.status(200).json({
      success: true,
      message: "Mensaje enviado",
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Error enviando mensaje",
    })
  }
})

app.listen(5000, () => {
  console.log("Servidor funcionando en puerto 5000")
})