document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    requestAnimationFrame(() => {
      const details = document.querySelectorAll('.teaser.faq')
  
      for (const [index, detail] of details.entries()) {
        detail.setAttribute('open', '')
        const answer = detail.querySelector('.answer')          
        detail.style.setProperty('--height', answer.clientHeight + "px")
        detail.style.setProperty('--all-height', detail.clientHeight + "px")
        detail.classList.add('js')
  
        setTimeout(() => {
          detail.classList.add('loaded')
        }, 100)
  
        const title = detail.querySelector('.title')
        title.addEventListener('click', (event) => {
          if (index === 3 && !document.body.classList.contains('has-all-faqs-visible') && !detail.classList.contains('open')) {
            document.body.classList.toggle('has-all-faqs-visible')
          }

          event.preventDefault()
          const openDetail = document.querySelector('.faq.teaser.open')
          if (openDetail !== detail) openDetail?.classList.remove('open')
          detail.classList.toggle('open')


          if (window.innerWidth > 920) {
            const openDetail = document.querySelector('.faq.teaser.open')
            if (!openDetail) details[0].classList.add('open')
          }
        })
      }

      if (window.innerWidth > 920) {
        const openDetail = document.querySelector('.faq.teaser.open')
        if (!openDetail && details.length) details[0].classList.add('open')
      }

    })
  }, 200)
})

const showAllFaqs = document.querySelector('.show-all-faqs')
if (showAllFaqs) {
  showAllFaqs.classList.add('js')
  showAllFaqs.addEventListener('click', () => {
    document.body.classList.toggle('has-all-faqs-visible')
  })
}
