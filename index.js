import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Prisijungta kaip ${client.user.tag}`);
  client.user.setPresence({
    status: 'idle',
    activities: [{ name: 'Stebiu jus 👁️', type: 3 }]
  });
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!labas') {
    message.reply('Sveikas! 👋');
  }
});

client.login(process.env.DISCORD_TOKEN);
