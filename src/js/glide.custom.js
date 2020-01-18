//- Glide
window.addEventListener('load', function(){

    var input = document.querySelector('.glide')
    var glide = new Glide('.glide', {
      animationDuration: 1000,
      autoplay: 7000,
      type: 'carousel',
      focusAt: 'center',
      gap: 16,
      perView: 4,
      breakpoints: {
        1024: {
          perView: 4
        },
        768: {
          perView: 2
        },
        767: {
          perView: 1
        },
        320: {
          perView: 1
        }
      }
    })
    glide.mount()
  
    // var input = document.querySelector('#sVentajas')
    // var glide = new Glide('#sVentajas', {
    //   animationDuration: 1000,
    //   autoplay: false,
    //   type: 'carousel',
    //   focusAt: 'center',
    //   gap: 16,
    //   perView: 3.5,
    //   breakpoints: {
    //     1024: {
    //       perView: 3.5
    //     },
    //     768: {
    //       perView: 3
    //     },
    //     767: {
    //       perView: 1
    //     },
    //     320: {
    //       perView: 1
    //     }
    //   }
    // })
    // glide.mount()

    // var input = document.querySelector('#sVideo')
    // var glide = new Glide('#sVideo', {
    //   animationDuration: 1000,
    //   autoplay: false,
    //   type: 'carousel',
    //   focusAt: 'center',
    //   gap: 16,
    //   perView: 5,
    //   breakpoints: {
    //     1024: {
    //       perView: 5
    //     },
    //     768: {
    //       perView: 5
    //     },
    //     767: {
    //       perView: 2.5
    //     },
    //     320: {
    //       perView: 2.5
    //     }
    //   }
    // })
    // glide.mount()
  
    // var input = document.querySelector('#sBlog')
    // var glide = new Glide('#sBlog', {
    //   animationDuration: 1000,
    //   autoplay: false,
    //   type: 'carousel',
    //   focusAt: 'center',
    //   gap: 16,
    //   perView: 3,
    //   breakpoints: {
    //     1024: {
    //       perView: 3
    //     },
    //     768: {
    //       perView: 2
    //     },
    //     767: {
    //       perView: 1
    //     },
    //     320: {
    //       perView: 1
    //     }
    //   }
    // })
    // glide.mount()
  
  })