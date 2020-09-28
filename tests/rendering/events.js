const request = require('supertest')
const Airtable = require('airtable')
const app = require('../../server')

jest.mock('airtable')
Airtable.mockImplementation(function () {
  this.base = () => () => ({
    create: () => [{ getId: () => 'TESTID' }],
    update: () => true
  })
})

describe('POST /events', () => {
<<<<<<< HEAD
  beforeEach(() => {
    process.env.AIRTABLE_API_KEY = '$AIRTABLE_API_KEY$'
    process.env.AIRTABLE_BASE_KEY = '$AIRTABLE_BASE_KEY$'
=======
  jest.setTimeout(60 * 1000)

  let csrfToken = ''
  let agent

  beforeEach(async () => {
    process.env.AIRTABLE_API_KEY = '$AIRTABLE_API_KEY$'
    process.env.AIRTABLE_BASE_KEY = '$AIRTABLE_BASE_KEY$'
    agent = request.agent(app)
    const csrfRes = await agent.get('/csrf')
    csrfToken = csrfRes.body.token
>>>>>>> origin/main
  })

  afterEach(() => {
    delete process.env.AIRTABLE_API_KEY
    delete process.env.AIRTABLE_BASE_KEY
<<<<<<< HEAD
=======
    csrfToken = ''
>>>>>>> origin/main
  })

  describe('HELPFULNESS', () => {
    const example = {
      type: 'HELPFULNESS',
      url: 'https://example.com',
      vote: 'Yes',
      email: 'test@example.com',
      comment: 'This is the best page ever',
      category: 'Other'
    }

    it('should accept a valid object', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send(example)
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send(example)
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(201)
    )

    it('should reject extra properties', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, toothpaste: false })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, toothpaste: false })
        .set('Accept', 'application/json')

        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if type is missing', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, type: undefined })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, type: undefined })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if url is missing', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, url: undefined })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, url: undefined })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if url is misformatted', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, url: 'examplecom' })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, url: 'examplecom' })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if vote is missing', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, vote: undefined })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, vote: undefined })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if vote is not boolean', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, vote: 'true' })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, vote: 'true' })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if email is misformatted', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, email: 'testexample.com' })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, email: 'testexample.com' })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if comment is not string', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, comment: [] })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, comment: [] })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should not accept if category is not an option', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, category: 'Fabulous' })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, category: 'Fabulous' })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )
  })

  describe('EXPERIMENT', () => {
    const example = {
      type: 'EXPERIMENT',
      user: 'ef17cf45-ba3c-4de0-9140-84eb85f0797d',
      test: 'my-example-test',
      group: 'control',
      success: 'yes'
    }

    it('should accept a valid object', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send(example)
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send(example)
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(201)
    )

    it('should reject extra fields', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, toothpaste: false })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, toothpaste: false })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should require a long unique user-id', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, 'user-id': 'short' })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, 'user-id': 'short' })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should require a test', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, test: undefined })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, test: undefined })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should require a valid group', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, group: 'revolution' })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, group: 'revolution' })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(400)
    )

    it('should default the success field', () =>
<<<<<<< HEAD
      request(app)
        .post('/events')
        .send({ ...example, success: undefined })
        .set('Accept', 'application/json')
=======
      agent
        .post('/events')
        .send({ ...example, success: undefined })
        .set('Accept', 'application/json')
        .set('csrf-token', csrfToken)
>>>>>>> origin/main
        .expect(201)
    )
  })
})

describe('PUT /events/:id', () => {
<<<<<<< HEAD
  beforeEach(() => {
    process.env.AIRTABLE_API_KEY = '$AIRTABLE_API_KEY$'
    process.env.AIRTABLE_BASE_KEY = '$AIRTABLE_BASE_KEY$'
=======
  jest.setTimeout(60 * 1000)

  let csrfToken = ''
  let agent

  beforeEach(async () => {
    process.env.AIRTABLE_API_KEY = '$AIRTABLE_API_KEY$'
    process.env.AIRTABLE_BASE_KEY = '$AIRTABLE_BASE_KEY$'
    agent = request.agent(app)
    const csrfRes = await agent.get('/csrf')
    csrfToken = csrfRes.body.token
>>>>>>> origin/main
  })

  afterEach(() => {
    delete process.env.AIRTABLE_API_KEY
    delete process.env.AIRTABLE_BASE_KEY
<<<<<<< HEAD
=======
    csrfToken = ''
>>>>>>> origin/main
  })

  const example = {
    type: 'HELPFULNESS',
    url: 'https://example.com',
    vote: 'Yes',
    email: 'test@example.com',
    comment: 'This is the best page ever',
    category: 'Other'
  }

  it('should update an existing HELPFULNESS event', () =>
<<<<<<< HEAD
    request(app)
      .put('/events/TESTID')
      .send(example)
      .set('Accept', 'application/json')
=======
    agent
      .put('/events/TESTID')
      .send(example)
      .set('Accept', 'application/json')
      .set('csrf-token', csrfToken)
>>>>>>> origin/main
      .expect(200)
  )
})
