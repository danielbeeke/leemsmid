(async () => {
  const env = JSON.parse(document.querySelector('#env').innerHTML)
  const response = await fetch(`https://rss.app/api/widget/list/${env.instagram_feed}`)
  const json = await response.json()

  const instagramPosts = json.feed.items.map(item => ({
    title: item.description,
    media: item.enclosure.url
  }))

  const html = instagramPosts.map(post => {
    return `
    
    <div class="teaser experiment">
      <img alt="${post.title}" src="${post.media}">
      <h3 class="title">${post.title}</h3>
    </div>

    `
  })

  document.querySelector('#lab .inner').innerHTML = html.join('\n')
})()