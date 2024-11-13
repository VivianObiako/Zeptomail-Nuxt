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
        textbody: `From ${parsedBody.first_name + ' ' + parsedBody.last_name}`,
        htmlbody: `
        <p><strong>Full Name:</strong> ${parsedBody.first_name + ' ' + parsedBody.last_name} </p>
        <p><strong>Email:</strong> ${parsedBody.email}</p>
        <p><strong>Phone Number:</strong> ${parsedBody.phone}</p>
        <p><strong>City:</strong> ${parsedBody.city}</p>
        <p><strong>Postal Code:</strong> ${parsedBody.postal_code}</p>
        <p><strong>Help Request:</strong> ${parsedBody.help}</p>
        <p><strong>Contact Method:</strong> ${parsedBody.contact_method}</p>
        <p><strong>Hear About Us:</strong> ${parsedBody.hear_about_us}</p>
        `
      });

      res.end(JSON.stringify({ message: 'Email sent successfully' }));
    } catch (error) {
      console.log('Error sending email', JSON.stringify(error));
      res.end(JSON.stringify({ message: error }));
    }
  });
}
