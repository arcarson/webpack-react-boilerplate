import typescale from 'typescale'
import paletteGenerator from 'palette-generator'

export const type = typescale()

export const palette = paletteGenerator(215, '74%', '58%', { shadeVariation: '20%',
                                                             hueIncrement: 15,
                                                             scheme: 'accentedAnalogous' })
