const { SendMailClient } = require("zeptomail");
const multiparty = require('multiparty');
const fs = require('fs');

const client = new SendMailClient({
  url: "https://api.zeptomail.com/",
  token: process.env.NUXT_PUBLIC_ZEPTOMAIL_API_KEY,
});

export default async function(req, res) {
  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Error parsing form data', err }));
      return;
    }

    const parsedBody = {
      first_name: fields.first_name[0],
      last_name: fields.last_name[0],
      email: fields.email[0],
      phone: fields.phone[0],
      address: fields.address[0],
      city: fields.city[0],
      postal_code: fields.postal_code[0],
      price_from: fields.price_from[0],
      price_to: fields.price_to[0],
    };

    const attachments = await Promise.all(
      Object.values(files).flat().map(file => {
        return new Promise((resolve, reject) => {
          fs.readFile(file.path, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                content: data.toString('base64'),
                filename: file.originalFilename,
                name: file.originalFilename,
                encoding: 'base64',
                mime_type: file.headers['content-type'] || 'application/octet-stream',
                disposition: 'attachment'
              });
            }
          });
        });
      })
    );

    try {
      const response = await client.sendMail({
        from: {
          address: "no-reply@jacobelectricgroup.com",
          name: "Zepto Mailer"
        },
        to: [
          {
            email_address: {
              address: 'ahnuman5@gmail.com',
              name: 'Numan Hussain'
            }
          }
        ],
        subject: "Hi Numan Hussain",
        textbody: `From ${parsedBody.first_name + ' ' + parsedBody.last_name}`,
        htmlbody: `
        <p><strong>Full Name:</strong> ${parsedBody.first_name + ' ' + parsedBody.last_name} </p>
        <p><strong>Email:</strong> ${parsedBody.email}</p>
        <p><strong>Phone Number:</strong> ${parsedBody.phone}</p>
        <p><strong>Address:</strong> ${parsedBody.address}</p>
        <p><strong>City:</strong> ${parsedBody.city}</p>
        <p><strong>Postal Code:</strong> ${parsedBody.postal_code}</p>
        `,
        attachments: attachments
      });

      res.end(JSON.stringify({ message: 'Email sent successfully', response }));
    } catch (error) {
      res.end(JSON.stringify({ message: 'Failed to send email', error }));
    }
  });
}
