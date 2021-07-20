export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'headerTitle',
      type: 'string',
      title: '0️⃣ Header: Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'headerDescription',
      type: 'text',
      title: '0️⃣ Header: Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'ctaTitle',
      type: 'string',
      title: '0️⃣ Header: CTA Title',
      description: 'This is the title that will be displayed on top of the call to action links',
      validation: Rule => Rule.required()
    },
    {
      name: 'headerImage',
      type: 'mainImage',
      title: '0️⃣ Header: Image',
      description: 'This is the main image that will be displayed in the intro section of the home page, next to the call to action links',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectsTitle',
      type: 'string',
      title: '1️⃣ Projects: Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutTitle',
      type: 'string',
      title: '2️⃣ About us: Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutImage',
      type: 'mainImage',
      title: '2️⃣ About us: Image '
    },
    {
      name: 'aboutDescription',
      type: 'text',
      title: '2️⃣ About us: Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitle',
      type: 'string',
      title: '3️⃣ Services: Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesDescription',
      type: 'text',
      title: '3️⃣ Services: Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitleBlock1Title',
      type: 'string',
      title: '3️⃣ Services: Block 1 Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitleBlock1Descr',
      type: 'text',
      title: '3️⃣ Services: Block 1 Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitleBlock2Title',
      type: 'string',
      title: '3️⃣ Services: Block 2 Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitleBlock2Descr',
      type: 'text',
      title: '3️⃣ Services: Block 2 Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitleBlock3Title',
      type: 'string',
      title: '3️⃣ Services: Block 3 Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesTitleBlock3Descr',
      type: 'text',
      title: '3️⃣ Services: Block 3 Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'servicesLinkText',
      type: 'string',
      title: '3️⃣ Services: CTA Title',
      description: 'This is the text that will be used for the "read more" link underneath the services, that takes the user to the services page',
      validation: Rule => Rule.required()
    },
    {
      name: 'journalTitle',
      type: 'string',
      title: '4️⃣ Journal: Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'journalLimit',
      type: 'number',
      title: '4️⃣ Journal: Limit',
      description: 'The limit defines the amount of posts that can be shown on the home page',
      validation: Rule => Rule.required()
    }
  ]
}
