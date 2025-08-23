import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: "Dr. Kait Whitcomb",
      mark: () => <img src="/assets/favicons/favicon-192x192.png" style={{ objectFit: 'cover', width: '45px', height: '45px' }} alt="Dr. Kait Whitcomb" />
    },

    navigation: {
      "configuration": ["themes", "footer", "header", "navigator", "images", "metadata"],
      "content": ["data", "posts", "resources", "pages"],
    }
  },
  singletons: {
    themes: singleton({
      label: "Themes",
      schema: {
        themes: fields.array(
          fields.select({
            label: 'Theme',
            options: [{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }],
            defaultValue: 'light',
          }),
        )
      }
    }),
    header: singleton({
      label: "Header",
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        theme: fields.select({
          label: 'Theme',
          options: [{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }],
          defaultValue: 'light',
        }),
      }
    }),
    images: singleton({
      label: "Images",
      schema: {
        images: fields.array(
          fields.image({
            label: 'Image',
            directory: '/src/assets/images',
            publicPath: '/assets/images/',
          })
        ),
      }
    }),
    footer: singleton({
      label: "Footer",
      format: "json",
      path: "/src/configs/footer",
      schema: {
        links: fields.object({
          links: fields.array(
            fields.object({
              name: fields.text({ label: 'Name' }),
              url: fields.url({ label: 'URL' }),
            })
          ),
        }),
        copyright: fields.object({
          copyright: fields.text({ label: 'Copyright' }),
        }),
        tag: fields.object({
          tag: fields.object({
            image: fields.object({
              src: fields.image({ label: 'Image' }),
              url: fields.url({ label: 'URL' }),
            })
          })
        }),
        phoneNumber: fields.object({
          phoneNumber: fields.text({ label: 'Phone Number' }),
        }),
        emailAddress: fields.object({
          emailAddress: fields.text({ label: 'Email Address' }),
        })
      }
    }),
    navigator: singleton({
      label: "Navigator",
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        theme: fields.select({
          label: 'Theme',
          options: [{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }],
          defaultValue: 'light',
        }),
      }
    }),
    metadata: singleton({
      label: "Metadata",
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        theme: fields.select({
          label: 'Theme',
          options: [{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }],
          defaultValue: 'light',
        }),
      }
    }),
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        "$resource": fields.text({ label: 'Resource' }),
        "$version": fields.text({ label: 'Version' }),
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: '/src/assets/images/posts',
              publicPath: '/assets/images/posts/',
            },
          },
        }),
      },
    }),
    pages: collection({
      label: 'Pages',
      slugField: '$resource',
      path: 'src/content/pages/*/',
      format: 'json',
      schema: {
        "$resource": fields.text({ label: 'Resource' }),
        "$version": fields.text({ label: 'Version' }),
        metaData: fields.object({
          title: fields.slug({ name: { label: 'Title' } }),
        }),

      },
    }),
    resources: collection({
      label: 'Resources',
      slugField: 'title',
      path: 'src/content/resources/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/images/',
              publicPath: 'public/assets/images/',
            },
          },
        }),
      },
    }),
    data: collection({
      label: 'Data',
      slugField: 'title',
      path: 'src/content/data/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/images/data',
              publicPath: 'public/assets/images/data/',
            },
          },
        }),
      },
    }),

  },
});
