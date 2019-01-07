import '../../node_modules/@dudesolutions/dudewind/dist/styles.css'
// import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from '../../node_modules/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faStackOverflow, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  library.add(faGithub, faStackOverflow, faTwitter, faLinkedin, faFacebook);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
    // ...apply enhancements to the app
  }