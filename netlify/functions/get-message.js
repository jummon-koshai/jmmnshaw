const { Pool } = require('@neondatabase/serverless');

exports.handler = async function(event, context) {
  const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL });
  try {
    const { rows } = await pool.query('SELECT * FROM messages ORDER BY timestamp ASC');
    await pool.end();
    return { statusCode: 200, body: JSON.stringify(rows) };
  } catch (error) {
    await pool.end();
    console.error('Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch messages' }) };
  }
};