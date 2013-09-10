// This task watches files and runs the appropriate 
// tasks when files are changed.
module.exports = {

    grunt: {
        files: ['Gruntfile.js', 'config/*.js'],
        tasks: ['jshint:grunt']
    },

    sass: {
        files: 'app/sass/**/*.scss',
        tasks: ['compass:dev']
    },

    js: {
        files: 'app/js/**/*.js',
        tasks: ['jshint', 'uglify:dev']
    }

};
