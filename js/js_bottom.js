// omni-search - v0.0.1 - 2013-09-10 17:09:41

function activeColor(){var aC=$(".search-options .active i").css("color");return aC}function isInactive(aS){$(".search-form-"+aS).addClass("active").siblings().removeClass("active"),$(".search-option-"+aS).addClass("active").siblings().removeClass("active"),$(".search-forms").css("border-bottom-color",activeColor())}function activateSearch(aS){"yes"==$.cookie("cookie_"+aS)&&isInactive(aS),$(".search-option-"+aS+" a").click(function(e){$(this).parent().hasClass("active")||(isInactive(aS),$.cookie("cookie_web",null),$.cookie("cookie_news",null),$.cookie("cookie_images",null),$.cookie("cookie_persons",null),$.cookie("cookie_companies",null),$.cookie("cookie_places",null),$.cookie("cookie_travel",null),$.cookie("cookie_food",null),$.cookie("cookie_phonenrs",null),$.cookie("cookie_videos",null),$.cookie("cookie_tvguide",null),$.cookie("cookie_social",null),$.cookie("cookie_"+aS,"yes",{expires:30})),e.preventDefault()})}activateSearch("web"),activateSearch("news"),activateSearch("images"),activateSearch("persons"),activateSearch("companies"),activateSearch("places"),activateSearch("travel"),activateSearch("food"),activateSearch("phonenrs"),activateSearch("videos"),activateSearch("tvguide"),activateSearch("social");