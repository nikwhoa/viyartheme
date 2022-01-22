<section class="benefits" id="benefits">
    <div class="benefits__title">
        <h2>ПЕРЕВАГИ</h2>
    </div>
    <div class="benefits__list flex-container">

        <?php
            $loop = new WP_Query(
            array(
                'post_type' => 'benefits',
                'posts_per_page' => 4,
                'order' => 'ASC',
            )
        );
        ?>

        <?php while ($loop->have_posts()): $loop->the_post();?>
        <div class="benefit-item">
            <div class="benefit-item__feature-image">
                <div class="image-wrapper">
                    <div class="benefit-icon">
                        <?php the_field('icon_svg')?>
                    </div>
                </div>
            </div>
            <div class="benefit-item__divider"></div>
            <div class="benefit-item__title"><?php the_title();?></div>
            <div class="benefit-item__description">
                <?php the_content();?>
            </div>
        </div>
        <?php endwhile;
            wp_reset_query();
        ?>
    </div>
    <div class="benefits__button">
        <a href="#prices" class="link">
            <button class="register-btn btn">Зареєструватися</button>
        </a>
    </div>
</section>