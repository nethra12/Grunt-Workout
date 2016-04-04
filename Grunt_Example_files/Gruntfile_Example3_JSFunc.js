/*jslint node: true*/

module.exports = function (grunt) {
	'use strict';


	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			lib: {
				src: ['lib/**/*.js']
			},
			test: {
				src: ['test/**/*.js']
			}
		},

		clean: {
			build: {
				src: ['dist/<%= pkg.name %>']
			}
		},

		mkdir: {
			build: {
				options: {
					create: ['dist/<%= pkg.name %>']
				}
			}
		},

		copy: {
			build: {
				files: [
					{
						src: ['lib/**', 'package.json'],
						dest: 'dist/<%= pkg.name %>/'
					}
				]
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Custom task - Increments the patch version in the build
	grunt.registerTask('version-update', 'Increment the version in package.json', function () {

		var semver = require('semver'),
			pkg = grunt.file.readJSON('package.json'),
			packageFile = 'dist/' + pkg.name + '/package.json',
			content = grunt.file.readJSON(packageFile);

		content.version = semver.inc(content.version, 'patch');
		grunt.file.write(packageFile, JSON.stringify(content, null, 2));

	});

	// Grunt task
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('build', ['clean:build', 'mkdir:build', 'copy:build', 'version-update']);

};