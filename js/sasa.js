///////////////////////////
// GLOBAL VARIABLES START
//////////////////////////


var $debug = false,
    $firstTime = true;
    $playIntro = true;

var $defaultEase = "Expo.easeOut";

var $sc_NightPlaylist = '<iframe id="scPlaylist" width="100%" height="163" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3416309&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';

var $sasaMessageList = [
    'LOVE REIGNS SUPREME',
    'EVERY DAY IS A BLESSING',
    'LOVE GOD & LIVE',
    'SHINE BRIGHT',
    'HEARTCORE 4 LIFE',
    'LISTEN TO LIFE',
    'UNITY = STRENGTH',
    'KEEP SMILING',
    'YOU ARE LOVED'
];

var $jsLinks = [
    'js/TweenMax.min.js'
    ,'js/twitterFetcher_min.js'
    // ,'js/scrollreveal.min.js'
];

var $mainTL;
var $socialTL;
var $linkTL;

var $mainStage = document.getElementById('mainStage'),
    $mainContainer = document.getElementById('mainContainer'),
    $AllGlories = document.getElementById('AllGlories'),
    $sasaLogo = document.getElementById('sasaLogo'),
    $socialLogos = document.getElementById('socialLogos'),
    $sasaMessage = document.getElementById('sasaMessage'),
    $sasaMsg = document.getElementById('sasaMsg'),
    $twitterFeed = document.getElementById('twitterFeed'),
    $instafeedSwiper = document.getElementById('instafeedSwiper'),
    $scPlayer = document.getElementById('scPlayer'),
    $soundcloudPlayer = document.getElementsByClassName('soundcloudPlayer'),
    $heartcoreLogo = document.getElementById('heartcoreLogo');
    $nimaiFooterCredit = document.getElementsByClassName('nimaiFooterCredit');

var $nimaiOverlay = document.getElementById('nimaiOverlay'),
    $storePromo = document.getElementById('storePromo'),
    $nimaiHeader = document.getElementById('nimaiHeader'),
    $nimaiFooter = document.getElementById('nimaiFooter'),
    $nimaiFooterCredits = document.getElementById('nimaiFooterCredits'),
    $sasaFooterCredit = document.getElementsByClassName('sasaFooterCredit'),
    $nimEye = document.getElementById('nimEye');

var $socialList = [
    'soundcloud'
    // ,'patreon'
    ,'reverbnation'
    ,'twitter'
    ,'youtube'
    ,'instagram'
    // ,'tumblr'
    ,'facebook'
    // ,'pinterest'
    // ,'plus'
    // ,'medium'
    ,'linkedin'
    ,'github'
    ,'codepen'
    // ,'paypal'
    // email link is added on load //
];

var $patreon_svg = '<path d="M2.32081783.3678855c.869042-.40526652 1.88661925-.47774603 2.80665096-.20727372.80652418.2346745 1.53190822.73363407 2.0426921 1.3983242.5050198.6523156.79854318 1.4641745.82647667 2.28752405.0354711.8511923-.21060967 1.71122356-.6952336 2.4134793-.71030882 1.0518368-1.9482503 1.72713368-3.22254963 1.73950823-.63803645.0008839-1.2760729.00044195-1.91366597 0 .00532067-1.34042898.0004434-2.68085797.00310373-4.0217289.00221694-.50647268.23011877-1.00499028.60921618-1.34131288.36180524-.3279256.85973083-.5002854 1.3474585-.46404565.50457642.03093638.98831357.2859405 1.30267622.68015833.3232304.3968695.46422805.93295272.38131434 1.4376576-.08114014.53122177-.41368172 1.01603898-.87790977 1.2882791-.5373872.3252739-1.2406018.3345548-1.7935076.04021728.00044338.43487706-.0008868.86975412.00044338 1.30463118.4934917.14407512 1.02201113.16838228 1.52392723.0539177.7431196-.16219502 1.4144102-.6174017 1.8444973-1.24187455.40969124-.5855814.59946164-1.31788962.52851943-2.02810043-.06030086-.6514317-.34052257-1.27944013-.78302457-1.7620476-.41013462-.4507872-.95860653-.77561914-1.55363427-.913507-.6837055-.162195-1.42372137-.07866678-2.05200326.23600036C1.64553673 1.7542771.962718 2.8206982.95207668 3.932198.95030312 5.2876532.95163328 6.6435504.9511899 7.99944755c-.3165796.0008839-.63360256.00044195-.95062554.00044195-.0004434-1.32584468.0004434-2.65168938-.0004434-3.97709212-.00443387-.56569374.11306415-1.13227137.3440697-1.6493508C.73215587 1.49662128 1.44778534.7691745 2.32081784.3678855z" />';

