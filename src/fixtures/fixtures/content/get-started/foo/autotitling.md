---
title: Autotitling
intro: Internal links that use AUTOTITLE should just work
layout: inline
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
---

## Introduction

Links that use the word `AUTOTITLE` in the Markdown become the
title of the document it links to.

For example [AUTOTITLE](/get-started/start-your-journey/hello-world).

It should also work if the URL as a query string, like this:
[AUTOTITLE](/get-started/start-your-journey/hello-world?tool=linux)

Equally, if the link has a hash on it:
[AUTOTITLE](/get-started/start-your-journey/hello-world#this-hash)

Or, a combination of query string and hash:
[AUTOTITLE](/get-started/start-your-journey/hello-world?tool=linux#this-hash)

```typescript
// This is a code sample
console.log("Hello, World!");

// for more info on this, visit [AUTOTITLE](/get-started/markdown).
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// another example is [AUTOTITLE](/get-started/markdown/alerts)
const userName: string = "TypeScript User";
greet(userName);
```

Some more JS:

```javascript
// This is a comment
const { Octokit } = require("octokit");

//
async function checkAndRedeliverWebhooks() {
   // See [AUTOTITLE](/get-started/markdown/permissions)
  const TOKEN = process.env.TOKEN;
  const ORGANIZATION_NAME = process.env.ORGANIZATION_NAME;
  const HOOK_ID = process.env.HOOK_ID;
  const LAST_REDELIVERY_VARIABLE_NAME = process.env.LAST_REDELIVERY_VARIABLE_NAME;
  {% ifversion ghes %}const HOSTNAME = process.env.HOSTNAME;{% endif %}
  const WORKFLOW_REPO_NAME = process.env.WORKFLOW_REPO_NAME;
  const WORKFLOW_REPO_OWNER = process.env.WORKFLOW_REPO_OWNER;

  // Create an instance of `Octokit` using the token workflow.
  const octokit = new Octokit({ {% ifversion ghes %}
    baseUrl: "{% data variables.product.rest_url %}",{% endif %}
    auth: TOKEN,
  });
  ```
