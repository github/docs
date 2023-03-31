---
title: Configuring OpenID Connect in PyPI
shortTitle: OpenID Connect in PyPI
intro: Use OpenID Connect within your workflows to authenticate with PyPI
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with [PyPI](https://pypi.org) to publish Python packages.

This guide gives an overview of how to configure PyPI to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in the [`pypa/gh-action-pypa-publish`](https://github.com/pypa/gh-action-pypa-publish) action to publish packages to PyPI (or other Python package indices) without any manual API token management.

{% ifversion ghes %}
{% note %}

**Note:** PyPI currently only supports OIDC federation with GitHub's own hosted OIDC IdP, which is identified by its issuer (`https://token.actions.githubusercontent.com`). Self-hosted GitHub Enterprise instances are not supported.

{% endnote %}
{% endif %}

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the identity provider to PyPI

To use OIDC with PyPI, you will need to add a trust configuration that links each project on PyPI to each repository and workflow combination that's allowed to publish for it.

To configure a PyPI project to allow OIDC publishing:

1. Log into PyPI, and navigate to the OIDC publishing settings for the project you'd like to configure. For a project named `myproject`, this will be at `https://pypi.org/manage/project/myproject/settings/publishing/`.

2. Configure a trust relationship between the PyPI project and a GitHub repository (and workflow within the repository). For example, if your GitHub repository is at `myorg/myproject` and your release workflow is defined in `release.yml`,
then you should use the following settings for your GitHub OIDC publisher on PyPI:

    * Owner: `myorg`
    * Repository name: `myproject`
    * Workflow name: `release.yml`

    Take care to enter these values correctly: giving the incorrect user, repository, or workflow
    the ability to publish to your PyPI project is equivalent to sharing an API token.

## Updating your {% data variables.product.prodname_actions %} workflow

Once your OIDC publisher is registered on PyPI, you can update your release workflow to use OIDC publishing.

The [`pypa/gh-action-pypi-publish`](https://github.com/pypa/gh-action-pypa-publish) has built-in support for OIDC publishing, which can be enabled by giving its containing job the `id-token: write` permission and omitting the ordinary `username` and `password` action settings.

The following example uses `pypa/gh-action-pypi-publish` to exchange an OIDC token for a PyPI API token, which is then used to upload a package's release distributions to PyPI.

```yaml{:copy}
jobs:
  release-build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: "3.x"

      - name: build release distributions
        run: |
          # NOTE: put your own distribution build steps here.
          python -m build

      - name: upload windows dists
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: release-dists
          path: dist/

  pypi-publish:
    runs-on: ubuntu-latest
    needs:
      - release-build
    permissions:
      id-token: write

    steps:
      - name: Retrieve release distributions
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: release-dists
          path: dist/

      - name: Publish release distributions to PyPI
        uses: pypa/gh-action-pypi-publish@release/v1
```
