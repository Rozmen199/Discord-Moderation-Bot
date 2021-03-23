const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('serverinfo', 'serverinfo for server', []);
  }

  async run(client, message, args) {
    const { guild } = message
    const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
    const icon = guild.iconURL()

    const embed = new discord.MessageEmbed()
    .setTitle(`Server info for ${name}`)
    .addField(`Region`, `${region}`)
    .addField(`Member Count`, `${memberCount}`)
    .addField(`Owner`, `${owner}`)
    .addField(`Server Creation Date`, `${createdAt}`)
    .setThumbnail(`${icon}`)
    .setColor('BLUE')
    message.channel.send(embed)
  }
}