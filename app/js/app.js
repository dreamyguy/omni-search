    // retrieve active color
    function activeColor() {
        var aC = $('.search-options .active i').css('color');
        return aC;
    }
    // set actions
    function isInactive(aS) {
        $('.search-form-' + aS).addClass('active').siblings().removeClass('active');
        $('.search-option-' + aS).addClass('active').siblings().removeClass('active');
        $('.search-forms').css( 'border-bottom-color' , activeColor() );
    }
    // set active search
    function activateSearch(aS) {
        // load current search, depending of cookie status
        if ($.cookie('cookie_' + aS) == 'yes') {
            isInactive(aS);
            // console.log('cookie_' + aS + ' exists');
        } else {
            // console.log('cookie_' + aS + ' doesnt exist');
        }
        // change current search on click
        $('.search-option-' + aS + ' a').click(function(e) {
            if (!$(this).parent().hasClass('active')) {
                isInactive(aS);
                $.cookie('cookie_web', null);
                $.cookie('cookie_news', null);
                $.cookie('cookie_images', null);
                $.cookie('cookie_persons', null);
                $.cookie('cookie_companies', null);
                $.cookie('cookie_places', null);
                $.cookie('cookie_travel', null);
                $.cookie('cookie_food', null);
                $.cookie('cookie_phonenrs', null);
                $.cookie('cookie_videos', null);
                $.cookie('cookie_tvguide', null);
                $.cookie('cookie_social', null);
                $.cookie('cookie_' + aS, 'yes', { expires: 30 });
                // console.log('cookie_' + aS + ' was created');
            }
            // console.log('active search is: ' + aS);
            e.preventDefault();
        });
    }
    activateSearch("web");
    activateSearch("news");
    activateSearch("images");
    activateSearch("persons");
    activateSearch("companies");
    activateSearch("places");
    activateSearch("travel");
    activateSearch("food");
    activateSearch("phonenrs");
    activateSearch("videos");
    activateSearch("tvguide");
    activateSearch("social");
