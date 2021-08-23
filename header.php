<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viyar Pro Bussines</title>
    <?php wp_head(); ?>
</head>

<body>
<div class="header-bg"></div>
    <header class="header">
        <section>
            <!-- LOGO&NAV&PHONE -->
            <div class="header__container flex-container">
                <div class="header__logo flex-item">
                    <?php
                    if (function_exists('the_custom_logo')) {
                        the_custom_logo();
                    }
                    ?>
                </div>

                <?php

                wp_nav_menu(array(
                    'theme_location' => 'header-nav',
                    'container' => 'nav',
                    'container_class' => 'header__nav flex-container',
                ));



                ?>
                <div class="header__phone flex-container">
                    <a class="phone__link" href="tel:+380999999999">
                        <div class="phone-icon flex-item">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/phone-call.svg" alt="Call to us">
                        </div>
                        <div class="phone-number flex-item">
                            +380 (99) 99 99 999
                        </div>
                    </a>
                </div>
            </div>

            <div class="header__title flex-container">
                <div class="title">
                    <div class="academy-logo">
                        by
                        <div>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/viar-academy-logo.svg" alt="">
                        </div>
                    </div>
                    <h1>Курс <span> Viyar ProBusiness</span></h1>
                    <div class="sub-title">
                        Комплексний курс для розвитку меблевого бізнесу
                        Від стратегії до створення контенту за 2 місяці
                    </div>
                    <div class="course-btn">

                        <a href="#" class="link">
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
    