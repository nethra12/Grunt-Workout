/*
 * gruntExample
 * https://github.com/Manoj/Grunt_Project
 *
 * Copyright (c) 2016 Manoj_RG
 * Licensed under the MIT license.
 */

/*jslint node: true*/

function main() {
	'use strict';

	var cliReader = require('./parser/cliReader'),
		config = cliReader.parseCLI(),
		converter = require('./formatConverter/converter'),
		promise = converter.convertImage(config),
		colors = require('colors');

	promise.then(function () {
		console.log(colors.green('Successful'));
	}, function () {
		console.log(colors.red('Unsuccessful'));
	});

}

main();