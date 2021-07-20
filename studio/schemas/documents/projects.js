import {format} from 'date-fns'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'selected',
      type: 'boolean',
      title: 'Featured',
      description: 'If this is set to true, the post will be shown on the front page'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
      validation: Rule => Rule.required()
    },
    {
      name: 'readmoreprefix',
      type: 'string',
      title: 'Read more prefix for screen-reader'
    },
    {
      name: 'readmoresuffix',
      type: 'string',
      title: 'Read more suffix for screen-reader'
    },
    {
      name: 'intro',
      type: 'bodyPortableText',
      title: 'Optional: Introduction',
      description: 'Short intro to the project, this will be shown on the top of the project together with the cover image (optional)'
    },
    {
      name: 'coverImages',
      title: 'Optional: Cover images',
      type: 'array',
      of: [{type: 'mainImage'}],
      description: 'Add one or more images to show at the top of the project'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
      validation: Rule => Rule.required()
    },
    {
      type: 'array',
      of: [{type: 'mainImage'}],
      title: 'Optional: Storyboard Images',
      name: 'storyboard',
      description: 'Add a storyboard with images at the end of each project'
    },
    {
      name: 'resources',
      type: 'array',
      title: 'Optional: Resources',
      of: [{type: 'externalLink'}]
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
