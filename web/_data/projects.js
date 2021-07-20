const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePost (post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() }),
    intro: BlocksToMarkdown(post.intro, { serializers, ...client.config() }),
    coverImages: BlocksToMarkdown(post.coverImages, { serializers, ...client.config() }),
    storyboard: BlocksToMarkdown(post.storyboard, { serializers, ...client.config() }),
  }
}

async function getPosts () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "projects"]`
  const projection = groq`{
    _id,
    selected,
    publishedAt,
    title,
    subtitle,
    slug,
    excerpt,
    body,
    intro,
    coverImages,
    storyboard,
    resources,
    tags,
    categories[]->
  }`
  const order = `| order(publishedAt desc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePosts = reducedDocs.map(generatePost)
  return preparePosts
}

module.exports = getPosts
