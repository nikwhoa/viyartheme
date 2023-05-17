<section class="speakers" id="speakers">
    <div class="speakers__title">
        <h2>НАШІ СПІКЕРИ</h2>
    </div>
    <div class="speakers__list swiper swiper-speakers">
        <div class="swiper-wrapper">


            <?php
            $loop = new WP_Query(
                array(
                    'post_type' => 'speakers',
                    'posts_per_page' => -1,
                    'order' => 'ASC',
                )
            );
            ?>

            <?php while ($loop->have_posts()):
                $loop->the_post(); ?>
                <div class="swiper-slide speaker">
                    <div class="speaker__photo">
                        <div class="photo-wrapper">
                            <div class="photo">
                                <img width="100%" height="auto"
                                    src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>"
                                    alt="speaker photo">
                            </div>
                        </div>
                    </div>
                    <div class="speaker__name">
                        <?php the_title(); ?>
                    </div>
                    <div class="speaker__info">
                        <?php the_content(); ?>
                    </div>
                    <div class="speaker__text">
                        <?php the_field('dopolnitelnyj_tekst_spikera') ?>
                    </div>
                </div>
            <?php endwhile;
            wp_reset_query();
            ?>



        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    <div class="speakers__register register-btn-wrapper">
        <a href="#prices" class="link">
            <button class="register-btn btn">Зареєструватися</button>
        </a>
    </div>
    <div class="speakers__mail-us">
        Якщо ви хочете стати нашим спікером, пишіть на <a href="mailto:academyviyar@gmail.com">пошту</a>
    </div>