const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('ban', 'ban members', []);
  }

  async run(client, message, args) {
    const { guild } = message
    const {member, mentions } = message
    const tag = `<@${member.id}>`
    const icon = guild.iconURL()

    if (
        member.hasPermission('BAN_MEMBERS')
      ) {
        const target = mentions.users.first()
        if (target) {
          const targetMember = message.guild.members.cache.get(target.id)
          targetMember.ban()
          let banReason = args.join(" ").slice(22);
          if(!banReason){
            banReason = "none"
          }
          const embed = new discord.MessageEmbed()
          .setAuthor('DevX')
          .setThumbnail('https://cdn.discordapp.com/icons/771897032747122758/c44ef052972ee02444d6a171c6329382.webp')
          .setDescription(`**Success:**\n ${targetMember} has been banned\n**Reason:**\n${banReason}`)
          .setColor("BLUE")
          .setTimestamp()
          message.channel.send(embed)
        } else {
            const embed = new discord.MessageEmbed()
            .setAuthor('DevX')
            .setThumbnail('https://cdn.discordapp.com/icons/771897032747122758/c44ef052972ee02444d6a171c6329382.webp')
            .setDescription(`**Error:**\nMention someone to ban`)
            .setColor("BLUE")
            .setTimestamp()
            message.channel.send(embed)
        }
      } else {
        const embed = new discord.MessageEmbed()
        .setAuthor('DevX')
        .setThumbnail('https://cdn.discordapp.com/icons/771897032747122758/c44ef052972ee02444d6a171c6329382.webp')
        .setDescription(`**Error:**\nInsufficient permissions`)
        .setColor("BLUE")
        .setTimestamp()
        message.channel.send(embed)
      }
  }
}