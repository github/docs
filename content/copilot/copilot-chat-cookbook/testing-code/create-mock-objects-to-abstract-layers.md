---
title: 'Create mock objects to abstract layers'
shortTitle: Create mock objects
intro: '{% data variables.product.prodname_copilot_chat_short %} can help with creating mock objects that you can use for unit tests.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/testing-code/create-mock-objects-to-abstract-layers
versions:
  feature: copilot
category:
  - 'Testing code'
complexity:
  - Intermediate
octicon: beaker
topics:
  - Copilot
---

When creating unit tests, it's important to ensure they're isolated and not depending on external services. One way to achieve this is to create mock objects that abstract layers of your application. {% data variables.product.prodname_copilot_chat_short %} can help you generate the code you need to create these mock objects.

## Example scenario

Imagine a website built with TypeScript which displays a list of runners. You have a service which fetches the runners from a database, and the server-side code which uses this service. You want to test the server-side code, but you don't want to make a call to the database. You can ask {% data variables.product.prodname_copilot_chat_short %} to generate a mock object for the service.

```typescript
// SvelteKit example at +page.server.ts
import service from './service';

export async function load({ params }) {
  const runner = await service.getRunner(params.id);

  return {
    runner
  };
}
```

## Example prompt

This example assumes you are using [vitest](https://vitest.dev/) for your tests, but will work with other test runners.

`/tests Create a unit test to ensure the service is called correctly. Mock the service object.`

If you have an existing test you wish {% data variables.product.prodname_copilot_short %} to use as a model, you can use `#file: path/to/test-file.js` to provide the path to the file, and include this information in the prompt.

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} provides the plan it will implement and the code text which includes the mocks.

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { load } from './+page.server.ts';

// Mock the entire service module
vi.mock('./service', () => ({
  default: {
    getRunner: vi.fn()
  }
}));

// Import the mocked service
import service from './service';

describe('load function', () => {
  const mockRunner = {
    id: '123',
    name: 'Test Runner',
    status: 'active'
  };

  beforeEach(() => {
    // Reset mock before each test
    vi.resetAllMocks();

    // Setup default mock implementation
    (service.getRunner as any).mockResolvedValue(mockRunner);
  });

  it('should fetch runner with correct id', async () => {
    const params = { id: '123' };
    const result = await load({ params });

    expect(service.getRunner).toHaveBeenCalledWith('123');
    expect(service.getRunner).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ runner: mockRunner });
  });
});
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
