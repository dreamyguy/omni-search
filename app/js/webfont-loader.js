// Google webfont loader
var d     = new Date();
var epoch = d.getTime() / 1000;

WebFontConfig = {
    custom: {
        families: [ 'DobraMedium', 'DobraSlabMedium', 'DobraBook' ], // Names of the font-families
        urls: [ 'src/css/fonts.css?epoch=' + Math.floor(epoch) ] // Path to the CSS file with the declarations.
                                                                           // Includes a poor man's don't cache this, please.
    }
};
(function() { // Load and insert the Google WFL.
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
