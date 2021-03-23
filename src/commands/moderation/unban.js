const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class TestCommand extends BaseCommand {
      constructor() {
        super('unban', 'unbans a member', []);
      }
    
      async run(client, message, args) {
        let banReason = args.join(" ").slice(22);
        if(!banReason){
          banReason = "none"
        }
        const { guild } = message
        const { name, region, memberCount, owner, afkTimeout, createdAt } = guild
        const icon = guild.iconURL()

        if(!message.member.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`**${message.author.username}** You do not have perms to unban someone`)
        }
        
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`**${message.author.username}** I do not have perms to unban someone`)
        }
        
        let userID = args[0]
        message.guild.fetchBans().then(bans=> {
          if(bans.size == 0) return 
          let bUser = bans.find(b => b.user.id == userID)
          if(!bUser) return
          message.guild.members.unban(bUser.user)
          const emb = new discord.MessageEmbed()
          .setAuthor(`${name}`)
          .setThumbnail(`${icon}`)
          .setDescription(`**Success:**\n User has been unbanned\n**Reason:**\n${banReason}`)
          .setColor("BLUE")
          .setTimestamp()
          message.channel.send(emb)
    })
  }
}