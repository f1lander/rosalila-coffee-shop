
exports.handler = (event, context, callback) => {
    // This will allow us to freeze open connections to a database
    // context.callbackWaitsForEmptyEventLoop = false;

    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
    }

    console.log(event, context);
}