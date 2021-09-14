/* eslint-disable no-trailing-spaces */



window.addEventListener('DOMContentLoaded', () => {
    const navWrapper = document.querySelector('.nav-wrapper'),
        hamburgerButton = document.querySelector(' .navigation__mobile-menu'),
        navigation = navWrapper.querySelector('.navigation__nav'),
        menu = navWrapper.querySelectorAll('.menu > li'),
        hamburgerOpenButton = document.querySelector('.mobile-menu-btn__open'),
        hamburgerCloseButton = document.querySelector('.mobile-menu-btn__close');



    window.addEventListener('scroll', () => {
        if (200 < window.pageYOffset /* added pageYOffset for ie */) {
            navWrapper.classList.add('sticky-nav');
            let logoJs = document.querySelector('.logo-js');
            logoJs.src = './wp-content/themes/viyartheme/assets/img/logo-svg-sticky.svg';
        } else if (100 > window.pageYOffset) {
            navWrapper.classList.remove('sticky-nav');
            let logoJs = document.querySelector('.logo-js');
            logoJs.src = './wp-content/themes/viyartheme/assets/img/logo-svg.svg';
        }
    });

    // eslint-disable-next-line yoda
    if (window.outerWidth <= 794) {
        navigation.classList.remove('flex-container');

        menu.forEach(el => {
            el.addEventListener('click', () => {
                navigation.classList.toggle('hamburger-navigation');
                document.documentElement.classList.remove('disable-scroll');
            });
        });

    }



    hamburgerButton.addEventListener('click', () => {
        navigation.classList.toggle('hamburger-navigation');


        hamburgerOpenButton.toggleAttribute('isOpened')
        // hamburgerOpenButton.classList.toggle('close-btn');

        if (hamburgerOpenButton.classList.contains('open-btn')) {
            hamburgerOpenButton.classList.replace('open-btn', 'close-btn')

        } else {
            hamburgerOpenButton.classList.replace('close-btn', 'open-btn')
        }

        const hamburgerLine = document.createElement('div');
        hamburgerLine.setAttribute('id', 'hamburgerLine');
        hamburgerLine.style.cssText = `
        width: 64px;
        height: 1px;
        background: #30A0F0;
        margin: 1rem auto;
        `;
        if (document.querySelector('#hamburgerLine')) {
            console.log('hamburgerLine is exist');
        } else {

            navigation.appendChild(hamburgerLine);
        }

        const hamburgerPhone = document.createElement('div');

        hamburgerPhone.classList.add('hamburger-phone');
        hamburgerPhone.innerHTML = `
        <a class="phone__link" href="tel:+380999999999">
        <div class="phone-icon flex-item">
        
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="phone-icon" d="M17.4912 13.2102L14.9792 10.6982C14.0821 9.80111 12.557 10.16 12.1981 11.3262C11.929 12.1337 11.0319 12.5822 10.2245 12.4028C8.43021 11.9542 6.00797 9.62168 5.55941 7.73772C5.29027 6.93027 5.82855 6.03314 6.63596 5.76404C7.80222 5.40519 8.16108 3.88007 7.26395 2.98295L4.752 0.470991C4.03429 -0.156997 2.95774 -0.156997 2.32975 0.470991L0.625214 2.17553C-1.07933 3.96978 0.804639 8.72455 5.02113 12.941C9.23763 17.1575 13.9924 19.1313 15.7866 17.337L17.4912 15.6324C18.1192 14.9147 18.1192 13.8382 17.4912 13.2102Z" fill="white" />
        </svg>
        
        </div>
        <div class="phone-number flex-item">
        +380 (99) 99 99 999
        </div>
        </a>
        `;

        if (document.querySelector('.hamburger-phone')) {
            console.log('already exist');
        } else {
            navigation.appendChild(hamburgerPhone);
        }


        document.documentElement.classList.toggle('disable-scroll');
        document.body.classList.toggle('disable-scroll');
    });

    const swiper = new Swiper('.swiper-speakers', {
        direction: 'horizontal',
        centerInsufficientSlides: true,
        slidesPerView: 5,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpointsBase: 'window',
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 480px
            700: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 760px
            760: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window width is >= 1160px
            1160: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });


    
    
    const swiperReview = new Swiper('.swiper-review', {
        init: true,
        slidesPerView: "auto",
        noSwipingClass: 'swiper-no-swiping',
        centeredSlides: true,
        watchOverflow: false,
        preventInteractionOnTransition: true,
        loopAdditionalSlides: 0,
        initialSlide: 1,
        loopPreventsSlide: false,
        loop: true,
        navigation: {
            nextEl: '.reviews-btn-next',
            prevEl: '.reviews-btn-prev'
        },
        pagination: {
            el: '.swiper-pagination-reviews',
            clickable: true
        }
    });



    videoPlay( '.js-videoPoster' );

    if (window.outerWidth <= 991.98) {
        tabs( '.tab', '.tab_block', '.tabs', 'active' );
    }
    
    
    let linkToDisable = document.querySelectorAll('.disable-default');
    linkToDisable.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
});