var $socialArray = [];

var $link = document.getElementsByClassName('link'),
    $link_soundcloud = document.getElementsByClassName('soundcloud'),
    $link_patreon = document.getElementsByClassName('patreon'),
    $link_reverbnation = document.getElementsByClassName('reverbnation'),
    $link_youtube = document.getElementsByClassName('youtube'),
    $link_facebook = document.getElementsByClassName('facebook'),
    $link_twitter = document.getElementsByClassName('twitter'),
    $link_instagram = document.getElementsByClassName('instagram'),
    $link_plus = document.getElementsByClassName('plus'),
    $link_medium = document.getElementsByClassName('medium'),
    $link_linkedin = document.getElementsByClassName('linkedin'),
    $link_github = document.getElementsByClassName('github'),
    $link_codepen = document.getElementsByClassName('codepen'),
    $link_mail = document.getElementsByClassName('mail');

var $sasaBgImage = document.getElementById("sasaBgImage");
var $BgImage1 = "images/bg/SasaRA_BG_Photo_1.png";
var $BgImage2 = "images/bg/SasaRA_BG_Photo_2.png";
var $BgImage3 = "images/bg/SasaRA_BG_Photo_3.png";
var $BgImage4 = "images/bg/SasaRA_BG_Photo_4.png";
var $BgImage5 = "images/bg/SasaRA_BG_Photo_5.png";
var $BgImage6 = "images/bg/SasaRA_BG_Photo_6.png";

var $docHeight,
    $docWidth,
    $docCenterH,
    $docCenterW;

var $tfConfig = {
    "id": '464304692680335360',
    "domId": 'twitterFetcher_1',
    "maxTweets": 1,
    "enableLinks": true,
    "showPermalinks": false
};

var backstretchImages = [
    "images/bg/SasaRA_BG_Photo_1.png",
    "images/bg/SasaRA_BG_Photo_2.png",
    "images/bg/SasaRA_BG_Photo_3.png",
    "images/bg/SasaRA_BG_Photo_4.png"];


/////////////////////////
// GLOBAL VARIABLES END
/////////////////////////

// trace for consistent console logging
function trace(value) {
    if ($debug === true) {
        console.log('<<< ', value, ' >>>')
    }
}

function init() {
    trace('init');
    loadSasaMessage();
    loadSocial($socialList);
    loadJS($jsLinks);
}

function start() {
    trace('start');
    preloadTwitterFetcher($tfConfig);
    buildMainTL(0.5,1.8);
    loadListeners();
    // slideShow("intro-bg",10,1.3,1.0,0);
}

function buildMainTL(d,t) {
    TweenLite.defaultEase = Sine.easeOut;

    $mainTL = new TimelineLite({paused:true});

    $mainTL
        .timeScale(t)
        .delay(d)
        .add(loadSasaMsgTL(), 'sasaMsg')
        .add(loadHeadFootTL(), 'headFoot')
        .add(loadSocialTL(0.7), 'social')
        // .add(loadTwitterTL(0.3), 'twitter')
        // .add(loadTwitterTL(0.3), '+=2')
        .call(mainStagerize,[],this,'+=2')
    ;

    if ($playIntro === true) {
        $mainTL.play();
    } else {
        $mainTL.play('headFoot');
    }

}

