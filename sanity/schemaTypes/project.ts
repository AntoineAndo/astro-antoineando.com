import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      //short description
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      //Content
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Iframe', value: 'iframe'},
        ],
        layout: 'radio',
      },
      initialValue: 'image',
    },
    {
      // iframe field where you can either upload a file or paste a URL
      name: 'iframe',
      title: 'Iframe',
      type: 'file',
      options: {
        accept: '.html',
      },
      hidden: ({parent}) => parent?.layout !== 'iframe',
    },
    {
      name: 'iframeUrl',
      title: 'iFrame URL',
      type: 'url',
      hidden: ({parent}) => parent?.layout !== 'iframe',
    },
    {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
})
