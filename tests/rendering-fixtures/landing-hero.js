import { getDOM } from '../helpers/e2etest.js'

describe('product landing page', () => {
  test('product landing page displays full title', async () => {
    const $ = await getDOM('/get-started')
    expect($('h1').text()).toMatch(/Getting started with HubGit/)
  })
})
