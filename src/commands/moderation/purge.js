
    const BaseCommand = require('../../utils/structures/BaseCommand');
    const discord = require('discord.js')
    module.exports = class TestCommand extends BaseCommand {
      constructor() {
        super('purge', 'bulk delete message', []);
      }
    
      async run(client, message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions")
        const number = args.join(" ")
        if(!number) return message.channel.send("You haven't specified a number to purge").then(msg => {
            msg.delete({ timeout: 30000 })
        })
       message.channel.bulkDelete(number).catch(console.error)    
      }
    }