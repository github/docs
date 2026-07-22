---
title: Configuring OpenID Connect in Docker
shortTitle: OIDC in Docker
intro: Use OpenID Connect within your workflows to authenticate with Docker Hub without storing long-lived credentials.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Secure your workflows
---

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with [Docker Hub](https://hub.docker.com/) to push and pull container images without storing Docker passwords, {% data variables.product.pat_generic_plural %}, or organization access tokens (OATs) in {% data variables.product.company_short %}.

Instead of managing long-lived credentials, you configure a trust relationship between your {% data variables.product.prodname_dotcom %} organization and your Docker organization. When a workflow runs, {% data variables.product.prodname_dotcom %} issues a short-lived OIDC token that Docker validates against your configured rulesets, then issues a scoped access token for the workflow.

This guide gives an overview of how to configure Docker Hub to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in a {% data variables.product.prodname_actions %} workflow.

For more information, see [OIDC connections](https://docs.docker.com/enterprise/security/oidc-connections/) in the Docker documentation.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

{% data reusables.actions.oidc-on-ghecom %}

* You must have a Docker Business or Docker Team subscription.
* You must be an organization owner or editor in your Docker organization.
* You should plan which repositories, branches, and workflows need access to Docker Hub, and configure rulesets accordingly.

## Adding the identity provider to Docker Hub

To use OIDC with Docker, establish a trust relationship between {% data variables.product.prodname_actions %} and Docker Hub by creating an OIDC connection. For more information about this process, see [Create and manage OIDC connections](https://docs.docker.com/enterprise/security/oidc-connections/create-manage/) in the Docker documentation.

1. Sign in to [Docker Home](https://app.docker.com/) and navigate to your organization.
1. Go to **Identity & auth** > **OIDC connections**.
1. Select **Create OIDC connection**.
1. Configure at least one ruleset to define which {% data variables.product.prodname_dotcom %} repositories, branches, or workflows can authenticate. Each ruleset specifies:
   * **Rules**: Conditions matched against OIDC token claims (repository, branch, workflow path). Wildcard patterns like `repo:my-org/*` are supported.
   * **Resources**: Docker Hub repositories or Docker Build Cloud projects the workflow can access.
   * **Scopes**: Permission levels (`read`, `write`).
1. Save the connection and copy the **connection ID** for use in your workflow.

## Updating your {% data variables.product.prodname_actions %} workflow

Once you have created an OIDC connection in Docker Hub, update your workflow to authenticate using the [`docker/oidc-action`](https://github.com/docker/oidc-action) and [`docker/login-action`](https://github.com/docker/login-action) actions.

The following example uses the placeholder `YOUR_CONNECTION_ID` for the connection ID you copied from Docker Hub, and `YOUR_DOCKER_ORG` for your Docker organization name.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}
permissions:
  id-token: write
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Get Docker OIDC token
        id: docker-oidc
        uses: docker/oidc-action@3f002d200df5620744c973221788e401898c6f86 # v1
        with:
          connection_id: YOUR_CONNECTION_ID

      - name: Sign in to Docker Hub
        uses: docker/login-action@af1e73f918a031802d376d3c8bbc3fe56130a9b0 # v4
        with:
          username: YOUR_DOCKER_ORG
          password: {% raw %}${{ steps.docker-oidc.outputs.token }}{% endraw %}

      - name: Build and push
        uses: docker/build-push-action@10e90e3645eae34f1e60eeb005ba3a3d33f178e8 # v6
        with:
          push: true
          tags: YOUR_DOCKER_ORG/my-image:latest
```

### Key workflow settings

* **`permissions.id-token: write`** is required so that {% data variables.product.prodname_dotcom %} can issue an OIDC token for the workflow.
* The `docker/oidc-action` exchanges the {% data variables.product.prodname_dotcom %} OIDC token for a short-lived Docker access token based on your connection's rulesets.
* The `docker/login-action` uses the token output to authenticate with Docker Hub. The `username` field should be your Docker organization name.

### Subject claim matching

Docker evaluates the `sub` claim from the {% data variables.product.prodname_dotcom %} OIDC token against the rulesets you configured. The default subject claim format is:

```text
repo:<owner>/<repo>:ref:refs/heads/<branch>
```

> [!NOTE]
> Repositories created or renamed after July 15, 2026 use immutable owner and repository identifiers in the subject claim, for example: `repo:octocat@123456/my-repo@456789:ref:refs/heads/main`. For more information, see [AUTOTITLE](/actions/concepts/security/openid-connect).

Different workflow triggers produce different subject claims. For example:

| Trigger | Subject claim format |
|---------|---------------------|
| Branch push | `repo:my-org/my-repo:ref:refs/heads/main` |
| Pull request | `repo:my-org/my-repo:pull_request` |
| Tag | `repo:my-org/my-repo:ref:refs/tags/v1.0` |
| Environment | `repo:my-org/my-repo:environment:production` |

You can use wildcard patterns in your rulesets to match multiple repositories or branches. For example, `repo:my-org/*` matches all repositories in your organization.

For more information, see [Rulesets and subject claims](https://docs.docker.com/enterprise/security/oidc-connections/rulesets-claims/) in the Docker documentation.

## Further reading

* [AUTOTITLE](/actions/concepts/security/openid-connect)
