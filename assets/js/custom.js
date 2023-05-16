'use strict';

/* eslint-disable no-trailing-spaces */
window.addEventListener('DOMContentLoaded', function () {
  const headerMenuItems = document.querySelectorAll(
    '#menu-header-menu .menu-item'
  );

  headerMenuItems.forEach((item) => {
    item.addEventListener('touchend', () => {
      document
        .querySelector('.navigation__nav')
        .classList.remove('hamburger-navigation');

      document.querySelector('.mobile-menu-btn__open').toggleAttribute('isOpened');
      document.querySelector('.mobile-menu-btn__open').classList.replace('close-btn', 'open-btn');
      document.documentElement.classList.remove('disable-scroll');

    });
  });

  document.querySelector('#offline-tab').classList.add('active');
  document.querySelector('#post_number-80').classList.add('active');

  document.querySelector('#online-tab').addEventListener('click', function () {
    document.querySelector('#online-tab').classList.add('active');
    document.querySelector('#offline-tab').classList.remove('active');
    document.querySelector('#post_number-80').classList.remove('active');
    document.querySelector('#post_number-88').classList.add('active');
  });
  document.querySelector('#offline-tab').addEventListener('click', function () {
    console.log('offline-tab');
    document.querySelector('#offline-tab').classList.add('active');
    document.querySelector('#online-tab').classList.remove('active');
    document.querySelector('#post_number-88').classList.remove('active');
    document.querySelector('#post_number-80').classList.add('active');
  });
  var navWrapper = document.querySelector('.nav-wrapper'),
    hamburgerButton = document.querySelector(' .navigation__mobile-menu'),
    navigation = navWrapper.querySelector('.navigation__nav'),
    menu = navWrapper.querySelectorAll('.menu > li'),
    hamburgerOpenButton = document.querySelector('.mobile-menu-btn__open'),
    hamburgerCloseButton = document.querySelector('.mobile-menu-btn__close');
  window.addEventListener('scroll', function () {
    if (
      200 < window.pageYOffset
      /* added pageYOffset for ie */
    ) {
      navWrapper.classList.add('sticky-nav');
      var logoJs = document.querySelector('.logo-js');
      logoJs.src =
        './wp-content/themes/viyartheme/assets/img/logo-svg-sticky.svg';
    } else if (100 > window.pageYOffset) {
      navWrapper.classList.remove('sticky-nav');

      var _logoJs = document.querySelector('.logo-js');

      _logoJs.src = './wp-content/themes/viyartheme/assets/img/logo-svg.svg';
    }
  }); // eslint-disable-next-line yoda

  if (window.outerWidth <= 794) {
    navigation.classList.remove('flex-container');
    menu.forEach(function (el) {
      el.addEventListener('click', function () {
        navigation.classList.toggle('hamburger-navigation');
        document.documentElement.classList.remove('disable-scroll');
      });
    });
  }

  hamburgerButton.addEventListener('click', function () {
    navigation.classList.toggle('hamburger-navigation');
    hamburgerOpenButton.toggleAttribute('isOpened'); // hamburgerOpenButton.classList.toggle('close-btn');

    if (hamburgerOpenButton.classList.contains('open-btn')) {
      hamburgerOpenButton.classList.replace('open-btn', 'close-btn');
    } else {
      hamburgerOpenButton.classList.replace('close-btn', 'open-btn');
    }

    var hamburgerLine = document.createElement('div');
    hamburgerLine.setAttribute('id', 'hamburgerLine');
    hamburgerLine.style.cssText =
      '\n        width: 64px;\n        height: 1px;\n        background: #30A0F0;\n        margin: 1rem auto;\n        ';

    if (document.querySelector('#hamburgerLine')) {
      console.log('hamburgerLine is exist');
    } else {
      navigation.appendChild(hamburgerLine);
    }

    var hamburgerPhone = document.createElement('div');
    hamburgerPhone.classList.add('hamburger-phone');
    hamburgerPhone.innerHTML =
      '\n        <a class="phone__link" href="tel:+380978929786"> \n        <div class="phone-icon flex-item">\n        \n        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path id="phone-icon" d="M17.4912 13.2102L14.9792 10.6982C14.0821 9.80111 12.557 10.16 12.1981 11.3262C11.929 12.1337 11.0319 12.5822 10.2245 12.4028C8.43021 11.9542 6.00797 9.62168 5.55941 7.73772C5.29027 6.93027 5.82855 6.03314 6.63596 5.76404C7.80222 5.40519 8.16108 3.88007 7.26395 2.98295L4.752 0.470991C4.03429 -0.156997 2.95774 -0.156997 2.32975 0.470991L0.625214 2.17553C-1.07933 3.96978 0.804639 8.72455 5.02113 12.941C9.23763 17.1575 13.9924 19.1313 15.7866 17.337L17.4912 15.6324C18.1192 14.9147 18.1192 13.8382 17.4912 13.2102Z" fill="white" />\n        </svg>\n        \n        </div>\n        <div class="phone-number flex-item">\n        \n        +380 97 892 97 86\n                    \n        </div>\n        </a>\n        ';

    if (document.querySelector('.hamburger-phone')) {
      console.log('already exist');
    } else {
      navigation.appendChild(hamburgerPhone);
    }

    document.documentElement.classList.toggle('disable-scroll');
    document.body.classList.toggle('disable-scroll');
  });
  var swiper = new Swiper('.swiper-speakers', {
    direction: 'horizontal',
    centerInsufficientSlides: true,
    slidesPerView: 5,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpointsBase: 'window',
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 760px
      760: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 1160px
      1160: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
  var swiperReview = new Swiper('.swiper-review', {
    init: true,
    slidesPerView: 'auto',
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
      prevEl: '.reviews-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination-reviews',
      clickable: true,
    },
  });
  videoPlay('.js-videoPoster');

  if (window.outerWidth <= 991.98) {
    tabs('.tab', '.tab_block', '.tabs', 'active');
  }

  var linkToDisable = document.querySelectorAll('.disable-default');
  linkToDisable.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});
('use strict');

var question = document.querySelectorAll('.question'),
  answers = document.querySelectorAll('.answer');

for (var i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    var setClasses = !this.classList.contains('active');
    setClass(question, 'active', 'remove');
    setClass(answers, 'show', 'remove');

    if (setClasses) {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    }
  });
}

