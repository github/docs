---
title: Troubleshooting Dependabot on GitHub Actions
intro: 'This article provides troubleshooting information for issues you may encounter when using {% data variables.product.prodname_dependabot %} with {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Troubleshoot Dependabot on Actions
redirect_from:
  - /code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-on-github-actions
---

## Restrictions when {% data variables.product.prodname_dependabot %} triggers events

{% data reusables.dependabot.working-with-actions-considerations %}

For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) using the `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment`, and `deployment_status` events, these restrictions apply:

* `GITHUB_TOKEN` has read-only permissions by default.
* Secrets are populated from {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are not available.

For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) using the `pull_request_target` event, if the base ref of the pull request was created by {% data variables.product.prodname_dependabot %} (`github.event.pull_request.user.login == 'dependabot[bot]'`), the `GITHUB_TOKEN` will be read-only and secrets are not available.

These restrictions apply even if the workflow is re-run by a different actor.

For more information, see [Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

## Troubleshooting failures when {% data variables.product.prodname_dependabot %} triggers existing workflows

{% data reusables.dependabot.dependabot-on-actions-troubleshooting-workflows %}

Some troubleshooting advice is provided in this article. You can also see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

### Accessing secrets

When a {% data variables.product.prodname_dependabot %} event triggers a workflow, the only secrets available to the workflow are {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are **not available**. You must therefore store any secrets that are used by a workflow triggered by {% data variables.product.prodname_dependabot %} events as {% data variables.product.prodname_dependabot %} secrets. For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use).

{% data variables.product.prodname_dependabot %} secrets are added to the `secrets` context and referenced using exactly the same syntax as secrets for {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

If you have a workflow that will be triggered by {% data variables.product.prodname_dependabot %} and also by other actors, the simplest solution is to store the token with the permissions required in an action and in a {% data variables.product.prodname_dependabot %} secret with identical names. Then the workflow can include a single call to these secrets. If the secret for {% data variables.product.prodname_dependabot %} has a different name, use conditions to specify the correct secrets for different actors to use.

For examples that use conditions, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions).

To access a private container registry on AWS with a user name and password, a workflow must include a secret for `username` and `password`.

In this example, when {% data variables.product.prodname_dependabot %} triggers the workflow, the {% data variables.product.prodname_dependabot %} secrets with the names `READONLY_AWS_ACCESS_KEY_ID` and `READONLY_AWS_ACCESS_KEY` are used. If another actor triggers the workflow, the actions secrets with those names are used.

```yaml copy
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

### Changing `GITHUB_TOKEN` permissions

By default, {% data variables.product.prodname_actions %} workflows triggered by {% data variables.product.prodname_dependabot %} get a `GITHUB_TOKEN` with read-only permissions. You can use the `permissions` key in your workflow to increase the access for the token:

{% raw %}

```yaml copy
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token).

## Manually re-running a workflow

When you manually re-run a {% data variables.product.prodname_dependabot %} workflow, it will run with the same privileges as before even if the user who initiated the rerun has different privileges. For more information, see [AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs).
