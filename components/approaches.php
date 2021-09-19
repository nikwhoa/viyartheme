<div class="approaches-bg"></div>
<main>
    <section class="approaches">
        <div class="approaches__title">
            <h2>ЧИ ПІДХОДИТЬ ВАМ ЦЕЙ КУРС?</h2>
            <div class="subtitle flex-container">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 22L9 16L11 14L15 18L24.3 8.7C22.3 6.4 19.3 5 16 5C9.9 5 5 9.9 5 16C5 22.1 9.9 27 16 27C22.1 27 27 22.1 27 16C27 14.3 26.6 12.6 25.9 11.1L15 22Z" fill="white" />
                </svg>

                Так, якщо хоча б один із цих пунктів вас описує
            </div>
        </div>
        <div class="approaches__dash-line">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/dash-line.png" alt="">
        </div>
        <div class="approaches__list flex-container">

            <?php
            $loop = new WP_Query(
                array(
                    'post_type' => 'approaches',
                    'posts_per_page' => 5,
                    'order'   => 'ASC',
                )
            );
            ?>

            <?php while ($loop->have_posts()) : $loop->the_post(); ?>
                <a href="#course-programme">
                    <div class="approaches-item">
                        <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> <?php the_title(); ?></div>
                        <div class="approaches-item__description"> <?php the_content(); ?> </div>
                    </div>
                </a>
            <?php endwhile;
            wp_reset_query(); ?>
        </div>
    </section>