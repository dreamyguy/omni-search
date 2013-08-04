module.exports = function(grunt) {

    // Import task configurations
    var jshint = require('./config/jshint'),
        compass = require('./config/compass'),
//      cssmin = require('./config/cssmin'),
        watch = require('./config/watch');

    // Main project configuration.
    grunt.initConfig({
        // Read NPM package information
        pkg: grunt.file.readJSON('package.json'),
        // Static code analysis of Javascript
        jshint: jshint,
        // Compass
        compass: compass,
        // CSS compression
//      cssmin: cssmin,
        // Watcher
        watch: watch,
        sass: {
            dist: {
                files: {
                    'css/omni-search.css': 'omni-search.scss'
                }
            }
        },
        indent: {
            options: {
                style: 'space',
                size: 4,
                change: 1
            }
        }
    });

    // Load the grunt tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-indent');
    // Compile production files
    grunt.registerTask('dist', [
        'jshint',
        'compass:dist'//,
//      'cssmin'
    ]);

    // Compile developer friendly environment
    grunt.registerTask('dev', [
        'jshint',
        'compass:dev'//,
//      'cssmin'
    ]);

    // Default task(s).
    grunt.registerTask('default', 'dist');

};
