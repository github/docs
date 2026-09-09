---
title: Code tabs test
versions:
  fpt: "*"
---

## Basic code tabs

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
  model: "gpt-4.1",
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient

client = CopilotClient()
await client.start()
session = await client.create_session(model='gpt-4.1')
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

func main() {
    client := copilot.NewClient(nil)
    client.Start(ctx)
}
```

{% endcodetab %}
{% endcodetabs %}

## Synced language groups

{% codetabs %}
{% codetab python "Python" %}

```python
client = CopilotClient()
await client.start()
```

{% endcodetab %}
{% codetab typescript "TypeScript" %}

```typescript
const client = new CopilotClient();
await client.start();
```

{% endcodetab %}
{% endcodetabs %}
