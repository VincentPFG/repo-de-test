import DefaultLayout from '~/layouts/Default.vue'
import vuetify from './vuetify.coffee'
import apolloProvider from './apollo.coffee'
import store from './vuex.coffee'

import VgImg from '~/components/VgImg.vue'
import WImg from '~/components/WImg.vue'

import axios from 'axios'

export default (Vue, {appOptions, head}) ->
	Vue.component 'Layout', DefaultLayout
	Vue.component 'VgImg', VgImg
	Vue.component 'WImg', WImg

	Vue::$axios = axios

	Object.assign appOptions, {
		vuetify
		apolloProvider
		store
	}

	head.link.push
		href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
		rel: 'stylesheet'