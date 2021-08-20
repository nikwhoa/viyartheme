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

    <header class="header">
        <section>
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
        </section>
    </header>
    <main>
        <section>
            <div class="flex-container">
                <div class="flex-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad quia ipsum, tenetur deleniti officia quis reiciendis obcaecati. Aut, soluta voluptates exercitationem omnis quidem, delectus odit illum deserunt sint mollitia unde sunt magnam laudantium voluptate quod ex iure minus molestiae cumque minima. Similique, harum debitis corrupti sunt dicta reprehenderit? Dolorem!</div>
                <div class="flex-item">Rem illo doloribus cupiditate vero illum voluptatum quod quisquam autem qui aperiam praesentium suscipit tenetur mollitia, quae, distinctio voluptates velit. Dolorum sed libero eum cumque culpa soluta tempore harum at voluptates, repellendus ducimus illo iste quisquam ab consectetur porro aperiam ullam laborum praesentium modi officia dignissimos ea! Labore, eum suscipit.</div>
                <div class="flex-item">Voluptatum at aliquam reprehenderit consequuntur veritatis corporis rem ex porro blanditiis temporibus corrupti nulla, ducimus autem doloremque. Magni iste autem rerum adipisci quis vitae soluta dicta nulla corrupti mollitia recusandae, ipsa alias, quibusdam maiores sit, ab deleniti assumenda a ipsam distinctio eaque incidunt eveniet pariatur maxime. Sunt ipsam placeat dicta!</div>
            </div>
        </section>
    </main>