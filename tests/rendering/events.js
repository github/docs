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
  beforeEach(() => {
    process.env.AIRTABLE_API_KEY = '$AIRTABLE_API_KEY$'
    process.env.AIRTABLE_BASE_KEY = '$AIRTABLE_BASE_KEY$'
  })

  afterEach(() => {
    delete process.env.AIRTABLE_API_KEY
    delete process.env.AIRTABLE_BASE_KEY
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
      request(app)
        .post('/events')
        .send(example)
        .set('Accept', 'application/json')
        .expect(201)
    )

    it('should reject extra properties', () =>
      request(app)
        .post('/events')
        .send({ ...example, toothpaste: false })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if type is missing', () =>
      request(app)
        .post('/events')
        .send({ ...example, type: undefined })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if url is missing', () =>
      request(app)
        .post('/events')
        .send({ ...example, url: undefined })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if url is misformatted', () =>
      request(app)
        .post('/events')
        .send({ ...example, url: 'examplecom' })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if vote is missing', () =>
      request(app)
        .post('/events')
        .send({ ...example, vote: undefined })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if vote is not boolean', () =>
      request(app)
        .post('/events')
        .send({ ...example, vote: 'true' })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if email is misformatted', () =>
      request(app)
        .post('/events')
        .send({ ...example, email: 'testexample.com' })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if comment is not string', () =>
      request(app)
        .post('/events')
        .send({ ...example, comment: [] })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should not accept if category is not an option', () =>
      request(app)
        .post('/events')
        .send({ ...example, category: 'Fabulous' })
        .set('Accept', 'application/json')
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
      request(app)
        .post('/events')
        .send(example)
        .set('Accept', 'application/json')
        .expect(201)
    )

    it('should reject extra fields', () =>
      request(app)
        .post('/events')
        .send({ ...example, toothpaste: false })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should require a long unique user-id', () =>
      request(app)
        .post('/events')
        .send({ ...example, 'user-id': 'short' })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should require a test', () =>
      request(app)
        .post('/events')
        .send({ ...example, test: undefined })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should require a valid group', () =>
      request(app)
        .post('/events')
        .send({ ...example, group: 'revolution' })
        .set('Accept', 'application/json')
        .expect(400)
    )

    it('should default the success field', () =>
      request(app)
        .post('/events')
        .send({ ...example, success: undefined })
        .set('Accept', 'application/json')
        .expect(201)
    )
  })
})

describe('PUT /events/:id', () => {
  beforeEach(() => {
    process.env.AIRTABLE_API_KEY = '$AIRTABLE_API_KEY$'
    process.env.AIRTABLE_BASE_KEY = '$AIRTABLE_BASE_KEY$'
  })

  afterEach(() => {
    delete process.env.AIRTABLE_API_KEY
    delete process.env.AIRTABLE_BASE_KEY
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
    request(app)
      .put('/events/TESTID')
      .send(example)
      .set('Accept', 'application/json')
      .expect(200)
  )
})