function setClass(els, className, fnName) {
  for (var _i = 0; _i < els.length; _i++) {
    els[_i].classList[fnName](className);
  }
} // question.forEach(el => {
//     el.addEventListener('click', (e) => {
//         hideAll();
//         el.children[1].classList.toggle( 'show' );
//     });
// });
// function hideAll() {
//     for ( let i = 0; i < question.length; i++ ) {
//         question[i].children[1].classList.toggle( 'show', false );
//     }
// };
('use strict');

// Get the modal
var modalCall = document.querySelector(".hf-form[data-id='56']");
var modalRegisterOffline = document.querySelector(".hf-form[data-id='57']");
var modalRegisterOnline = document.querySelector(".hf-form[data-id='58']");
var callBtn = document.querySelectorAll('#call-order');
var registerBtnOffline = document.querySelector('#register-button-offline');
var registerBtnOnline = document.querySelector('#register-button-online');
var closeModal = document.querySelectorAll('.close-modal');
var formModal = document.querySelectorAll('.hf-form');
var backToHomeBtns = [
  document.querySelector('.form__success-56'),
  document.querySelector('.form__success-57'),
];
callBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modalCall.style.display = 'block';
  });
});
closeModal.forEach(function (el) {
  el.addEventListener('click', function () {
    formModal.forEach(function (element) {
      element.style.display = 'none';
    });
  });
  document.addEventListener('keydown', function (e) {
    if ('Escape' === e.key) {
      formModal.forEach(function (element) {
        element.style.display = 'none';
      });
    }
  });
});
registerBtnOffline.addEventListener('click', function () {
  modalRegisterOffline.style.display = 'block';
});
registerBtnOnline.addEventListener('click', function () {
  modalRegisterOnline.style.display = 'block';
});
var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.oldValue === 'hf-form hf-form-56 mc4wp-loading') {
      backToHomeBtns[0].style.display = 'block';
    } else if (mutation.oldValue === 'hf-form hf-form-57 mc4wp-loading') {
      backToHomeBtns[1].style.display = 'block';
    } else if (mutation.oldValue === 'hf-form hf-form-58 mc4wp-loading') {
      backToHomeBtns[1].style.display = 'block';
    }
  });
});
formModal.forEach(function (form) {
  mutationObserver.observe(form, {
    attributes: true,
    attributeOldValue: true,
  });
});
('use strict');

