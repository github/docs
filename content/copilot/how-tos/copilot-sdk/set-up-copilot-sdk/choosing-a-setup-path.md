---
title: Choosing a setup path for Copilot SDK
shortTitle: Choosing a setup path
intro: Find the right setup guide that matches how you plan to use {% data variables.copilot.copilot_sdk_short %}.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

## Architecture overview

Every {% data variables.copilot.copilot_sdk %} integration follows the same core pattern: your application talks to the SDK, which communicates with {% data variables.copilot.copilot_cli_short %} over JSON-RPC. What changes across setups is where the CLI runs, how users authenticate, and how sessions are managed.

## Who are you?

### Hobbyist

You're building a personal assistant, side project, or experimental app. You want the simplest path to getting Copilot in your code.

**Start with:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/local-cli)—use the CLI already signed in on your machine.
1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/bundled-cli)—package everything into a standalone app.

### Internal app developer

You're building tools for your team or company. Users are employees who need to authenticate with their enterprise {% data variables.product.github %} accounts or org memberships.

**Start with:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth)—let employees sign in with their {% data variables.product.github %} accounts.
1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services)—run the SDK in your internal services.

**If scaling beyond a single server:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/scaling)—handle multiple users and services.

### App developer (ISV)

You're building a product for customers. You need to handle authentication for your users—either through {% data variables.product.github %} or by managing identity yourself.

**Start with:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth)—let customers sign in with {% data variables.product.github %}.
1. [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository—manage identity with your own model keys.
1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services)—power your product from server-side code.

**For production:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/scaling)—serve many customers reliably.

### Platform developer

You're embedding Copilot into a platform—APIs, developer tools, or infrastructure that other developers build on. You need fine-grained control over sessions, scaling, and multi-tenancy.

**Start with:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services)—core server-side integration.
1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/scaling)—session isolation, horizontal scaling, persistence.

**Depending on your authentication model:**

1. [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth)—for {% data variables.product.github %}-authenticated users.
1. [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository—for self-managed identity and model access.

## Decision matrix

Use this table to find the right guide based on what you need to do.

| What you need | Guide |
|---|---|
| Simplest possible setup | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/local-cli) |
| Ship a standalone app with Copilot | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/bundled-cli) |
| Users sign in with {% data variables.product.github %} | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth) |
| Use your own model keys (OpenAI, Azure, etc.) | [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository |
| Azure BYOK with Managed Identity (no API keys) | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/azure-managed-identity) |
| Run the SDK on a server | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services) |
| Serve multiple users or scale horizontally | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/scaling) |

## Prerequisites

All guides assume you have:

* **{% data variables.copilot.copilot_cli_short %}** installed. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
* **One of the SDKs** installed:
  * Node.js: `npm install @github/copilot-sdk`
  * Python: `pip install github-copilot-sdk`
  * Go: `go get github.com/github/copilot-sdk/go`
  * .NET: `dotnet add package GitHub.Copilot.SDK`

If you're new to the {% data variables.copilot.copilot_sdk %}, start with [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started) first, then return here for production configuration.

## Next steps

Pick the guide that matches your situation from the [decision matrix](#decision-matrix) above, or start with the persona description closest to your role.
