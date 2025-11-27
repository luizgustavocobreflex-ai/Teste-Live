import { Client, GatewayIntentBits, Partials } from 'discord.js';
import fetch from 'node-fetch';

const token = process.env.DISCORD_BOT_TOKEN;
const apiBase = process.env.API_BASE_URL || 'http://localhost:8080';

if (!token) {
  console.error('DISCORD_BOT_TOKEN não informado.');
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  partials: [Partials.Channel]
});

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'status') {
    try {
      const res = await fetch(`${apiBase}/api/health`);
      const json = await res.json();
      await interaction.reply(`Status do backend: **${json.status}**`);
    } catch (e) {
      await interaction.reply('Não foi possível consultar o backend.');
    }
  }
});

// TODO: registrar comandos de slash via REST (não incluso aqui)
client.login(token);
