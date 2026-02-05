---
title: Dependabot on GitHub Actions
shortTitle: Dependabot on Actions
intro: Detailed information on using {% data variables.product.prodname_dependabot %} with {% data variables.product.prodname_actions %}.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Actions
  - Version updates
  - Dependencies
contentType: reference
---

## Restrictions when {% data variables.product.prodname_dependabot %} triggers events

{% data reusables.dependabot.working-with-actions-considerations %}

For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) using the `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment`, and `deployment_status` events, these restrictions apply:

* `GITHUB_TOKEN` has read-only permissions by default.
* Secrets are populated from {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are not available.

For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) using the `pull_request_target` event, if the base ref of the pull request was created by {% data variables.product.prodname_dependabot %} (`github.event.pull_request.user.login == 'dependabot[bot]'`), the `GITHUB_TOKEN` will be read-only and secrets are not available.

These restrictions apply even if the workflow is re-run by a different actor.

For more information, see [Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

## Requirements for using {% data variables.product.prodname_dependabot %} with self-hosted runners

To generate {% data variables.product.prodname_dependabot_updates %} using self-hosted runners, you need to properly configure your system, network, and certificates.

### System requirements

{% data reusables.dependabot.dependabot-runners-system-requirements %}

### Network requirements

{% data reusables.dependabot.dependabot-runners-network-requirements %}

### Certificate configuration

If {% data variables.product.prodname_dependabot %} needs to interact with registries that use self-signed certificates, those certificates must also be installed on the self-hosted runners that run {% data variables.product.prodname_dependabot %} jobs. This security hardens the connection. You must also configure Node.js to use the certificate, because most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store.
