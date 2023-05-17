<footer class="footer">
    <div class="footer-wrapper">
        <div class="footer__logo">
            <a href="" class="custom-logo-link">
                <picture>
                    <img width="100%" height="auto" class="logo-js" src="<?php echo get_template_directory_uri(); ?>/assets/img/logo-svg.svg" alt="">
                </picture>
            </a>
        </div>
        <?php
        wp_nav_menu(array(
            'theme_location' => 'header-nav',
            'container' => 'nav',
            'container_class' => 'footer__nav flex-container',
        ));
        ?>
        <div class="footer__social-icon">
            <div class="inst">

                <a target="_blank" href="https://www.instagram.com/viyar.ua/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 0H7.5C3.3585 0 0 3.3585 0 7.5V16.5C0 20.6415 3.3585 24 7.5 24H16.5C20.6415 24 24 20.6415 24 16.5V7.5C24 3.3585 20.6415 0 16.5 0ZM21.75 16.5C21.75 19.395 19.395 21.75 16.5 21.75H7.5C4.605 21.75 2.25 19.395 2.25 16.5V7.5C2.25 4.605 4.605 2.25 7.5 2.25H16.5C19.395 2.25 21.75 4.605 21.75 7.5V16.5Z" fill="white" />
                        <path d="M12 6C8.6865 6 6 8.6865 6 12C6 15.3135 8.6865 18 12 18C15.3135 18 18 15.3135 18 12C18 8.6865 15.3135 6 12 6ZM12 15.75C9.933 15.75 8.25 14.067 8.25 12C8.25 9.9315 9.933 8.25 12 8.25C14.067 8.25 15.75 9.9315 15.75 12C15.75 14.067 14.067 15.75 12 15.75Z" fill="white" />
                        <path d="M18.45 6.34948C18.8916 6.34948 19.2495 5.99154 19.2495 5.54999C19.2495 5.10844 18.8916 4.75049 18.45 4.75049C18.0085 4.75049 17.6505 5.10844 17.6505 5.54999C17.6505 5.99154 18.0085 6.34948 18.45 6.34948Z" fill="white" />
                    </svg>
                </a>
            </div>
            <div class="fb">
                <a target="_blank" href="https://www.facebook.com/viyar.ua">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0H3C1.3455 0 0 1.3455 0 3V21C0 22.6545 1.3455 24 3 24H12V15.75H9V12H12V9C12 6.5145 14.0145 4.5 16.5 4.5H19.5V8.25H18C17.172 8.25 16.5 8.172 16.5 9V12H20.25L18.75 15.75H16.5V24H21C22.6545 24 24 22.6545 24 21V3C24 1.3455 22.6545 0 21 0Z" fill="white" />
                    </svg>

                </a>
            </div>
        </div>
    </div>
</footer>