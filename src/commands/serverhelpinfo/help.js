const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'help command', []);
  }

  async run(client, message, args) {
    const { guild } = message
    const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
    const icon = guild.iconURL()

    const embed = new discord.MessageEmbed()
    .setTitle(`Server help info for ${name}`)
    .setDescription('**MODERATION**\n``ban - bans a member``\n``kick - kicks a member``\n``purge - bulk delete 100 messages under 14 days old``\n\n**FUN**\n``rps - play rock paper scissors with bot``\n\n**INFO**\n``serverinfo - shows a list of information about the server``')
    .setThumbnail(`${icon}`)
    .setTimestamp()
    .setColor('BLUE')
    message.channel.send(embed)
  }
}