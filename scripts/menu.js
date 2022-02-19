const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('has-menu-open')
})

const links = document.querySelectorAll('.menu-item')
for (const link of links) {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href')
    const isOnPage = href.substring(0, 2) === '/#'

    if (isOnPage) {
      let element = document.querySelector(href.substring(1))

      setTimeout(() => {
        document.body.classList.remove('has-menu-open')
      }, 500)

      if (element) {
        event.preventDefault()
        if (href === '#contact') {
          element = document.querySelector('#bottom')
        }
  
        element.scrollIntoView({ behavior: 'smooth' })  
      }
    }
  })
}

const setMenuBar = () => {
  const blocks = document.querySelectorAll('.block')
  if (!blocks.length) return
  let most = 0
  let mostBlock = null
  for (const block of blocks) {
    const percentageVisible = getViewPercentage(block)
    
    if (percentageVisible > most) {
      most = percentageVisible
      mostBlock = block
    }
  }

  const activeMenuItem = document.querySelector(`.menu-item[for="${mostBlock.id}"]`)
  const currentActive = document.querySelector('.menu-item.active')
  if (activeMenuItem !== currentActive) {
    currentActive?.classList.remove('active')
    activeMenuItem.classList.add('active')
  }
}

window.addEventListener('scroll', setMenuBar)
setMenuBar()

function getViewPercentage(element) {
  const viewport = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + window.innerHeight
  };

  const elementBoundingRect = element.getBoundingClientRect();
  const elementPos = {
    top: elementBoundingRect.y + window.pageYOffset,
    bottom: elementBoundingRect.y + elementBoundingRect.height + window.pageYOffset
  };

  if (viewport.top > elementPos.bottom || viewport.bottom < elementPos.top) {
    return 0;
  }

  // Element is fully within viewport
  if (viewport.top < elementPos.top && viewport.bottom > elementPos.bottom) {
    return 100;
  }

  // Element is bigger than the viewport
  if (elementPos.top < viewport.top && elementPos.bottom > viewport.bottom) {
    return 100;
  }

  const elementHeight = elementBoundingRect.height;
  let elementHeightInView = elementHeight;

  if (elementPos.top < viewport.top) {
    elementHeightInView = elementHeight - (window.pageYOffset - elementPos.top);
  }

  if (elementPos.bottom > viewport.bottom) {
    elementHeightInView = elementHeightInView - (elementPos.bottom - viewport.bottom);
  }

  const percentageInView = (elementHeightInView / window.innerHeight) * 100;

  return Math.round(percentageInView);
}
