const util = require('util');
const discord = require('discord.js');
const tags = require('common-tags');
const { escapeRegex } = require('../../util');
const Command = require('../base');

const nl = '!!NL!!';
const nlPattern = new RegExp(nl, 'g');

module.exports = class EvalCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'eval',
			group: 'util',
			memberName: 'eval',
			description: 'Executa um código de JavaScript.',
			details: 'Somente a dona do bot pode usar este comando.',
			ownerOnly: true,

			args: [
				{
					key: 'script',
					prompt: 'Qual código você gostaria de adicionar?',
					type: 'string'
				}
			]
		});

		this.lastResult = null;
		Object.defineProperty(this, '_sensitivePattern', { value: null, configurable: true });
    }
}
