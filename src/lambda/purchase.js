require('dotenv').config();
const sgMail = require('@sendgrid/mail');
exports.handler = async (event, context, callback) => {

    if (event.httpMethod !== 'POST') {
        return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
    }

    try {

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'filanderuclez@gmail.com',
            from: 'filanderuclez@gmail.com',
            subject: 'Rosalila Coffee Purchase Yey! ☕',
            text: JSON.stringify(event.body),
        };

        const result = await sgMail.send(msg);
        console.log("RESULT", result)

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({ result }),
        })

    } catch (err) {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: `Error: ${err.message}`,
            }),
        });
    }
}