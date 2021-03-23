const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('Cl39das#', 'clem command', []);
  }

  async run(client, message, args) {
    const { guild } = message
    const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
    const icon = guild.iconURL()

    const embed = new discord.MessageEmbed()
    .setTitle(`Information about ${name}`)
    .setDescription(`**Info:**\n Clem is a Roblox MultiTool program developed by Renegade \n**Price:**\n$6\n**Release Date:**\nUnknown because ren is slow`)
    .setFooter('Also perth is a furry')
    .setThumbnail(`${icon}`)
    .setTimestamp()
    .setColor('BLUE')
    message.channel.send(embed)
  }
}