const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    onOpen: () => {
        console.log('Lightbox opened')
    },
    beforeSlideLoad: (slide, data) => {
        // Need to execute a script in the slide?
        // You can do that here...
    }
  });