function loadSasaMessage() {
    trace('loadSasaMessage INIT');

    msgNumber = Math.floor(Math.random() * $sasaMessageList.length); // Random Index position in the array
    GSAP.insertHTML($sasaMsg, $sasaMessageList[msgNumber]);
    GSAP.insertHTML($sasaMessage, $sasaMessageList[msgNumber]);
    // playSasaMessage(1);
}

function loadListeners() {
    // $sasaLogo.addEventListener("click", mainStagerize);
    // $sasaLogo.addEventListener("mouseover", socialize);
    // $heartcoreLogo.addEventListener("mouseover", twitterize);
    // $heartcoreLogo.addEventListener("click", socialize);
}

function loadSasaMsgTL() {
    trace('loadSasaMsgTL INIT');

    tl = new TimelineLite();

    tl
        .set($sasaMessage, {className: '+=animate'})
        .set($nimaiOverlay, {className: '-=hidden'})
        .set($sasaMessage, {className: '-=hidden'})
        .to($sasaMessage, 0.01, {zIndex: 5100})
        .to($sasaMessage, 0.01, {xPercent: -50, yPercent: -50})
        .to($sasaMessage, 0.01, {left: "50%", top: "50%"})
        .to($sasaMessage, 0.5, {opacity: 1, scale: 1.5})
        // .to($nimaiOverlay, 3, {zIndex: 1, opacity: 1})
        .to($sasaMessage, 1.2, {opacity: 0, scale: 0.6}, '+=2')
        .to($sasaMessage, 2, {top: '30%'}, '-=1.2')
        .to($nimaiOverlay, 1, {zIndex: 1, opacity: 0, onComplete: function() {
            TweenMax.set($sasaMessage, {clearProps: "all"});
            $nimaiOverlay.classList.add('hidden');
            $sasaMessage.classList.add('hidden');
        }}, '-=1.2')
    ;

    return tl;
}

function loadHeadFootTL() {
    trace('loadHeadFootTL INIT');

    time = 0.3;

    tl = new TimelineLite();

    tl
        .set($nimaiOverlay, {className: '+=hidden'})
        .set($sasaMessage, {className: '+=hidden'})
        .set($sasaMessage, {className: '-=animate'})
        .set($nimaiHeader, {className: '-=hidden'})
        .set($nimaiFooter, {className: '-=hidden'})
        .set($sasaLogo, {className: '-=hidden'})
        .set($heartcoreLogo, {className: '-=hidden'})
        .set($sasaLogo,{opacity:0})
        .set($heartcoreLogo,{opacity:0})
        .add('hf_0',0)
        .add('hf_1',0.05)
        .to($sasaLogo, time, {opacity: 1}, 'hf_0')
        .to($heartcoreLogo, time, {opacity: 1}, 'hf_0')
        .from($sasaLogo, time, {scale:0.3,y:-150},'hf_1')
        .from($heartcoreLogo, time, {scale:0.3,y:150},'hf_1')
        .addPause(2)
        ;

    return tl;

}

function loadSocialTL(d) {
    trace('loadSocialTL INIT');

    $socialTL = new TimelineLite();

    $socialTL
        .delay(d)
        .set($socialLogos, {className: '-=hidden'})
        .set($link, {opacity: 1})
        .set($socialLogos,{height:0})
        .set($socialLogos,{height:'auto'})
        .from($socialLogos,0.3,{height:0})
        .staggerFrom($link, 0.2, {y: +10, opacity: 0}, 0.035)
        .staggerTo($link,0.2,{scale:0.85}, -0.035)
        .addPause(2)
    ;

    return $socialTL;

}

