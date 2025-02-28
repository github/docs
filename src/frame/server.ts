import { main } from './start-server'

try {
  await main()
} catch (error) {
  console.error(error)
}
