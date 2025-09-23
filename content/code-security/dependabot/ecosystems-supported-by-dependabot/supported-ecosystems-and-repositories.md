---
title: Dependabot supported ecosystems and repositories
shortTitle: Dependabot ecosystem support # Max 31 characters
intro: '{% data variables.product.prodname_dependabot %} supports a variety of ecosystems and repositories'
allowTitleToDifferFromFilename: true
type: reference
topics:
  - Dependabot
  - Dependencies
  - Alerts
  - Vulnerabilities
  - Repositories
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---

## About {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} helps you stay on top of your dependency ecosystems. With {% data variables.product.prodname_dependabot %}, you can keep the dependencies you rely on up-to-date, addressing any potential security issues in your supply chain.

{% data reusables.dependabot.dependabot-overview %}

For more information about {% data variables.product.prodname_dependabot %}, see [AUTOTITLE](/code-security/getting-started/dependabot-quickstart-guide).

In this article, you can see what the supported ecosystems and repositories are.

## Supported ecosystems and repositories
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

You can configure updates for repositories that contain a dependency manifest or lock file for one of the supported package managers. For some package managers, you can also configure vendoring for dependencies. For more information, see [`vendor`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#vendor).
{% data variables.product.prodname_dependabot %} also supports dependencies in private registries. For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot).
{% ifversion ghes %}

> [!NOTE]
> To ensure that {% data variables.product.prodname_ghe_server %} supports {% data variables.product.prodname_dependabot_updates %} for the latest supported ecosystem versions, your enterprise owner must download the most recent version of the [{% data variables.product.prodname_dependabot %} action](https://github.com/github/dependabot-action). {% data reusables.actions.action-bundled-actions %}
{% endif %}

> [!NOTE]
> * {% data reusables.dependabot.private-dependencies-note %}
> * {% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. See the details in the table below.

If your repository already uses an integration for dependency management, you will need to disable this before enabling {% data variables.product.prodname_dependabot %}. {% ifversion fpt or ghec %}For more information, see [AUTOTITLE](/get-started/exploring-integrations/about-integrations).{% endif %}

{% data reusables.dependabot.supported-package-managers %}

## Why does {% data variables.product.prodname_dependabot %} sometimes fail to detect or update {% data variables.product.prodname_actions %} versions in monorepos?

If your repository contains multiple {% data variables.product.prodname_actions %} (for example, in a monorepo), the tag format you use affects how {% data variables.product.prodname_dependabot %} detects and updates action versions.

- **Dash (`-`) separator** (for example, `@my-action-v0.1.0`):
  - {% data variables.product.prodname_dependabot %} may group multiple actions under a single dependency entry or fail to detect new versions correctly. This occurs because {% data variables.product.prodname_dependabot %} relies on slash-based tag parsing to distinguish between actions.
- **Slash (`/`) separator** (for example, `@my-action/v0.1.0`):
  - {% data variables.product.prodname_dependabot %} correctly detects and updates each action independently, as the slash creates a hierarchical tag structure that aligns with {% data variables.product.prodname_dependabot %}'s parsing logic.

**Recommendation:** For monorepos with multiple actions, use the `name/version` (slash) format for action tags. This ensures {% data variables.product.prodname_dependabot %} can parse the tag hierarchy correctly and update actions independently.

* Example:
   ```yaml
   # Recommended: namespaced with slash
   uses: my-org/monorepo/my-action@my-action/v0.1.0

   # Not recommended: dash
   uses: my-org/monorepo@my-action-v0.1.0
