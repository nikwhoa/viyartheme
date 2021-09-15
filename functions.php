<?php
define("WP_ROOT", __DIR__);
define("DSS", DIRECTORY_SEPARATOR);
require_once WP_ROOT . DSS . "post-types-settings/post-types-approaches.php";
require_once WP_ROOT . DSS . "post-types-settings/post-types-benefits.php";


function scripts()
{
    wp_register_style('style', get_template_directory_uri() . '/style.min.css', [], false, 'all');
    wp_enqueue_style('style');

    wp_register_script('app', get_template_directory_uri() . '/assets/js/custom.min.js', [], null, true);
    wp_enqueue_script('app');
    wp_register_script('vendor-js', get_template_directory_uri() . '/assets/js/vendor.min.js', [], null, true);
    wp_enqueue_script('vendor-js');
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

/**
 * Disable the emoji's
 */
function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
    add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
   }
   add_action( 'init', 'disable_emojis' );
   
   /**
    * Filter function used to remove the tinymce emoji plugin.
    * 
    * @param array $plugins 
    * @return array Difference betwen the two arrays
    */
   function disable_emojis_tinymce( $plugins ) {
    if ( is_array( $plugins ) ) {
    return array_diff( $plugins, array( 'wpemoji' ) );
    } else {
    return array();
    }
   }
   
   /**
    * Remove emoji CDN hostname from DNS prefetching hints.
    *
    * @param array $urls URLs to print for resource hints.
    * @param string $relation_type The relation type the URLs are printed for.
    * @return array Difference betwen the two arrays.
    */
   function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
    if ( 'dns-prefetch' == $relation_type ) {
    /** This filter is documented in wp-includes/formatting.php */
    $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
   
   $urls = array_diff( $urls, array( $emoji_svg_url ) );
    }
   
   return $urls;
   }

// Function to change email address

 
// Function to change sender name
function wpb_sender_name( $original_email_from ) {
    return 'Viyar Academy';
}
 
// Hooking up our functions to WordPress filters 
add_filter( 'wp_mail_from_name', 'wpb_sender_name' );