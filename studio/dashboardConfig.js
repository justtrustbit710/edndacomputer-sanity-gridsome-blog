export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61cb4d8287cc5374aeec2e9c',
                  title: 'Sanity Studio',
                  name: 'edndacomputer-sanity-gridsome-blog-studio',
                  apiId: '0856aa42-4a2e-4562-b55c-4b84bbd3a1f8'
                },
                {
                  buildHookId: '61cb4d8290dfde77a56a4087',
                  title: 'Blog Website',
                  name: 'edndacomputer-sanity-gridsome-blog',
                  apiId: '8dae3358-8f07-4ece-a604-69396093a10e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justtrustbit710/edndacomputer-sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://edndacomputer-sanity-gridsome-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
