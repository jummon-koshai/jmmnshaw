const { Pool } = require('@neondatabase/serverless');
const Pusher = require('pusher');

exports.handler = async function(event, context) {
  const { username, message, timestamp } = JSON.parse(event.body);
  if (!username || !message || !timestamp) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid input' }) };
  }
  const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL });
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER
  });
  try {
    const { rows } = await pool.query(
      'INSERT INTO messages (username, message, timestamp) VALUES ($1, $2, $3) RETURNING *',
      [username, message, timestamp]
    );
    const savedMsg = rows[0];
    await pusher.trigger('chat-channel', 'new-message', savedMsg);
    await pool.end();
    return { statusCode: 200, body: JSON.stringify(savedMsg) };
  } catch (error) {
    await pool.end();
    console.error('Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save message' }) };
  }
};