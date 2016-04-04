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

	// Default task.
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('build', ['clean:build', 'mkdir:build', 'copy:build']);

};