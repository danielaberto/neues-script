// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import home from './documents/home'
import projects from './documents/projects'
import about from './documents/about'
import services from './documents/services'
import footer from './documents/footer'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import externalLink from './objects/link'
import category from './objects/category'
import videoLink from './objects/videoLink'
import audioLink from './objects/audioLink'
import embed from './objects/embed'
import projectSettings from './documents/projectSettings'
import postSettings from './documents/postSettings'
import infoPage from './documents/infoPage'
import highlighted from './objects/highlighted'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    postSettings,
    home,
    projects,
    projectSettings,
    about,
    services,
    footer,
    mainImage,
    bodyPortableText,
    excerptPortableText,
    externalLink,
    category,
    videoLink,
    audioLink,
    embed,
    infoPage,
    highlighted

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
