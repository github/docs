import cors from 'cors'
export default cors({
  origin: '*',
  methods: ['GET', 'HEAD'],
})
