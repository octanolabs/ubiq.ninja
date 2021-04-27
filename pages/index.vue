<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col
      cols="12"
      class="text-center pa-0"
      style="border-top: var(--var-primary-base)"
    >
      <div class="text-center my-6">
        <v-avatar tile class="pa-2" size="250" max-width="100%">
          <v-img :src="params.logo[theme]" height="200" contain class="pa-2" />
        </v-avatar>
      </div>
      <h1 class="v-heading mb-4">{{ $t('home.title') }}</h1>
      <p class="mx-auto" style="width: 420px; max-width: 85%">
        {{ $t('home.desc') }}
      </p>
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="text-center pt-2"
      >
        <v-sheet rounded flat>
          <v-list class="wallet-full pa-0">
            <v-list-item v-if="isSparrow">
              <v-list-item-avatar v-show="!isMobile" tile size="48"
                ><v-img
                  height="42"
                  width="42"
                  src="/wallets/sparrow.png"
                  contain
              /></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{
                  $t('wallet.sparrow.title')
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  $t('wallet.sparrow.msg')
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon v-show="!isMobile">mdi-check</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-list-item v-else-if="isMetaMask">
              <v-list-item-avatar v-show="!isMobile" tile size="48"
                ><v-img
                  height="42"
                  width="42"
                  src="/wallets/metamask.png"
                  contain
              /></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{
                  $t('wallet.metamask.title')
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  $t('wallet.metamask.msg')
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action v-show="!isMobile">
                <v-icon>mdi-check</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-else
              :to="'/' + locale + '/wallets/sparrow'"
              class="dapp"
            >
              <v-list-item-avatar v-show="!isMobile" tile size="48"
                ><v-icon>mdi-alert</v-icon></v-list-item-avatar
              >
              <v-list-item-content>
                <v-list-item-title>{{
                  $t('wallet.none.title')
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  $t('wallet.none.msg')
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action v-show="!isMobile">
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-row>
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="text-center pt-6"
      >
        <v-card
          id="shinobi"
          width="300px"
          height="120px"
          class="pa-0 ma-2 dapp"
          href="https://shinobi.ubiq.ninja"
          target="_blank"
        >
          <v-card-title>
            <v-img src="dapps/shinobi-text.png" height="30px" contain />
          </v-card-title>
          <v-card-text class="dapp-text">
            <b>{{ $t('dapps.shinobi') }}</b>
          </v-card-text>
        </v-card>
        <v-card
          id="enmaku"
          width="300px"
          height="120px"
          class="pa-0 ma-2 dapp"
          href="https://ubiq.enmaku.io"
          target="_blank"
        >
          <v-card-title>
            <v-img src="dapps/enmaku-text.png" height="30px" contain />
          </v-card-title>
          <v-card-text class="dapp-text">
            <b>{{ $t('dapps.enmaku') }}</b>
          </v-card-text>
        </v-card>
      </v-row>
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="text-center pt-6"
      >
        <v-card flat>
          <v-list class="pa-0">
            <v-list-item v-if="shinobi.global">
              <v-list-item-icon><v-icon>mdi-ninja</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  >${{
                    nf.format(shinobi.global.totalLiquidityUSD)
                  }}</v-list-item-title
                >
                <v-list-item-subtitle
                  >{{
                    nf.format(shinobi.global.totalLiquidityETH)
                  }}
                  UBQ</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>Shinobi</v-list-item-action-text>
                <v-list-item-action-text>Liquidity</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-list-item class="bt-1">
              <v-list-item-icon
                ><v-icon>mdi-incognito-circle</v-icon></v-list-item-icon
              >
              <v-list-item-content>
                <v-list-item-title
                  >${{ nf.format(enmakuUBQUSD.toString()) }}</v-list-item-title
                >
                <v-list-item-subtitle
                  >{{
                    nf.format(enmakuUBQ.toString())
                  }}
                  UBQ</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>Enmaku</v-list-item-action-text>
                <v-list-item-action-text>Liquidity</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isSparrow: false,
      isMetaMask: false,
      nf: new Intl.NumberFormat(this.locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    }
  },
  computed: {
    params() {
      return this.$store.state.params
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    isMobile() {
      return this.$store.state.mobile
    },
    locale() {
      return this.$i18n.locale
    },
    shinobi() {
      return this.$store.state.shinobi
    },
    enmakuUBQ() {
      return this.$store.state.enmaku.ubiq
    },
    enmakuUBQUSD() {
      return this.$store.state.enmaku.ubiq.times(this.shinobi.ubqPrice)
    },
  },
  created() {
    this.getWallet()
  },
  methods: {
    getWallet() {
      if (window.ethereum) {
        // injected wallet detected. determined mm or sparrow
        if (window.ethereum.isSparrow) {
          this.isSparrow = true
        } else if (window.ethereum.isMetaMask) {
          this.isMetaMask = true
        }
      }
    },
  },
}
</script>
