
    <div class="faq-wrapper">
<section class="faq" id="faq">
    <div class="faq__title">
        <h2>МАЄТЕ ЗАПИТАННЯ?
            <span> А МИ ВЖЕ МАЄМО ВІДПОВІДІ!</span>
        </h2>
    </div>
    <div class="faq__questions">
        
        <?php
            $loop = new WP_Query(
            array(
                'post_type' => 'questions',
                'posts_per_page' => -1,
                'order' => 'ASC',
            )
        );
        ?>

        <?php while ($loop->have_posts()): $loop->the_post();?>
        <div class="question-item">
            <div class="question"><span><?php the_title(); ?></span>
            <div class="question__btn">
                    <div class="button"></div>
                </div>
            </div>
            <div class="answer"><?php the_field('otvet');  ?></div>
        </div>
        <?php endwhile; wp_reset_query(); ?>
    </div>
    <div class="faq__register register-btn-wrapper">
        <a href="#prices" class="link">
            <button class="register-btn btn">Зареєструватися</button>
        </a>
    </div>
</section>
</div>