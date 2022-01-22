<?php

/* REGISTER CUSTOM POST TYPE FOR reviews */

function reviews_init() {
    $labels = array(
        'name'                  => _x( 'Отзывы участников', 'Post type general name', 'recipe' ),
        'singular_name'         => _x( 'Отзывы участников', 'Post type singular name', 'recipe' ),
        'menu_name'             => _x( 'Отзывы участников', 'Admin Menu text', 'recipe' ),
        'name_admin_bar'        => _x( 'Отзывы участников', 'Add New on Toolbar', 'recipe' ),
        'add_new'               => __( 'Добавить новый отзыв', 'recipe' ),
        'add_new_item'          => __( 'Добавить новый отзыв', 'recipe' ),
        'new_item'              => __( 'Новый отзыв', 'recipe' ),
        'edit_item'             => __( 'Редактировать отзыв', 'recipe' ),
        'view_item'             => __( 'Показать отзыв', 'recipe' ),
        'all_items'             => __( 'Все отзывы', 'recipe' ),
        'search_items'          => __( 'Искать', 'recipe' ),
        'not_found'             => __( 'Нет отзывов', 'recipe' ),
        'not_found_in_trash'    => __( 'Тут нет ничего.', 'recipe' ),
        'featured_image'        => _x( 'Заглушка отзыва', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'recipe' ),
        'set_featured_image'    => _x( 'Загрузить заглушку', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'recipe' ),
        'remove_featured_image' => _x( 'Удалить заглушку', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'recipe' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'recipe' ),
        'archives'              => _x( 'Архив отзывов', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'recipe' ),
        'insert_into_item'      => _x( 'Insert into recipe', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'recipe' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this recipe', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'recipe' ),
        'filter_items_list'     => _x( 'Filter recipes list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'recipe' ),
        'items_list_navigation' => _x( 'Recipes list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'recipe' ),
        'items_list'            => _x( 'Recipes list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'recipe' ),
    );     
    $args = array(
        'labels'             => $labels,
        'description'        => 'reviews custom post type.',
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'reviews' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'supports'           => array( 'title', 'thumbnail' ),
        // 'taxonomies'         => array( 'category', 'post_tag' ),
        'show_in_rest'       => true
    );
      
    register_post_type( 'reviews', $args );
}
add_action( 'init', 'reviews_init' );