<template>
    <!--div id="app" :style="{ backgroundImage: `url(${backgroundUrl})` }" class="cover">
        <nav class="dt fixed w-100 border-box pa3 ph5-ns">
            <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
            </a>
            <div class="dtc v-mid w-75 tr">
              <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns ba dib mb4 ph4 pv3  br-pill" href="#" title="Over mij">Over mij</a>
            </div>
        </nav-->
        <article class="vh-100 dt w-100">
            <div class="dtc v-mid tc ph3 ph4-l">
                <section class="cf w-100 pv3 f6 ph3 ph4-ns">
                    <h1 class="f1 lh-title">Kiten met Tim</h1>
                    <!--h5 class="f5 lh-title">Leer kitesurfen bij Kiten met Tim!</h5-->
                    
                    <div class="fl w-100 pa2">
                        <ul class="tl f4">
                            <li>Meer dan 10 jaar ervaring met lesgeven in verschillende delen van de wereld</li>
                            <li>Krijg de onverdeelde aandacht van de instructeur</li>
                            <li>Leren door te doen</li>
                        </ul>
                    </div>
                    <div class="fl w-100 pa2">
                        <h3 class="f3 lh-title">Privéles</h3>
                        <h5 class="f5 lh-title">€140,-</h5>
                        <!--ul class="tl">
                            <li>2 uur les</li>
                            <li>afgestemd op jouw niveau</li>
                            <li>snelste progressie</li>
                        </ul-->
                    </div>
                    <div class="fl w-100 w-third-ns pa2">
                        <div class="f3 tc pv4">2 uur les</div>
                    </div>
                    <div class="fl w-100 w-third-ns pa2">
                        <div class="f3 outline tc pv4">afgestemd op jouw niveau</div>
                    </div>
                    <div class="fl w-100 w-third-ns pa2">
                        <div class="f3 tc pv4">snelste progressie</div>
                    </div>
                </section>
            </div>
        </article>
</template>

<script>
import backgroundUrl from './assets/bg.jpg'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      backgroundUrl: backgroundUrl
    }
  }
//  components: {
//    HelloWorld
//  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@import './../node_modules/tachyons/css/tachyons.css';
</style>
