// uno.config.ts
import {defineConfig} from 'unocss'
import presetUno from '@unocss/preset-uno'


export default defineConfig({
  theme: {
    colors: {
      lighter: "#AAAAAA",
      darker: "#606060"
    }
  },
  presets: [
    presetUno(),
  ]
})