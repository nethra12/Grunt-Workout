/*
 * gruntExample
 * https://github.com/Manoj/Grunt_Project
 *
 * Copyright (c) 2016 Manoj_RG
 * Licensed under the MIT license.
 */

/*jslint node: true*/

function main(image, convertTo, output) {
	'use strict';
	//var cliReader = require('./parser/cliReader'),
	//	config = cliReader.parseCLI(),
	var	converter = require('./lib/formatConverter/converter'),
		config = {
			image: image,
			convertTo : convertTo
			},
		promise = converter.convertImage(config),
		colors = require('colors');

	promise.then(function () {
		console.log(colors.green('Successful'));
		document.getElementById("result").innerHTML = 'Successful!!!!';
	}, function () {
		console.log(colors.red('Unsuccessful'));
		document.getElementById("result").innerHTML = 'Unsuccessful!!!';
	});
}
