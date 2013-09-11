var _ = require('underscore');

var files = {
    top: {
        'js/js_top.js': [
            'app/js/jquery-1.10.2.min.js',
            'app/js/jquery.cookie.js',
            'app/js/angular.min.js',
            'app/js/angular-resource.min.js'
        ]
    },
    bottom: {
        'js/js_bottom.js': [
            'app/js/app.js'
        ]
    }
};

function all() {
    'use strict';
    var allfiles = {},
        i = {};

    for (i in files) {
        _.extend(allfiles, files[i]);
    }
    return allfiles;
}

// Grunt configuration settings
module.exports.config = {
    options: {
        banner:   '// <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n\n',
        mangle:   false,
        report:   'min' // 'false', 'min' or 'gzip' Default: false
    },
    dist: {
        files: (all())
    },
    dev: {
        options: {
            compress: false,
            beautify: true
        },
        files: (all())
    }
};
