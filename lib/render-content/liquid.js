import { Liquid } from 'liquidjs'

const engine = new Liquid({
  extname: '.html',
  dynamicPartials: false,
})

export default engine