function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  var tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    var i =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach(function (item, i) {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
('use strict');

// window.addEventListener('DOMContentLoaded', function (event) {
//   // timer
//   var timer = document.querySelector('.timer');
//   var days = timer.querySelector('.days');
//   var hours = timer.querySelector('.hours');
//   var minutes = timer.querySelector('.minutes');
//   var second = timer.querySelector('.seconds');
//   var dead = 'February 15 2022 18:00:00 GMT+0200';

//   function getTimeRemaining(endtime) {
//     var total = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((total / 1000) % 60);
//     var minutes = Math.floor((total / 1000 / 60) % 60);
//     var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(total / (1000 * 60 * 60 * 24));
//     var secondsToDisplay = seconds
//       .toLocaleString('en-US', {
//         minimumIntegerDigits: 2,
//         useGrouping: false,
//       })
//       .split('')
//       .map(function (num) {
//         return Number(num);
//       });
//     var minutesToDisplay = minutes
//       .toLocaleString('en-US', {
//         minimumIntegerDigits: 2,
//         useGrouping: false,
//       })
//       .split('')
//       .map(function (num) {
//         return Number(num);
//       });
//     var hoursToDisplay = hours
//       .toLocaleString('en-US', {
//         minimumIntegerDigits: 2,
//         useGrouping: false,
//       })
//       .split('')
//       .map(function (num) {
//         return Number(num);
//       });
//     var daysToDisplay = days
//       .toLocaleString('en-US', {
//         minimumIntegerDigits: 2,
//         useGrouping: false,
//       })
//       .split('')
//       .map(function (num) {
//         return Number(num);
//       });
//     return {
//       total: total,
//       days: days,
//       hours: hours,
//       minutes: minutes,
//       seconds: seconds,
//       daysToDisplay: daysToDisplay,
//       minutesToDisplay: minutesToDisplay,
//       secondsToDisplay: secondsToDisplay,
//       hoursToDisplay: hoursToDisplay,
//     };
//   }

//   function declOfNum(number, titles) {
//     var cases = [2, 0, 1, 1, 1, 2];
//     return titles[
//       number % 100 > 4 && number % 100 < 20
//         ? 2
//         : cases[number % 10 < 5 ? number % 10 : 5]
//     ];
//   }

//   function daysaaaa(day) {
//     if (1 === day) {
//       return 'день';
//     } else if (day === 0) {
//       return 'днiв';
//     } else {
//       return 'днi';
//     }
//   }

//   var aaaa = getTimeRemaining(dead).daysToDisplay.map(function (item) {
//     return "<div class='timer-bg'>".concat(item, '</div>');
//   });
//   days.innerHTML = "<div class='timer-bg'>"
//     .concat(
//       getTimeRemaining(dead).daysToDisplay[0],
//       "</div> <div class='timer-bg'>"
//     )
//     .concat(
//       getTimeRemaining(dead).daysToDisplay[1],
//       "</div>  <div class='timer-extra'> "
//     )
//     .concat(daysaaaa(getTimeRemaining(dead).days), ' </div>');

//   function showHours(hours) {
//     return declOfNum(hours, ['година', 'години', 'годин']);
//   }

//   hours.innerHTML = "<div class='timer-bg'>"
//     .concat(
//       getTimeRemaining(dead).hoursToDisplay[0],
//       "</div> <div class='timer-bg'>"
//     )
//     .concat(
//       getTimeRemaining(dead).hoursToDisplay[1],
//       "</div> <div class='timer-extra'> "
//     )
//     .concat(showHours(getTimeRemaining(dead).hours), '</div>');

//   function showMinutes(minutes) {
//     return declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
//   }

//   minutes.innerHTML = "<div class='timer-bg'>"
//     .concat(
//       getTimeRemaining(dead).minutesToDisplay[0],
//       "</div> <div class='timer-bg'>"
//     )
//     .concat(
//       getTimeRemaining(dead).minutesToDisplay[1],
//       "</div> <div class='timer-extra'>"
//     )
//     .concat(showMinutes(getTimeRemaining(dead).minutes), '</div>');

//   function showSeconds(seconds) {
//     return declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
//   }

//   second.innerHTML = "<div class='timer-bg'>"
//     .concat(
//       getTimeRemaining(dead).secondsToDisplay[0],
//       "</div> <div class='timer-bg'>"
//     )
//     .concat(
//       getTimeRemaining(dead).secondsToDisplay[1],
//       "</div> <div class='timer-extra'> "
//     )
//     .concat(showSeconds(getTimeRemaining(dead).seconds), '</div>');
//   setInterval(function () {
//     function daysaaaa(day) {
//       if (day === 1) {
//         return 'день';
//       } else if (day === 0) {
//         return 'днiв';
//       } else {
//         return 'днi';
//       }
//     }

//     var aaaa = getTimeRemaining(dead).daysToDisplay.map(function (item) {
//       return "<div class='timer-bg'>".concat(item, '</div>');
//     });
//     days.innerHTML = "<div class='timer-bg'>"
//       .concat(
//         getTimeRemaining(dead).daysToDisplay[0],
//         "</div> <div class='timer-bg'>"
//       )
//       .concat(
//         getTimeRemaining(dead).daysToDisplay[1],
//         "</div>  <div class='timer-extra'> "
//       )
//       .concat(daysaaaa(getTimeRemaining(dead).days), ' </div>');

//     function showHours(hours) {
//       return declOfNum(hours, ['година', 'години', 'годин']);
//     }

//     hours.innerHTML = "<div class='timer-bg'>"
//       .concat(
//         getTimeRemaining(dead).hoursToDisplay[0],
//         "</div> <div class='timer-bg'>"
//       )
//       .concat(
//         getTimeRemaining(dead).hoursToDisplay[1],
//         "</div> <div class='timer-extra'> "
//       )
//       .concat(showHours(getTimeRemaining(dead).hours), '</div>');

//     function showMinutes(minutes) {
//       return declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
//     }

//     minutes.innerHTML = "<div class='timer-bg'>"
//       .concat(
//         getTimeRemaining(dead).minutesToDisplay[0],
//         "</div> <div class='timer-bg'>"
//       )
//       .concat(
//         getTimeRemaining(dead).minutesToDisplay[1],
//         "</div> <div class='timer-extra'>"
//       )
//       .concat(showMinutes(getTimeRemaining(dead).minutes), '</div>');

//     function showSeconds(seconds) {
//       return declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
//     }

//     second.innerHTML = "<div class='timer-bg'>"
//       .concat(
//         getTimeRemaining(dead).secondsToDisplay[0],
//         "</div> <div class='timer-bg'>"
//       )
//       .concat(
//         getTimeRemaining(dead).secondsToDisplay[1],
//         "</div> <div class='timer-extra'> "
//       )
//       .concat(showSeconds(getTimeRemaining(dead).seconds), '</div>');
//   }, 1000);
// });
('use strict');

// eslint-disable-next-line no-unused-vars
function videoPlay(button) {
  var youTubeButton = document.querySelectorAll(button);
  youTubeButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.target.previousElementSibling.setAttribute(
        'src',
        e.target.previousElementSibling.getAttribute('data-src')
      );
      e.target.parentNode.classList.toggle('videoWrapperActive');
    });
  });
}
