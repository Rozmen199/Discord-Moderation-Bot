const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('kick', 'kick members', []);
  }

  async run(client, message, args) {
    const { guild } = message
    const {member, mentions } = message
    const tag = `<@${member.id}>`
    const icon = guild.iconURL()

    if (
        member.hasPermission('KICK_MEMBERS')
      ) {
        const target = mentions.users.first()
        let banReason = args.join(" ").slice(22);
          if(!banReason){
            banReason = "none"
          }
          const { guild } = message
          const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
          const icon = guild.iconURL()



        if (target) {
          const targetMember = message.guild.members.cache.get(target.id)
          targetMember.kick()
          const embed = new discord.MessageEmbed()
          .setAuthor(`${name}`)
          .setThumbnail(`${icon}`)
          .setDescription(`**Success:**\n ${targetMember} has been kicked\n**Reason:**\n${banReason}`)
          .setColor("BLUE")
          .setTimestamp()
          message.channel.send(embed)
        } else {
            const embed = new discord.MessageEmbed()
            .setAuthor(`${name}`)
            .setThumbnail(`${icon}`)
            .setDescription(`**Error:**\nMention someone to kick`)
            .setColor("BLUE")
            .setTimestamp()
            message.channel.send(embed)
        }
      } else {
        const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
        const embed = new discord.MessageEmbed()
        .setAuthor(`${name}`)
        .setThumbnail(`${icon}`)
        .setDescription(`**Error:**\nInsufficient permissions`)
        .setColor("BLUE")
        .setTimestamp()
        message.channel.send(embed)
      }
  }
}