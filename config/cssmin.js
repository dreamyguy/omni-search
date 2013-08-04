var files = {
//  'destination':                          'source'
    'css/omni-search.css':                  'app/css/omni-search.css'//,
//  'css/other.css':                        'app/css/other.css'
};

module.exports = {
    dist: {
        options: {
            report: 'gzip' // Choices: false 'min' 'gzip' Default: false 
                           // WARNING! gzip is veeery slow
        },
        files: files
    },
    dev: {
        options: {
            report: 'min'
        },
        files: files
    }
};
