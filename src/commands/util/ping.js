const { Command } = require('discord.js-commando');

module.exports = class ping extends Command {

  constructor(client) {
    super(client, {
      name: 'ping',
      aliases: ['pingg'],
      memberName: 'ping',
      group: 'util',
      description: 'no',
    });
  }


};
