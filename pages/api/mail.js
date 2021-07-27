const mail = require("@sendgrid/mail");

mail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.firstName} ${body.lastName}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "themacbellclan@gmail.com",
    from: "Blog@macbellclan.com",
    subject: "Contact Form Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  console.log(message);

  res.status(200).json({ status: "okay" });
};
