# scss-wow-js-nivo-slider live https://jibon87.github.io/scss-wow-js-nivo-slider/

```
--- for nav --- 
1.  js--link ---> jquery.min.js
2.  js--link ---> js/onepageNav.min.js
3.  js--link ---> js/headroom-nav.min.js

4.  css--link ---> style.scss [
                                        
                                    /* headroom */
                                    .headroom {
                                        transition: transform 0.25s ease-in-out;
                                        will-change: transform;
                                    }

                                    .headroom--pinned {
                                        transform: translateY(0%);
                                    }

                                    .headroom--unpinned {
                                        transform: translateY(-100%);
                                    }
                                    .fixed {
                                        position: fixed !important;
                                        top: 0;
                                        right: 0;
                                        width: 100%;
                                        z-index: 9;
                                    }

                                    // nav bar pin
                                    .nav-pin_onepage-nav {
                                        li a.scroll.my-css-class {
                                            position: relative;
                                        }
                                        li a.scroll.my-css-class::after {
                                            content: "jibon";
                                            top: -6px;
                                            left: 0;
                                            right: 0;
                                            margin: auto;
                                            background: red;
                                            color: wheat;
                                            position: absolute;
                                            padding: 2px;
                                            text-align: center;
                                            width: 30px;
                                            font-size: 6.5px;
                                            font-weight: bold;
                                        }
                                        li a.scroll.my-css-class::before {
                                            content: "";
                                            position: absolute;
                                            top: 7px;
                                            left: 0;
                                            right: 0;
                                            margin: auto;
                                            width: 0;
                                            height: 0;
                                            border-style: solid;
                                            border-width: 8px 5px 0 5px;
                                            border-color: #ff0037 transparent transparent transparent;
                                        }
                                    }

                                ]

5.  css--link ---> css/nivo-slider.min.css

6.  html 
    {
    
        <nav class="fixed header">
            <ul id="onepage-nav" class="nav-pin_onepage-nav">
                <li>
                    <a class="scroll" href="#para">para</a>
                </li>
                <li>
                    <a class="scroll" href="#progbar">progbar</a>
                </li>
                <li>
                    <a class="scroll" href="#nivo">nivo</a>
                </li>
            </ul>
        </nav>
        <div id="para">..</div>
        <div id="progbar">..</div>
        <div id="nivo">..</div>

    }
    
7.  active js {

    // one page nav
    jQuery(".scroll").onePgaeNav({
        wrapper: "#onepage-nav",
        activeClass: "my-css-class",
        speed: 10,
    });

    //headroom
    var header = document.querySelector(".header");

    var headroom = new Headroom(header, {
        tolerance: {
            down: 10,
            up: 20,
        },
        offset: 15,
    });
    headroom.init();
}
8.  note [ 
           js--id---->     
           html--id-->     
         ]


--- for progbar wow js --- 
1.  js--link ---> jquery.min.js

2.  js--link ---> js/wow.min.js

3.  css--link ---> css/animat.min.css

4.  html 
    {

        <div class="wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">90%</div>

    }
    
5.  active js {

    //wow
    new WOW().init();

}

6.  note [    
           html--class  -->    [ animate__fadeInLeft ] for animat .
         ]



--- for progbar wow js --- 
1.  js--link ---> jquery.min.js
2.  js--link ---> js/nivo-slider.min.js
3.  css--link ---> css/nivo-slider.min.css  [


                                                /* coustum style */
                                                .nivo-content {
                                                    display: none;
                                                }
                                                .nivo-caption {
                                                    position: absolute;
                                                    text-align: center;
                                                    left: 0;
                                                    top: 0;
                                                    height: 100%;
                                                    background: rgba(0, 0, 0, 0.7);
                                                    color: #fff;
                                                    width: 100%;
                                                    z-index: 8;
                                                    padding: 5px 10px;
                                                    opacity: 0.8;
                                                    overflow: hidden;
                                                    display: none;
                                                    -moz-opacity: 0.8;
                                                    -webkit-box-sizing: border-box;
                                                    -moz-box-sizing: border-box;
                                                    box-sizing: border-box;
                                                }
                                                .nivo-caption p {
                                                    padding: 5px;
                                                    margin-top: 50px;
                                                }
                                                .nivo-prevNav {
                                                    left: 15px;
                                                    font-size: 30px;
                                                    color: gray;
                                                }
                                                .nivo-nextNav {
                                                    right: 15px;
                                                    font-size: 30px;
                                                    color: gray;
                                                }
                                                .nivo-controlNav {
                                                    text-align: center;
                                                    padding: 15px 0;
                                                }

]

4. html {

    <!-- nivo-slider -->
        <div id="link" class="wow animate__backInLeft py-5 my-5" data-wow-duration="3s" data-wow-delay=".1s">
            <div id="wrapper" class="my-5 py-5">
                <div id="nivo" class="slider-wrapper theme-default">
                    <div id="slider" class="nivoSlider n-m">
                        <img src="img/slider-3.jpg" title="#a" />
                        <img src="img/slider-4.jpg" title="#b" />
                        <img src="img/slider-5.jpg" title="#c" />
                        <img src="img/slider-5.jpg" title="#d" />
                    </div>
                    <div id="a" class="nivo-content">
                        <h1 class="wow animate__bounce" data-wow-duration="1s" data-wow-delay="0s">jibon1</h1>
                        <p class="wow animate__flipInX" data-wow-duration="1s" data-wow-delay="0s">jabed hossain</p>
                        <h2 class="wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay="0s">omg</h2>
                    </div>
                    <div id="b" class="nivo-content">
                        <h1 class="wow animate__bounce" data-wow-duration="1s" data-wow-delay="0s">jibon2</h1>
                        <p class="wow animate__flipInX" data-wow-duration="1s" data-wow-delay="0s">jabed hossain</p>
                        <h2 class="wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay="0s">omg</h2>
                    </div>
                    <div id="c" class="nivo-content">
                        <h1 class="wow animate__bounce" data-wow-duration="1s" data-wow-delay="0s">jibon3</h1>
                        <p class="wow animate__flipInX" data-wow-duration="1s" data-wow-delay="0s">jabed hossain</p>
                        <h2 class="wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay="0s">omg</h2>
                    </div>
                    <div id="d" class="nivo-content">
                        <h1 class="wow animate__bounce" data-wow-duration="1s" data-wow-delay="0s">jibon d</h1>
                        <p class="wow animate__flipInX" data-wow-duration="1s" data-wow-delay="0s">jabed hossain d</p>
                        <h2 class="wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay="0s">omg d</h2>
                    </div>
                </div>
            </div>
        </div>
}

 5.  active js {

    //wow
    new WOW().init();

    // nivo-slider
    $("#slider").nivoSlider({
        pauseTime: 3000,
        controlNav: false,
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        prevText: "<i class='bi bi-arrow-left-circle-fill'></i>",
        nextText: "<i class='bi bi-arrow-right-circle-fill'></i>",
    });

}

6.  note [    
           <img title="#a" />   same id
           <div id="a">         same id
         ]


--- for boostrap tooltip ---

1. html {

    <!-- bootstrap tooltip -->
        <button type="button" class="btn btn-secondary m-5" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Tooltip on top</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="top" title="jibon">Tooltip with HTML</button>


}

2. active js [

    /boostap tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

]
