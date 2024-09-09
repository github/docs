---
title: Configuring your Copilot agent to communicate with GitHub
intro: 'Learn how to verify payloads and get resources from {% data variables.product.github %} with your {% data variables.product.prodname_copilot_agent_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Communicate with GitHub
type: reference
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## Prerequisites

Before you configure your {% data variables.product.prodname_copilot_agent_short %} to communicate with {% data variables.product.github %}, you should understand how your {% data variables.product.prodname_copilot_agent_short %} communicates with the {% data variables.product.prodname_copilot_short %} platform. See "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-the-copilot-platform)."

## Verifying that payloads are coming from {% data variables.product.github %}

Before your {% data variables.product.prodname_copilot_agent_short %} begins processing a request, you should verify that the request came from {% data variables.product.github %}, and that it is intended for your agent. All agent requests contain the `Github-Public-Key-Identifier` and `Github-Public-Key-Signature` headers. To verify the signature for a particular request, compare the signature in the `Github-Public-Key-Signature` header with a signed copy of the request body using the current public key listed at https://api.github.com/meta/public_keys/copilot_api.

For more details and examples of signature verification in specific languages, see the [`github-technology-partners/signature-verification`](https://github.com/github-technology-partners/signature-verification) repository.

## Fetching resources from the {% data variables.product.github %} API

Requests to your {% data variables.product.prodname_copilot_agent_short %} will receive an `X-Github-Token` header. This header contains an API token that can be used to fetch resources from the {% data variables.product.github %} API on behalf of the user interacting with your agent. The permissions of this token are the overlap of the user's own permissions and the permissions granted to your {% data variables.product.prodname_github_app %} installation.

For an example of how you might use `X-Github-Token`, see the following code sample:

```typescript
async function whoami(req) {
  const response = await fetch(
    // The {% data variables.product.github %} API endpoint for the authenticated user
    "https://api.github.com/user",
    {
      headers: {
        "Authorization": `Bearer ${req.headers.get("x-github-token")}`
      }
    }
  )

  const user = await response.json()
  return user
}
```

To learn more about working with {% data variables.product.github %}'s API and explore official software development kits (SDKs), see the [`octokit`](https://github.com/octokit) organization.
