const nodemailer = require("nodemailer");

const toAdmin = async (id, name, email, number, description, emailAdmin, passwordAdmin) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: emailAdmin,
      pass: passwordAdmin
    }
  });
  try {
    let info = await transporter.sendMail({
      from: emailAdmin,
      to: emailAdmin,
      subject: `Nueva cita`,
      html: `<h1>Cita # ${id}</h1><p>Recibió una nueva solicitud de cita. <br/><br/>Los detalles son los siguientes:<br/><br/><strong>Nombre:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Número de contacto:</strong> ${number}<br/><strong>Descripción:</strong> ${description}<br/></p>`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.log(err);
  }
};
const toClient = async (date, name, emailAdmin, passwordAdmin, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: emailAdmin,
      pass: passwordAdmin
    }
  });
  try {
    let info = await transporter.sendMail({
      from: emailAdmin,
      to: email,
      subject: `Consultoria Contable Tributario Bermúdez Sac`,
      html: `<h1>Confirmación de la cita</h1><p>Estimado ${name}, ha solicitado una cita, por lo que le informamos con entusiasmo que su cita está confirmada y la fecha de la cita es la siguiente: <br/> <br/>
            <strong> Fecha:  ${date} </strong>
            <br/> <br/> <strong>Contacto:</strong> <br/> (51) 1-562-0663 <br/>
            (51) 1-562-0657 <br/> 986 617 069 <br/>
            991 696 527 <br/> <br/> <strong>Dirección:</strong> <br/> Av Elmer Faucett 303 - Oficina 203 - San Miguel-Lima. <br/> <br/>
            Saludos,<br/>
            <strong> Consultoria Contable<br/> Tributario Bermúdez Sac
            </strong></p>`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.log("Not Sent");
  }
};
module.exports = { toAdmin, toClient };
