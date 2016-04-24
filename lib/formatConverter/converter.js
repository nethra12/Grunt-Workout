/*
 * Convert the image format
 * 'netpbm' node_module is used for format conversion
 */

/*jslint node: true*/

function outputPath(config) {
	'use strict';

	var path = require('path'),
		info = path.parse(config.image),
		name = info.name + '.' + config.convertTo;
console.log(info.name, config.image, info);
	return path.join(info.dir, name);
}

function convertImage(config) {
	'use strict';

	var defer = require('q').defer(),
		jimp = require('jimp'),
		output = outputPath(config);
console.log(output)
	jimp.read(config.image).then(function (img) {
		img.write(output);
		defer.resolve();
	}).catch(function () {
		defer.reject();
	});

	return defer.promise;
}

module.exports.convertImage = convertImage;