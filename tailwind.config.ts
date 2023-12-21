import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#2C663E',
        darkPrimary: '#0F5924',
        lightPrimary: '#5F9756',
        mdnGold: '#E2A331',
        mdnDarkGold: '#C7822A',
        mdnLightGold: '#FBD75F',
        mdnLightGold20: '#FEF7DF',
      },
    },
  },
  plugins: [
    require('daisyui'),
    iconsPlugin({
      collections: getIconCollections(['mdi']),
    }),
  ],
  daisyui: {
    themes: [],
  },
}
