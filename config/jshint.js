var gruntfiles = ['Gruntfile.js', 'config/*.js'];
var jsfiles = [
    'Gruntfile.js',
    'config/*.js',
    'app/js/base.js'
];

module.exports = {
    options: {
        evil: true
    },
    grunt: gruntfiles,
    all: jsfiles
};
