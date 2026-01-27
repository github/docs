---
title: Working with push protection and the GitHub MCP server
shortTitle: Push protection and the GitHub MCP server
intro: Learn how you are protected from leaking secrets during interactions with the {% data variables.product.github %} MCP server, and how to bypass a push protection block if you need to.
product: Public repositories on {% data variables.product.prodname_dotcom_the_website %}
permissions: '{% data reusables.permissions.push-protection-resolve-block %}'
versions:
  feature: copilot
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
  - Copilot
redirect_from:
  - /code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server
contentType: concepts
---

## About push protection and the {% data variables.product.github %} MCP server

Push protection prevents you from inadvertently exposing secrets, such as tokens, keys and credentials, in your repository.

When you're interacting with the {% data variables.product.github %} MCP server, push protection blocks secrets in AI-generated responses as well as preventing secrets from being included in any actions you perform, such as creating an issue.

This protection is on by default for all interactions between the {% data variables.product.github %} MCP server and **public repositories**; and between the {% data variables.product.github %} MCP server and private repositories covered by {% data variables.product.prodname_GHAS %}, regardless of whether push protection is enabled on the repository's security settings page.

## Resolving a block

To resolve the block, you can either:

* **Remove** the secret from the content of your request before trying again.
* **Bypass the block.** If push protection is enabled for the repository, or you have push protection enabled for your personal account, you'll see an option to bypass the push protection block. You should carefully evaluate if it's safe to include the secret in your request before continuing.

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)
* [About the {% data variables.product.github %} MCP server](/copilot/concepts/about-mcp#about-the-github-mcp-server)
