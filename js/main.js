$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  $('.clients__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });






  // GSAP ANIMATION

  let gsapLeft = document.querySelectorAll('.gsap-left');
  let gsapRight = document.querySelectorAll('.gsap-right');
  let gsapPerson = document.querySelectorAll('.gsap-person');

  gsap.registerPlugin(ScrollTrigger);





  for (let i = 0; i < gsapLeft.length; i++) {
    gsap.from(gsapLeft[i], {
      scrollTrigger: {
        trigger: gsapLeft[i],
        start: 'top 80%',
        end: 'top 70%',
        scrub: 3,
        toggleActions: 'restart none none restart',
      },
      // stagger: 0.1,
      ease: 'Back.easeOut',
      opacity: 0,
      xPercent: -100,
      duration: 2,
    });

  }


  for (let i = 0; i < gsapRight.length; i++) {
    gsap.from(gsapRight[i], {
      scrollTrigger: {
        trigger: gsapRight[i],
        start: 'top 80%',
        end: 'top 70%',
        scrub: 3,
        toggleActions: 'restart none none restart',
      },
      // stagger: 0.1,
      ease: 'Back.easeOut',
      opacity: 0,
      xPercent: 100,
      duration: 2,
    });

  }

  for (let i = 0; i < gsapPerson.length; i++) {
    gsap.from(gsapPerson[i], {
      scrollTrigger: {
        trigger: gsapPerson[i],
        start: 'top 80%',
        end: 'top 70%',
        scrub: 3,
        toggleActions: 'restart none none restart',
      },
      // stagger: 0.1,
      ease: 'Back.easeOut',
      opacity: 0,
      duration: 2,
      delay: 1,
    });

  }

  gsap.from('.about__person', {
    scrollTrigger: {
      trigger: '.about__person',
      start: 'top 80%',
      end: 'top 70%',

      scrub: 3,
      toggleActions: 'restart none none restart',
    },
    opacity: 0,
    duration: 1
  })

gsap.from('.footer__title',{
  scrollTrigger: {
    trigger: '.footer__title',
    start: 'top 90%',
    toggleActions: 'restart none none play',
    markers: true,
  },
  opacity: 0,
  duration: 1,
  ease: 'Back.easeIn',
})













});