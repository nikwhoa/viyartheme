<div class="approaches-bg"></div>
<main>
    <section class="approaches">
        <div class="approaches__title">
            <h2>ЧИ ПІДХОДИТЬ ВАМ ЦЕЙ КУРС?</h2>
            <div class="subtitle flex-container">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_on.svg" alt="Знайдіть пункти, які вам підходять">
                Знайдіть пункти, які вам підходять
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
                <div class="approaches-item">
                    <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> <?php the_title(); ?></div>
                    <div class="approaches-item__description"> <?php the_content(); ?> </div>
                </div>
            <?php endwhile;
            wp_reset_query(); ?>

            <!-- <div class="approaches-item">
                <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> Я мебляр-початківець</div>
                <div class="approaches-item__description">
                і не знаю, з чого почати, щоб вийти на новий рівень і масштабуватися
                </div>
            </div>
            <div class="approaches-item">
                <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> Я мебляр-початківець</div>
                <div class="approaches-item__description">
                і не знаю, з чого почати, щоб вийти на новий рівень і масштабуватися
                </div>
            </div>
            <div class="approaches-item">
                <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> Я мебляр-початківець</div>
                <div class="approaches-item__description">
                і не знаю, з чого почати, щоб вийти на новий рівень і масштабуватися
                </div>
            </div>
            <div class="approaches-item">
                <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> Я мебляр-початківець</div>
                <div class="approaches-item__description">
                і не знаю, з чого почати, щоб вийти на новий рівень і масштабуватися
                </div>
            </div>
            <div class="approaches-item">
                <div class="approaches-item__title"> <span><img src="<?php echo get_template_directory_uri(); ?>/assets/img/view_side_r.svg" alt=""></span> Я мебляр-початківець</div>
                <div class="approaches-item__description">
                і не знаю, з чого почати, щоб вийти на новий рівень і масштабуватися
                </div>
            </div> -->
        </div> 
    </section>