function loadTwitterTL(d) {
    trace('loadTwitterTL INIT');

    tl = new TimelineLite();

    tl
        .delay(d)
        .set($twitterFeed, {className: '-=hidden'})
        .set($twitterFeed,{height:'auto'})
        .from($twitterFeed,0.3,{height:0, opacity:0, scaleY:0.5})
        .to($twitterFeed,0.2,{scale:1.1})
        .to($twitterFeed,0.5,{scale:1.0})
    ;

    return tl;

}

function showAllGlories() {

    tl = new TimelineLite({paused:true});
    tl
        .from($AllGlories,0.5,{y:5},'+=0.25')
    ;
    $AllGlories.classList.remove('hidden');
    tl.play();
}

function showNimaiCredits() {

    tl = new TimelineLite({paused:true});
    tl
        .staggerFrom($nimaiFooterCredit,0.5,{y:-5,opacity: 0},0.2,'-=0.5')
    ;
    $nimaiFooterCredits.classList.remove('hidden');
    tl.play();
}


var socialize = once(function() {
    loadSocial($socialList);
});

var twitterize = once(function() {
    // preloadTwitterFetcher($tfConfig);
    loadTwitterFetcher();
});

var mainStagerize = once(function() {
    loadMainStageContent();
});

var sasaMessageize = once(function() {
    loadSasaMessage();
});

function linkCompress() {

    // var link = document.getElementsByClassName('link')
    $linkTL = new TimelineMax({paused:true,delay:0.2});

    for (i=$link.length-1; i>=0; i--) {
        // tl = new TimelineMax({delay:0.2});
        $linkTL.to($link[i], 0.15, {x:-(i*41),opacity:0.5});
    }

    $linkTL.play();
}

function linkIn() {
    $linkTL.reverse();
}

function linkOut() {
    $linkTL.play();
}


function loadSocial(s) {
    trace('loadSocial LOADED');

    var tip = false;
    var toolTip = '';

    str = '';

    for (i = 0; i < s.length; i++) {
        linkName = ('$link_' + s[i]);
        if(tip === true) {
            toolTip = ('<span class="tooltiptext">' + s[i] + '</span>');
        } else {
            toolTip = '';
        }
        str += ('<a ' + 'id="' + 'link_' + s[i] + '"' + ' class="link ' + s[i] + ' tooltip" title="' + s[i] + '" href="http://' + s[i] + '.sasara.me" target="_blank">' + toolTip + '</a>');
    }
    if(tip === true) {
        str += ('<a id="link_mail" class="link mail tooltip" title="email" href="mailto:ra@souljah.com?subject=Mail from SasaRA.me" target="_blank"><span class="tooltiptext">' + 'email' + '</span></a>');
    } else {
        str += ('<a id="link_mail" class="link mail tooltip" title="email" href="mailto:ra@souljah.com?subject=Mail from SasaRA.me" target="_blank"></a>');
    }

    GSAP.insertHTML($socialLogos, str);

    // ADD LISTENERS
    aTags = document.getElementsByClassName('link');
    for (var i=0;i<aTags.length;i++){
        addEventListener.call(aTags[i],'mouseover',socialLinkOver);
        addEventListener.call(aTags[i],'mouseout',socialLinkOut);
    }

    // loadSocialLogos();
}

function socialLinkOver(l) {
    // trace('mouseover');
    TweenMax.to(this,0.1,{scale:1.1});
}

function socialLinkOut() {
    // trace('$link mouseout');
    TweenMax.to(this,0.1,{scale:0.85});
}

function preloadTwitterFetcher(config) {
    trace('preloadTwitterFetcher INIT');
    twitterFetcher.fetch(config);
}


function loadStorePromo() {
    trace('loadStorePromo INIT');
    $storePromo.classList.remove('hidden');
    GSAP.insertHTML($scTrackA, $scExciteMoneyIframe);
    GSAP.insertHTML($scTrackB, $scWeBelieveIframe);
}

// ====================================
//     FULL BACKGROUND SLIDE SHOW
//     VANILLA JS & GSAP
//     Example Call:
//     slideShow("intro-bg",10,1.3,0.5,0);
// ====================================


