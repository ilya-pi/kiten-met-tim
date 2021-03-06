import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './About.vue'

//import backgroundUrl from './assets/bg.jpg'

Vue.config.productionTip = false

// 1. User plugin
// This installs <router-view> and <router-link>,
// and injects $router and #route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
const Home = App
const AboutPage = About

// 3. Create the router
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Home },	  
    { path: '/about', component: AboutPage }	  
  ]	
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>
new Vue({
  router,
  data: () => ({ n: 0 }),
  template: `
    <div id="app" style="background-image: url(https://ilya-pi.github.io/kiten-met-tim/bg.jpg);" class="cover">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <nav class="db dt-l w-100 border-box pa3 ph5-l">
            <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
              <img src="https://ilya-pi.github.io/kiten-met-tim/logo.svg" class="dib w2 h2 br-100" alt="Kiten Met Tim">
            </a>
            <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
              <router-link class="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Home" to="/">Home</router-link>

              <router-link class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Over mij" to="/about">Over mij</router-link>
	      
	      <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l ba dib mb4 ph4 pv3 br-pill" title="Inshrijven" href="mailto:bleekertim@gmail.com">Inschrijven</a>
            </div>
        </nav>
	<router-view class="view"></router-view>
	<footer class="pv4 ph3 ph5-m ph6-l mid-gray">
            <!--small class="f6 db tc">© 2016 <b class="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small-->
            <div class="tc mt3">
	      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" class="f6 dib ph2 link mid-gray dim">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" class="f6 dib ph2 link mid-gray dim">www.flaticon.com</a>
            </div>
          </footer>
    </div>`
}).$mount('#app')

/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/
