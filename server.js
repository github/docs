import { main } from './start-server.js'

try {
  await main()
} catch (error) {
  console.error(error)
}
