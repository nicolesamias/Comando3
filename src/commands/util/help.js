const { stripIndents, oneLine } = require('common-tags');
const Command = require('../base');
const { disambiguation } = require('../../util');

module.exports = class HelpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'util',
			memberName: 'help',
			aliases: ['commands'],
			description: 'Exibe uma lista de comandos disponíveis ou informações detalhadas para um comando especificado.',
			details: oneLine`
			O comando pode fazer parte de um nome de comando ou de um nome de comando inteiro.
			Se não for especificado, todos os comandos disponíveis serão listados.
			`,
			examples: ['help', 'help prefix'],
			guarded: true,

			args: [
				{
					key: 'command',
					prompt: 'Para qual comando você gostaria de ver a ajuda?',
					type: 'string',
					default: ''
				}
			]
		});
	}

	async run(msg, args) { // eslint-disable-line complexity
		const groups = this.client.registry.groups;
		const commands = this.client.registry.findCommands(args.command, false, msg);
        const showAll = args.command && args.command.toLowerCase() === 'all';
        
        msg.say(`<:YanTB:642536015151497217>`);
    }
}
