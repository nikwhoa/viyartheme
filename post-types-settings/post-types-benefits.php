<?php

/* REGISTER CUSTOM POST TYPE FOR BENEFITS ON BLOCK 3 - BENEFITS */

function benefits_init() {
    $labels = array(
        'name'                  => _x( 'Преимущества', 'Post type general name', 'recipe' ),
        'singular_name'         => _x( 'Преимущество', 'Post type singular name', 'recipe' ),
        'menu_name'             => _x( 'Преимущества', 'Admin Menu text', 'recipe' ),
        'name_admin_bar'        => _x( 'Преимущества', 'Add New on Toolbar', 'recipe' ),
        'add_new'               => __( 'Добавить преимущество', 'recipe' ),
        'add_new_item'          => __( 'Додати новое преимущество', 'recipe' ),
        'new_item'              => __( 'Новое преимущество', 'recipe' ),
        'edit_item'             => __( 'Редактировать преимущество', 'recipe' ),
        'view_item'             => __( 'Показать преимущество', 'recipe' ),
        'all_items'             => __( 'Все преимущества', 'recipe' ),
        'search_items'          => __( 'Искать', 'recipe' ),
        'not_found'             => __( 'Нет преимущество', 'recipe' ),
        'not_found_in_trash'    => __( 'Тут нет ничего.', 'recipe' ),
        'featured_image'        => _x( 'Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'recipe' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'recipe' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'recipe' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'recipe' ),
        'archives'              => _x( 'Архiв переваг', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'recipe' ),
        'insert_into_item'      => _x( 'Insert into recipe', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'recipe' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this recipe', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'recipe' ),
        'filter_items_list'     => _x( 'Filter recipes list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'recipe' ),
        'items_list_navigation' => _x( 'Recipes list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'recipe' ),
        'items_list'            => _x( 'Recipes list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'recipe' ),
    );     
    $args = array(
        'labels'             => $labels,
        'description'        => 'Benefits custom post type.',
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'benefits' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
        // 'taxonomies'         => array( 'category', 'post_tag' ),
        'show_in_rest'       => true
    );
      
    register_post_type( 'Benefits', $args );
}
add_action( 'init', 'benefits_init' );