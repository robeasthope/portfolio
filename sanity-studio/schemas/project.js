export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'shortTitle',
      title: 'Short title',
      type: 'string',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullTitle',
        maxLength: 96,
      },
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'gallery',
      title: 'Image gallery',
      type: 'array',
      of: [{ type: 'altImage' }],
    },
    {
      name: 'projectType',
      title: 'Project type',
      type: 'string',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: { type: 'organisation' },
    },
    {
      name: 'agency',
      title: 'Agency',
      type: 'reference',
      to: { type: 'organisation' },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'projectUrlTitle',
      title: 'Project url title',
      type: 'string',
    },
    {
      name: 'projectUrl',
      title: 'Project url',
      type: 'url',
    },
    {
      name: 'repoUrl',
      title: 'Repo url',
      type: 'url',
    },
    {
      name: 'techUsed',
      title: 'Technologies used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tech' } }],
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'seoMetaData',
      title: 'SEO meta data',
      type: 'seoMetaData',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'client.name',
      media: 'thumbnailImage',
    },
  },
};