<template>
        <article class="vh-100 dt w-100">
            <div class="dtc v-mid tc ph3 ph4-l">
                <section class="cf w-100 pv3 f6 ph3 ph4-ns">
                    <h1 class="f1 lh-title">Wie ben ik?</h1>
                    <!--h5 class="f5 lh-title">Leer kitesurfen bij Kiten met Tim!</h5-->
                    
                    <div class="fl w-100 pa2">
                        <p class="tl f4">Op 12-jarige leeftijd kreeg ik een skateboard voor mijn verjaardag en al snel
werd me duidelijk dat alle sporten met een board geweldig zijn. Windsurfen,
snowboarden, wakeboarden en KITESURFEN, ik wilde het allemaal en nu doe
ik het ook allemaal.</p>
                        <p class="tl f4">Ongeveer 10 jaar geleden ben ik begonnen met het geven van kitesurflessen.
Na een cursus van een week kon ik aan de slag als IKO-gecertificeerd
instructeur. Ik vind het prachtig om mensen enthousiast te zien worden voor
het kitesurfen en ze te helpen met hun progressie.</p>
                        <p class="tl f4">In het dagelijks leven ben ik docent in het volwassenenonderwijs. Ik heb veel
ervaring in het overdragen van kennis. Iedereen leert weer op een andere
manier en ik pas mijn manier van lesgeven hierop aan. Je leert het snelst in
een veilige omgeving waarin je je op je gemak voelt. Veiligheid en een goede
sfeer zijn dan ook de speerpunten in mijn lessen.</p>
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
