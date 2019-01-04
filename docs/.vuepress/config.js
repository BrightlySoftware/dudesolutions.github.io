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
        '/FrontEnd/': [
          '/FrontEnd/',
          'StyleGuides/ES2015',
          'StyleGuides/ES5',
          'StyleGuides/CSS'
        ]
      },
      search: false,
    },
    title: 'Dude Solutions Engineering',
    module: {
      rules: [{
        test: /\.css$/,
        use: [
            "css-loader",
        ]
      }]
    }
  }