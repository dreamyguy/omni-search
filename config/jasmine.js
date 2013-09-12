module.exports = {
    src : [
        'app/js/**/*.js',
        // exclude angular and jquery from jasmine
        '!app/js/angular*.js',
        '!app/js/jquery*.js'
    ],
    options : {
        specs : 'app/js/**/*spec.js',
        helpers: [
            'app/js/jquery*.js',
            'app/js/angular.min.js'
        ]
    }
};
