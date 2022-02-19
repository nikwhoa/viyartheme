<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viyar Pro Bussines</title>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon-16x16.png">
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/site.webmanifest">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <?php wp_head(); ?>
    <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '235864068711664');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=235864068711664&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
<meta name="facebook-domain-verification" content="h4ba4s2ghr180m1iysf4lq6qd89zp0" />
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JX3TQV');</script>
<!-- End Google Tag Manager -->
</head>

<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JX3TQV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <div class="header-bg"></div>
    <div class="nav-wrapper">
        <div class="navigation flex-container">
            <div class="navigation__mobile-menu">
                <div class="mobile-menu-btn">
                    <div class="mobile-menu-btn__open open-btn">

                    </div>
                    <div class="mobile-menu-btn__close"></div>
                </div>
            </div>
            <div class="navigation__logo flex-item">
                <a href="" class="custom-logo-link">
                    <picture>
                        <source srcset="<?php echo get_template_directory_uri(); ?>/assets/img/logo-mobile-small.svg" type="image/svg+xml" media="(max-width:395px)">
                        <source srcset="<?php echo get_template_directory_uri(); ?>/assets/img/logo-mobile-svg.svg" type="image/svg+xml" media="(max-width:794px)">
                        <source srcset="<?php echo get_template_directory_uri(); ?>/assets/img/logo-phone-landscape-white-svg.svg" type="image/svg+xml" media="(max-width:835px)">
                        <source srcset="<?php echo get_template_directory_uri(); ?>/assets/img/logo-tablet-svg.svg" type="image/svg+xml" media="(max-width:991px)">
                        <img class="logo-js" src="<?php echo get_template_directory_uri(); ?>/assets/img/logo-svg.svg" alt="">
                    </picture>
                </a>
            </div>
            <div class="navigation__call-order only-mobile">
                <a href="#" class="disable-default">
                    <button id="call-order" class="btn">Замовити дзвінок</button>
                </a>
            </div>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'header-nav',
                'container' => 'nav',
                'container_class' => 'navigation__nav flex-container',
            ));
            ?>

            <div class="navigation__phone flex-container">
                <a class="phone__link" href="tel:+380978929786">
                    <div class="phone-icon flex-item">

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="phone-icon" d="M17.4912 13.2102L14.9792 10.6982C14.0821 9.80111 12.557 10.16 12.1981 11.3262C11.929 12.1337 11.0319 12.5822 10.2245 12.4028C8.43021 11.9542 6.00797 9.62168 5.55941 7.73772C5.29027 6.93027 5.82855 6.03314 6.63596 5.76404C7.80222 5.40519 8.16108 3.88007 7.26395 2.98295L4.752 0.470991C4.03429 -0.156997 2.95774 -0.156997 2.32975 0.470991L0.625214 2.17553C-1.07933 3.96978 0.804639 8.72455 5.02113 12.941C9.23763 17.1575 13.9924 19.1313 15.7866 17.337L17.4912 15.6324C18.1192 14.9147 18.1192 13.8382 17.4912 13.2102Z" fill="white" />
                        </svg>

                    </div>
                    <div class="phone-number flex-item">
                        +380 97 892 97 86
                    </div>
                </a>
                <div class="phone__call-order-desktop">
                    <button id="call-order" class="btn">Замовити дзвінок</button>
                    <a href="#" class="disable-default">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <header class="header">
    
        
        <!-- LOGO&NAV&PHONE -->
        <section>
        <!-- <div class="timer">
            <div class="text">До початку курсу залишилось:</div>
            <div class="days"></div>
            <div class="hours"></div>
            <div class="minutes"></div>
            <div class="seconds"></div>
        </div> -->
            <div class="header__title flex-container">
                <div class="title">
                    <div class="academy-logo">
                        by
                        <div>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/viar-academy-logo.svg" alt="">
                        </div>
                    </div>
                    <h1><span> Viyar ProBusiness</span></h1>
                    <div class="sub-title">
                        Базовий курс для розвитку меблевого бізнесу
                        Від стратегії до створення контенту за 2 місяці
                    </div>
                    <div class="course-btn">

                        <a href="#course-programme" class="link">
                            <button class="btn"> Програма </button>
                        </a>

                    </div>
                </div>
            </div>

        </section>
    </header>

    <div class="pc">
        <div class="pc-image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header-pc.png" alt="">
        </div>
    </div>