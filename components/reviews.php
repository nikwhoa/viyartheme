<div class="reviews" id="reviews">
    <div class="reviews__title">
        <h2>ВІДГУКИ УЧАСНИКІВ</h2>
    </div>
    <div class="reviews__list swiper swiper-review swiper-no-swiping">
        <div class="swiper-wrapper">


        <?php
            $loop = new WP_Query(
            array(
                'post_type' => 'reviews',
                'posts_per_page' => -1,
                'order' => 'ASC',
            )
        );
        ?>

        <?php while ($loop->have_posts()): $loop->the_post();?>
        <div class="swiper-slide review">
                <div class="video_wrapper video_wrapper_full js-videoWrapper">
                    <iframe class="videoIframe js-videoIframe" src="" allow="autoplay" frameborder="0" allowTransparency="true" allowfullscreen data-src="<?php the_field('ssylka_na_otzyv') ?>?autoplay=1&modestbranding=1&rel=0&hl=ru&showinfo=0&color=white"></iframe>
                    <button class="videoPoster js-videoPoster" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>')"></button>
                </div>
                <div class="review__name"><?php the_title(); ?></div>
            </div>
        <?php endwhile;
            wp_reset_query();
        ?>

        </div>

    </div>
    <div class="swiper-pagination-reviews"></div>
    <div class="reviews-btn-prev reviews-btn"></div>
    <div class="reviews-btn-next reviews-btn"></div>

    <div class="reviews__register register-btn-wrapper">
        <a href="#prices" class="link">
            <button class="register-btn btn">Зареєструватися</button>
        </a>
    </div>
</div>

</section>