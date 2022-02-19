import PhotoSwipeLightbox from '/scripts/photoswipe-lightbox.esm.js';
if (document.querySelector('.showcase.full')) {

  const lightbox = new PhotoSwipeLightbox({
    gallery: '.showcase.full',
    children: 'a.image',
    pswpModule: '/scripts/photoswipe.esm.js'
  });
  
  lightbox.init();
}

const moreShowcases = document.querySelector('.show-more-showcases')
if (moreShowcases) {
  moreShowcases.classList.add('js')
  moreShowcases.addEventListener('click', () => {
    if (document.body.classList.contains('has-more-showcases-transition')) {
      document.body.classList.toggle('has-more-showcases')

      setTimeout(() => {
        document.body.classList.toggle('has-more-showcases-transition')
      }, 300) 
    }
    else {
      document.body.classList.toggle('has-more-showcases-transition')

      setTimeout(() => {
        document.body.classList.toggle('has-more-showcases')
      }, 10)  
    }

  })
}