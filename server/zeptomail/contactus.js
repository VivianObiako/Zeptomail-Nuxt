const { SendMailClient } = require("zeptomail");

const client = new SendMailClient({
  url: "https://api.zeptomail.com/",
  token: process.env.NUXT_PUBLIC_ZEPTOMAIL_API_KEY
});

export default async function(req, res, next) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const parsedBody = JSON.parse(body);

    try {
      const response = await client.sendMail({
        from: {
          address: "no-reply@jacobelectricgroup.com",
          name: "Zepto Mailer"
        },
        to: [
          {
            email_address: {
              address: "ahnuman5@gmail.com",
              name: "Numan Hussain"
            }
          }
        ],
        subject: "Hi Numan Hussain",
        textbody: `${parsedBody.name}`,
        htmlbody: `
        <p><strong>Full Name:</strong> ${parsedBody.name} </p>
        <p><strong>Email:</strong> ${parsedBody.email}</p>
        <p><strong>Phone Number:</strong> ${parsedBody.phone}</p>
        <p><strong>Address:</strong> ${parsedBody.address}</p>
        <p><strong>Help Request:</strong> ${parsedBody.help}</p>
        `
      });

      res.end(JSON.stringify({ message: 'Email sent successfully' }));
    } catch (error) {
      console.log('Error sending email', JSON.stringify(error));
      res.end(JSON.stringify({ message: error }));
    }
  });
}
