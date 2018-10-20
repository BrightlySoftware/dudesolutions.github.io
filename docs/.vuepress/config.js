module.exports = {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { 
          text: 'Development', 
          items: [
            { text: 'Back End', link: '/BackEnd/index'},
            { text: 'Front End', link: '/FrontEnd/index' }
          ] 
        },
        { text: 'Open Source', 
          items: [
            { text: 'Projects', link: '/OpenSource/Projects'},
            { text: 'Code of Conduct', link: '/OpenSource/CodeOfConduct'},
            { text: 'Dude Solutions Github', link: 'https://github.com/DudeSolutions'}
          ]
        },
        { text: 'Blog', link: 'http://blog.dudesolutions.io/' },
      ],
      sidebar: {
        '/FrontEnd/StyleGuides/' : [
          'ES2015',
          'ES5',
          'CSS'
        ],
        '/FrontEnd/': [
          ''
        ]
      },
      search: false,
    },
    title: 'Dude Solutions Engineering'
  }