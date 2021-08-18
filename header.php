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
        <div class="header__logo">
            <?php
            if (function_exists('the_custom_logo')) {
                the_custom_logo();
            }
            ?>
            test
        </div>
    </header>