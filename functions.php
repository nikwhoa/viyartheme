<?php


function scripts()
{
    wp_register_style('style', get_template_directory_uri() . '/style.min.css', [], 1, 'all');
    wp_enqueue_style('style');

    wp_register_script('app', get_template_directory_uri() . '/assets/js/custom.min.js', [], 1, true);
    wp_enqueue_script('app');
}
add_action('wp_enqueue_scripts', 'scripts');

// logo set up
function themename_custom_logo_setup()
{
    $defaults = array(
        'height'               => 'auto',
        'width'                => '100%',
        'flex-height'          => true,
        'flex-width'           => true,
        'header-text'          => array('site-title', 'site-description'),
        'unlink-homepage-logo' => false,
    );

    add_theme_support('custom-logo', $defaults);
}

add_action('after_setup_theme', 'themename_custom_logo_setup');

// add svg files to media library
function my_custom_mime_types($mimes)
{

    // New allowed mime types.
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    $mimes['doc'] = 'application/msword';

    // Optional. Remove a mime type.
    unset($mimes['exe']);

    return $mimes;
}
add_filter('upload_mimes', 'my_custom_mime_types');

// register menu

function register_menu()
{
    register_nav_menu('header-nav', __('Header Menu'));
}
add_action('init', 'register_menu');
