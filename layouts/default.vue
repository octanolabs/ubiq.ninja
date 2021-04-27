<template>
  <v-app dark>
    <v-app-bar fixed app :flat="isMobile" clipped-right>
      <v-app-bar-nav-icon @click.stop="toggleNavDrawer()"></v-app-bar-nav-icon>
      <v-btn icon nuxt to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <template v-if="isMobile">
        <search-mobile />
      </template>
      <template v-else>
        <search />
      </template>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in avlLocales"
            :key="index"
            @click="$i18n.setLocale(item.code)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item :href="params.github" target="_blank">
            <v-list-item-title>{{ $t('helpTranslate') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon :href="params.github" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <resizable-drawer id="navigation" side="left">
      <v-toolbar>
        <v-list dense class="pa-0">
          <v-list-item>
            <v-list-item-avatar tile>
              <img :src="params.logo[theme]" height="24" width="24" />
            </v-list-item-avatar>
            <v-list-item-content class="text-right">
              <h1 style="color: var(--v-primary-base)">{{ $t('title') }}</h1>
              <v-list-item-subtitle style="color: var(--v-secondary-base)">
                {{ $t('subtitle') }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-subheader
          ><v-icon class="mr-2">mdi-binoculars</v-icon>
          Reconnaissance</v-subheader
        >
        <v-list-item href="https://shinobi-info.ubiq.ninja" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-sword-cross</v-icon>
          </v-list-item-icon>
          <v-list-item-title>shinobi info</v-list-item-title>
        </v-list-item>
        <v-list-item href="https://ubiqscan.io" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-cube-scan</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ubiqscan</v-list-item-title>
        </v-list-item>
        <v-list-item href="https://stats.ubiqscan.io" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-gauge</v-icon>
          </v-list-item-icon>
          <v-list-item-title>netstats</v-list-item-title>
        </v-list-item>
        <v-subheader
          ><v-icon class="mr-2">mdi-library</v-icon> Dojo</v-subheader
        >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          :to="{ path: item.path }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="(group, index) in groups"
          :key="index"
          :prepend-icon="group.icon"
        >
          <template #activator>
            <v-list-item-title>{{ group.title }}</v-list-item-title>
          </template>
          <template v-if="group.items">
            <v-list-item
              v-for="(item, i) in group.items"
              :key="i"
              link
              :to="{ path: item.path }"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>
      </v-list>
    </resizable-drawer>
    <v-main>
      <v-app-bar short flat class="ticker-bar">
        <v-col
          cols="1"
          style="min-width: 100px; max-width: 100%"
          class="flex-grow-1 flex-shrink-0 pt-0"
        >
          <marquee-text
            :key="shinobi.lastSync.tokens"
            :duration="60"
            :repeat="5"
          >
            <v-row no-gutters>
              <v-sheet
                v-for="(token, index) in shinobi.tokens"
                :key="index"
                class="ticker"
              >
                {{ token.symbol }} - ${{ token.price.toFixed(4) }}
              </v-sheet>
            </v-row>
          </marquee-text>
        </v-col>
        <v-col
          cols="1"
          class="flex-grow-0 flex-shrink-0 pt-0"
          style="min-width: 200px; max-width: 200px"
        >
          <v-btn v-if="shinobi.ubqPrice" color="primary" large text tile
            >UBQ - ${{ shinobi.ubqPrice }}</v-btn
          >
        </v-col>
      </v-app-bar>
      <v-container class="pb-12">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      padless
      app
      fixed
      height="22px"
      style="
        background-color: var(--v-primary-base);
        font-size: 12px;
        font-weight: 600;
      "
      class="px-2"
    >
      <v-spacer />
      <span style="color: #fff">
        handcrafted by <v-icon color="#fff" dense>mdi-ninja</v-icon> using
        <a
          href="https://github.com/octanolabs/static"
          style="color: #fff; text-decoration: none"
          target="_blank"
        >
          octano static
        </a>
      </span>
      <v-spacer />
    </v-footer>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      class="mb-5"
      style="z-index: 5"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
import ResizableDrawer from '~/components/app/ResizableDrawer'
import Search from '~/components/app/Search'
import SearchMobile from '~/components/app/mobile/Search'

export default {
  name: 'DefaultLayout',
  components: {
    ResizableDrawer,
    Search,
    SearchMobile,
    MarqueeText,
  },
  data() {
    return {
      fab: false,
    }
  },
  async fetch() {
    await this.$store.dispatch('set_mobile', window.innerWidth < 600)
    await this.$store.dispatch('content/fetch')
    await this.$store.dispatch('shinobi/getPriceUsd')
    await this.$store.dispatch('shinobi/getTokens')
    await this.$store.dispatch('shinobi/getGlobal')
    await this.$store.dispatch('enmaku/fetch')
    if (!this.$store.state.mobile) {
      this.$store.dispatch('drawers/set_navigation', true)
      this.$store.dispatch('drawers/set_toc', true)
    }
  },
  computed: {
    darkmode: {
      get() {
        return this.$vuetify.theme.dark
      },
      set() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    params() {
      return this.$store.state.params
    },
    avlLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    locale() {
      return this.$i18n.locale
    },
    groups() {
      return this.$store.state.content.groups
    },
    items() {
      return this.$store.state.content.items
    },
    article() {
      return this.$store.state.content.selected.article
    },
    isMobile() {
      return this.$store.state.mobile
    },
    shinobi() {
      return this.$store.state.shinobi
    },
  },
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    toggleNavDrawer() {
      this.$store.dispatch('drawers/toggleNavigation')
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo('header', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })
    },
    onResize() {
      this.$store.dispatch('set_mobile', window.innerWidth < 600)
    },
  },
}
</script>
