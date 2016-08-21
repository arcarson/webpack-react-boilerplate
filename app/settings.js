import styleInject from 'style-inject'
import toCss from 'to-css'
import { kebabCase, forIn } from 'lodash'
import typescale from 'typescale'
import paletteGenerator from 'palette-generator'

export const palette = paletteGenerator(215, '74%', '58%', { shadeVariation: '20%',
                                                             hueIncrement: 15,
                                                             scheme: 'accentedAnalogous' })


export const type = typescale({ fontFamily: 'Heebo' })

const css = { html: {} }

forIn(type.html, (value, key) => {
  css.html[kebabCase(key)] = value
})

styleInject(toCss(css))
