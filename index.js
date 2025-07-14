const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Friend-SmP_S1.aternos.me',
    port: 59056,
    username: 'AFK_Bot_01', // তোমার পছন্দ মত নাম দিতে পারো
  });

  bot.on('spawn', () => {
    console.log('✅ Bot joined the server!');
  });

  bot.on('end', () => {
    console.log('🔁 Bot disconnected, trying to reconnect in 5s...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('❌ Error:', err);
  });
}

createBot();
