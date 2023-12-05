import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default <Partial<Config>>{
  theme: {
    // colors: {
    //   white: '#F6F6F6',
    //   black: '#1A1A1A',
    // },
    extend: {
      colors: {
        primary: '#2C663E',
        darkPrimary: '#0F5924',
        lightPrimary: '#5F9756',
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
