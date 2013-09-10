module.exports = function(grunt) {

    // Import task configurations
    var jshint = require('./config/jshint'),
        uglify = require('./config/uglify'),
        compass = require('./config/compass'),
        watch = require('./config/watch');

    // Main project configuration.
    grunt.initConfig({
        // Read NPM package information
        pkg: grunt.file.readJSON('package.json'),
        // Static code analysis of Javascript
        jshint: jshint,
        // Concatenate, minify and beautify/uglify Javascript
        uglify: uglify.config,
        // Compass
        compass: compass,
        // Watcher
        watch: watch
    });

    // Load the grunt tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-indent');

    // Compile production files
    grunt.registerTask('dist', [
        'jshint',
        'uglify:dist',
        'compass:dist'
    ]);

    // Compile developer friendly environment
    grunt.registerTask('dev', [
        'jshint',
        'uglify:dev',
        'compass:dev'
    ]);

    // Default task(s).
    grunt.registerTask('default', 'dist');

};
