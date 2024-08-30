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

For more information about {% data variables.product.prodname_dependabot %}, see "[AUTOTITLE](/code-security/getting-started/dependabot-quickstart-guide)."

In this article, you can see what the supported ecosystems and repositories are.

## Supported ecosystems and repositories
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

You can configure updates for repositories that contain a dependency manifest or lock file for one of the supported package managers. For some package managers, you can also configure vendoring for dependencies. For more information, see [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor).
{% data variables.product.prodname_dependabot %} also supports dependencies in private registries. For more information, see [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries).
{% ifversion ghes %}

> [!NOTE]
> To ensure that {% data variables.product.product_name %} supports {% data variables.product.prodname_dependabot_updates %} for the latest supported ecosystem versions, your enterprise owner must download the most recent version of the [{% data variables.product.prodname_dependabot %} action](https://github.com/github/dependabot-action). {% data reusables.actions.action-bundled-actions %}
{% endif %}

> [!NOTE]
> * {% data reusables.dependabot.private-dependencies-note %}
> * {% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. See the details in the table below.

If your repository already uses an integration for dependency management, you will need to disable this before enabling {% data variables.product.prodname_dependabot %}. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-integrations)."{% endif %}

{% data reusables.dependabot.supported-package-managers %}
