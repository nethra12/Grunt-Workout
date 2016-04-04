/*
 * Parses command line arguments
 * 'argparse' node_module is used to parse the command line arguments
 */

/*jslint node: true*/
/*jslint nomen: true */

function parseCLI() {
	'use strict';
	/*
	 * CLI arguments
	 */
	var ArgumentParser = require('argparse').ArgumentParser,
		path = require('path'),
		packageJSONPath = path.join(__dirname, '../../', './package.json'),
		version = require(packageJSONPath).version,
		args = {},
		parser,
		cliArgs;

	args.image = {};
	args.image.name = ['-i', '--image'];
	args.image.options = {
		help: 'Image file path'
	};
	args.convertTo = {};
	args.convertTo.name = ['-c', '--convertTo'];
	args.convertTo.options = {
		help: 'Format to convert'
	};

	parser = new ArgumentParser({
		version: version,
		addHelp: true,
		description: ''
	});

	parser.addArgument(args.image.name, args.image.options);
	parser.addArgument(args.convertTo.name, args.convertTo.options);

	cliArgs = parser.parseArgs();
	console.log(cliArgs);
	return cliArgs;

}

module.exports.parseCLI = parseCLI;