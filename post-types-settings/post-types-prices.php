<?php

/* REGISTER CUSTOM POST TYPE FOR speakers */

function prices_init() {
    $labels = array(
        'name'                  => _x( 'Цены', 'Post type general name', 'recipe' ),
        'singular_name'         => _x( 'Цены', 'Post type singular name', 'recipe' ),
        'menu_name'             => _x( 'Цены', 'Admin Menu text', 'recipe' ),
        'name_admin_bar'        => _x( 'Цены', 'Add New on Toolbar', 'recipe' ),
        'add_new'               => __( 'Добавить', 'recipe' ),
        'add_new_item'          => __( 'Добавить', 'recipe' ),
        'new_item'              => __( 'Новый', 'recipe' ),
        'edit_item'             => __( 'Редактировать', 'recipe' ),
        'view_item'             => __( 'Показать', 'recipe' ),
        'all_items'             => __( 'Все', 'recipe' ),
        'search_items'          => __( 'Искать', 'recipe' ),
        'not_found'             => __( 'Ничего не найдено', 'recipe' ),
        'not_found_in_trash'    => __( 'Тут нет ничего.', 'recipe' ),
        'archives'              => _x( 'Архив спикеров', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'recipe' ),
        'insert_into_item'      => _x( 'Insert into recipe', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'recipe' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this recipe', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'recipe' ),
        'filter_items_list'     => _x( 'Filter recipes list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'recipe' ),
        'items_list_navigation' => _x( 'Recipes list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'recipe' ),
        'items_list'            => _x( 'Recipes list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'recipe' ),
    );     
    $args = array(
        'labels'             => $labels,
        'description'        => 'Speakers custom post type.',
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'prices' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'supports'           => array( 'title'),
        // 'taxonomies'         => array( 'category', 'post_tag' ),
        'show_in_rest'       => true
    );
      
    register_post_type( 'prices', $args );
}
add_action( 'init', 'prices_init' );