var $slides;
// var $slides = document.getElementsByClassName("intro-bg"); //slides
var currentSlide = 0; //keep track on the current slide
var stayTime; //time the slide stays
var slideTime; //fade in / fade out time
var alphaSet;

function slideShow(slideClass,sTime,tTime,alpha,current) {
    $slides = document.getElementsByClassName(slideClass); //slides
    currentSlide = current; //keep track on the current slide
    stayTime = sTime; //time the slide stays
    slideTime = tTime; //fade in / fade out time
    alphaSet = alpha;

    TweenLite.set($slides, {autoAlpha:0, onComplete: function(){
        TweenLite.to($slides[currentSlide],(slideTime*2), {autoAlpha:alphaSet});	//show first image
        TweenLite.delayedCall(stayTime, nextSlide); //start the slideshow
    }});	//hide all images

}
function nextSlide() {
    TweenLite.to($slides[currentSlide], slideTime, {
        autoAlpha: 0,
        className: "-=bg-active"
    }); //fade out the old slide
    currentSlide = ++currentSlide % $slides.length; //find out which is the next slide
    TweenLite.to($slides[currentSlide], slideTime, {
        autoAlpha: alphaSet,
        className: "+=bg-active"
    }); //fade in the next slide
    TweenLite.delayedCall(stayTime, nextSlide); //wait a couple of seconds before next slide
}

// ==========================================
//     END FULL BACKGROUND SLIDE SHOW
// ==========================================

var $igBg01 = "https://instagram.fsnc1-4.fna.fbcdn.net/t51.2885-15/e35/17662439_342625969468558_7500373359771779072_n.jpg";
var $igBg02 = "https://instagram.fsnc1-4.fna.fbcdn.net/t51.2885-15/e35/13355439_553003784901766_2013074610_n.jpg";

function setBgImg(BgImageLink) {
    trace('setBGimage = ' + BgImageLink);
    TweenMax.to($sasaBgImage,0.2,{opacity:0,onComplete:function(){
        $sasaBgImage.src = BgImageLink;
        loadBgImg();
    }});

}

function loadBgImg() {
    trace('loadBgImg INIT');
    tl = new TimelineLite({paused:true});
    tl
        .set($sasaBgImage,{scale:1.03,opacity:0})
        .to($sasaBgImage,0.7,{scale:1,opacity:1})
    ;
    $sasaBgImage.classList.remove('hidden');
    tl.play();
}

function loadMainStageContent() {
    trace('loadMainStageContent INIT');
    showAllGlories();
    showNimaiCredits();
    // $sasaMessage.classList.remove('animate');
    // $sasaMessage.classList.remove('hidden');
    $mainStage.classList.remove('hidden');
    $mainContainer.classList.remove('centered');

    // TweenMax.set($socialLogos,{height:'auto'});
    // TweenMax.set($twitterFeed,{height:'auto'});
    // loadTwitterFetcher($tfConfig);
    scLoadPlaylist($sc_NightPlaylist);

    // loadStorePromo();
}

function setMainStage() {
    trace('setMainStage INIT');

    var nimaiHeaderH = Math.round($nimaiHeader.scrollHeight);
    var nimaiFooterH = Math.round($nimaiFooter.scrollHeight);
    var nimaiHeadFoot = Math.round(nimaiHeaderH + nimaiFooterH);
    var mainStageMinH = Math.round($docHeight - (nimaiHeadFoot + 25));

    TweenMax.to($mainStage, 1.2, {minHeight: mainStageMinH});

    // trace('nimaiHeadFoot = ' + nimaiHeadFoot);
    // trace('nimaiHeaderH = ' + nimaiHeaderH);
    // trace('nimaiFooterH = ' + nimaiFooterH);
    // trace('setMainStage mainStageMinH = ' + mainStageMinH);

}

