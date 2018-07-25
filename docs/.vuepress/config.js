module.exports = {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { 
          text: 'Development', 
          items: [
            { text: 'BackEnd', link: '/BackEnd/index'},
            { text: 'FrontEnd', link: '/FrontEnd/index' }
          ] 
        },
        { text: 'Open Source', link: '/OpenSource' },
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