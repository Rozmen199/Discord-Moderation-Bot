const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('rps', 'rps lol', []);
  }

  async run(client, message, args) {
    const { guild } = message
    const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
    const icon = guild.iconURL()

    const options = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    const option = options[Math.floor(Math.random() * options.length)]
    const optionss = options[Math.floor(Math.random() * options.length)]
    const embed = new discord.MessageEmbed()
          .setAuthor(`${name}`)
          .setDescription(`**Rock, Paper, Scissors**\n\nYou got ${option}\nI got ${optionss}`)
          .setColor("BLUE")
          .setTimestamp()
          message.channel.send(embed)

  }
}