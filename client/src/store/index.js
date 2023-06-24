import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#efbd480',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
})

export default state