function scLoadPlaylist(playlist) {
    trace('scLoadPlaylist INIT');
    $scPlayer.classList.remove('hidden');
    GSAP.insertHTML($scPlayer, playlist);
    TweenMax.to(scPlaylist, 0.5, {height: 500});
}

function setDocSize() {
    $docWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    $docHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    $docCenterW = Math.round($docWidth / 2);

    $docCenterH = Math.round($docHeight / 2);
}


//======================================
//========= CUSTOM FUNCTIONS =============
//======================================

function loadJS(link) {
    loadScripts(link,function(){
        trace('Scripts loaded');
        start();
    });
}

function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function run(){
        if(array.length!=0){
            loader(array.shift(), run);
        }else{
            callback && callback();
        }
    })();
}

function once(fn, context) {
    var result;

    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

// Usage
var canOnlyFireOnce = once(function() {
    console.log('Fired!');
});

// canOnlyFireOnce(); // "Fired!"
// canOnlyFireOnce(); // nada


// ======================================



var GSAP = {

        gsapCenter: function (v, t) {
            //trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.set(v, t, {xPercent: -50, yPercent: -50});
            TweenMax.set(v, t, {left: "50%", top: "50%"});
        },

        itemCenterX: function (item) {
            var positionInfo = item.getBoundingClientRect();
            var itemCenterX = Math.round(positionInfo.width / 2);
            return itemCenterX;
        },

        itemCenterY: function (item) {
            var positionInfo = item.getBoundingClientRect();
            var itemCenterY = Math.round(positionInfo.height / 2);
            return itemCenterY;
        },

        hideItem: function (domID) {
            var item = domID.id;
            trace(item + ' hideItem CALLED');
            item.classList.add('hidden');
            //document.getElementById('instafeedSwiper')
        },

        showItem: function (domID) {
            var item = domID.id;
            trace(item + ' showItem CALLED');
            item.classList.remove('hidden');
        },

        insertHTML: function (domID, htmlStr) {
            domID.insertAdjacentHTML('beforeend', htmlStr);
            // trace(htmlStr + ' LOADED into DOM ID : ' + domID.id);
        },

        gsapScale: function (v, t, a) {
            TweenMax.to(v, t, {scale: a});
        },

        gsapPosR: function (v, t, xPos, yPos) {
            TweenMax.to(v, t, {x: xPos, y: yPos});
        },

        gsapPosA: function (v, t, xPos, yPos) {
            var xPosA = ($docCenterW - xPos);
            var yPosA = ($docCenterH - yPos);

            TweenMax.to(v, t, {x: xPosA, y: yPosA});
        },

        gsapHeightWidth: function (v, t, h, w) {
            TweenMax.to(v, t, {height: h, width: w});
        },

        gsapHeight: function (v, t, h) {
            TweenMax.to(v, t, {height: h});
        },

        gsapMinHeight: function (v, t, h) {
            TweenMax.to(v, t, {minHeight: h});
        },

        gsapWidth: function (v, t, w) {
            TweenMax.to(v, t, {width: w});
        },

        gsapMove: function (v, t, x, y) {
            TweenMax.to(v, t, {left: x, top: y});
        },

        gsapCenterH: function (v, t) {
            //trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.to(v, t, {xPercent: -50});
            TweenMax.to(v, t, {left: "50%"});
        },

        gsapCenterV: function (v, t) {
            //trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.to(v, t, {yPercent: -50});
            TweenMax.to(v, t, {top: "50%"});
        }
    };

window.addEventListener('load', init);



// ========================================
//     ARCHIVED VARIABLES
// ========================================

// var $instaSlides = 4;

// var mySwiper;
//
// var $scPlayer = document.getElementById('scPlayer'),
//     $scSwiper = document.getElementById('scSwiper'),
//     $scSwiperWrapper = document.getElementById('scSwiperWrapper');
//
// var $scTrackA = document.getElementById('scTrackA'),
//     $scTrackB = document.getElementById('scTrackB'),
//     $scExciteMoneyIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76063308&amp;color=0066cc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
//     $scWeBelieveIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76020624&amp;color=0066cc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';
//
// var $swiperContainer = document.getElementsByClassName('swiperContainer');
//
// var $sc_ID = 1796918, //SASA HASID RA SOUNDCLOUD USER ID #
//     $sc_NightPlaylist = '<iframe id="scPlaylist" width="100%" height="500" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3416309&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';
//
// var $sc_BabyBoy = 165546030,
//     $sc_OneThing = 125842224,
//     $sc_EveryBodyDies = 83457472,
//     $sc_AngelChild = 77178318,
//     $sc_ExciteMoney = 76063308,
//     $sc_WeBelieve = 76020624,
//     $sc_Nightmerikkkana = 76012806,
//     $sc_FEAR = 75987437;

// ========================================
//     ARCHIVED FUNCTIONS
// ========================================

// var resizeTimer;
//
// window.onresize = function (event) {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(setDocSize(), 200);
// };



// function scLoadPlaylist(playlist) {
//     trace('scLoadPlaylist INIT');
//     $scPlayer.classList.remove('hidden');
//     TweenMax.set($scPlayer,{height:0,opacity:0});
//     GSAP.insertHTML($scPlayer, playlist);
//
//     tl = new TimelineLite({paused:true});
//     tl
//         .to($scPlayer,0.2,{height:163})
//         .to($scPlayer,0.5,{opacity:1})
//     ;
//     tl.play();
//     $scPlayer.addEventListener("mouseover", scPlaylistOpen);
// }
//
// function scPlaylistOpen() {
//     // if ($firstTime = true) {
//     //     trace('scPlaylistOpen INIT');
//     //     TweenMax.to($scPlayer, 1, {height: 500});
//     //     $firstTime = false;
//     //     trace('$firstTime = ' + $firstTime);
//     // }
//     TweenMax.to($scPlayer, 1, {height: 500});
// }
//
// function scPlaylistClose() {
//     trace('scPlaylistClose INIT');
//     TweenMax.to(scPlaylist, 1, {height: 163});
// }

// function loadLinkListeners(s) {
//     trace('loadLinkListeners LOADED');
//
//     aTags = document.getElementsByClassName('link');
//
//     for (var i=0;i<aTags.length;i++){
//         addEventListener.call(aTags[i],'mouseover',socialLinkOver);
//         addEventListener.call(aTags[i],'mouseout',socialLinkOut);
//     }
// }

// function playSasaMessage(msgDuration) {
//     trace('playSasaMessage INIT');
//
//     $sasaMessage.classList.add('animate');
//     $nimaiOverlay.classList.remove('hidden');
//     $sasaMessage.classList.remove('hidden');
//
//     // duration = ('+="' + msgDuration + '"');
//
//     tl = new TimelineLite({paused:true});
//
//     tl
//     // .to($nimaiOverlay, 0.01, {zIndex: 5000, opacity: 1})
//         .to($sasaMessage, 0.01, {zIndex: 5100})
//         .to($sasaMessage, 0.01, {xPercent: -50, yPercent: -50})
//         .to($sasaMessage, 0.01, {left: "50%", top: "50%"})
//         .to($sasaMessage, 0.5, {opacity: 1, scale: 1.5})
//         .to($nimaiOverlay, 3, {zIndex: 1, opacity: 1})
//         .to($sasaMessage, 1.2, {opacity: 0, scale: 0.6}, '-=2')
//         .to($sasaMessage, 4, {top: '30%'}, '-=2')
//         // .to($nimaiOverlay, 1, {zIndex: 1, opacity: 0})
//         .call(endSasaMessage,[],this,'-=3.2')
//     ;
//
//     tl.play();
//     // tl.kill(null,$sasaMessage);
// }

// function endSasaMessage() {
//     trace('endSasaMessage INIT');
//
//
//     TweenMax.to($nimaiOverlay, 1, {zIndex: 1, opacity: 0, onComplete: function() {
//         loadHeadFoot();
//         TweenMax.set($sasaMessage, {clearProps: "all"});
//         $nimaiOverlay.classList.add('hidden');
//     }});
//     // TweenMax.set($sasaMessage, {display: "none"});
//
//     // $sasaMessage.classList.add('hidden');
//     // $sasaMessage.classList.remove('animate');
//
//     // loadContent();
// }

// function loadHeadFoot() {
//     trace('loadHeadFoot INIT');
//
//     time = 0.3;
//
//     TweenMax.set($sasaLogo,{opacity:0});
//     TweenMax.set($heartcoreLogo,{opacity:0});
//
//     tl = new TimelineLite({paused:true});
//     tl
//         .add('start',0)
//         .add('step2',0.05)
//         .to($sasaLogo, time, {opacity: 1}, 'start')
//         .to($heartcoreLogo, time, {opacity: 1}, 'start')
//         .from($sasaLogo, time, {scale:0.3,y:-150},'step2')
//         .from($heartcoreLogo, time, {scale:0.3,y:150},'step2')
//         .call(socialize,[],this,'+=0.5')
//     // .call(showAllGlories,[],this,'+=0.4')
//     // .call(showNimaiCredits,[],this,'+=0.4')
//     // .call(twitterize)
//     // .from($AllGlories,0.5,{y:5,opacity:0},'+=0.25')
//     // .staggerFrom($nimaiFooterCredit,0.5,{y:-5,opacity: 0},0.2,'-=0.5')
//     ;
//
//     tl.play();
//
//     $nimaiHeader.classList.remove('hidden');
//     $nimaiFooter.classList.remove('hidden');
//     $sasaLogo.classList.remove('hidden');
//     $heartcoreLogo.classList.remove('hidden');
//     // preloadTwitterFetcher($tfConfig);
//
// }

// function loadSocialLogos() {
//     trace('loadSocialLogos INIT');
//
//     // loadLinkListeners($socialList);
//
//     $socialLogos.classList.remove('hidden');
//
//     tl = new TimelineLite();
//     tl
//         .set($link, {opacity: 1})
//         .set($socialLogos,{height:'auto'})
//         .from($socialLogos,0.3,{height:0})
//         .staggerFrom($link, 0.2, {y: +10, opacity: 0}, 0.035)
//         .staggerTo($link,0.2,{scale:0.85}, -0.035)
//         .call(twitterize,[],this,'+=0.7')
//     ;
//
// }

// function loadTwitterFetcher() {
//     trace('loadTwitterFetcher INIT');
//
//     $twitterFeed.classList.remove('hidden');
//
//     tl = new TimelineLite({paused:true});
//     tl
//         .set($twitterFeed,{height:'auto'})
//         .from($twitterFeed,0.3,{height:0, opacity:0, scaleY:0.5})
//     ;
//     tl.play();
//
//     // loadMainStageContent();
// }

// function loadContent() {
//     trace('loadContent INIT');
//
//     tl = new TimelineLite({paused:true});
//
//     if ($playIntro === true) {
//         tl
//             .call(loadSasaMessage,[],this,'-=0')
//             .call(preloadTwitterFetcher,[$tfConfig],this,'-=0')
//         ;
//     } else {
//         tl
//             .call(preloadTwitterFetcher,[$tfConfig],this,'-=0')
//             .call(loadHeadFoot,[],this,'-=0')
//         ;
//     }
//
//     tl.play();
// }

// function pushSocialArray(e) {
//
//     for (i = 0; i < ($socialLogos.childNodes.length - 1);i++)
//     {
//         linkCurrent = ("$" + $socialLogos.childNodes[i].id );
//
//         trace("$socialLogos.childNodes[i].id = " + linkCurrent);
//
//         $socialArray.push(linkCurrent);
//     }
//
//     $socialArray.push('$link_mail');
//
//     trace("$socialArray = " + $socialArray);
//
// }



