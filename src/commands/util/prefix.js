const { Command } = require('discord.js-commando');

module.exports = class prefix extends Command {

  constructor(client) {
    super(client, {
      name: 'prefix',
      aliases: ['prefixx'],
      memberName: 'prefix',
      group: 'util',
      description: 'no',
    });
  }


};
