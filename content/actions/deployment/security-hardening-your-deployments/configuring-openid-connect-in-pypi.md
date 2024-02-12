---
title: Configuring OpenID Connect in PyPI
shortTitle: OpenID Connect in PyPI
intro: Use OpenID Connect within your workflows to authenticate with PyPI.
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Security
  - Actions
---

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with [PyPI](https://pypi.org) to publish Python packages.

This guide gives an overview of how to configure PyPI to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in the [`pypa/gh-action-pypi-publish`](https://github.com/marketplace/actions/pypi-publish) action to publish packages to PyPI (or other Python package repositories) without any manual API token management.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the identity provider to PyPI

To use OIDC with PyPI, add a trust configuration that links each project on PyPI to each repository and workflow combination that's allowed to publish for it.

1. Sign in to PyPI and navigate to the trusted publishing settings for the project you'd like to configure. For a project named `myproject`, this will be at `https://pypi.org/manage/project/myproject/settings/publishing/`.

1. Configure a trust relationship between the PyPI project and a {% data variables.product.prodname_dotcom %} repository (and workflow within the repository). For example, if your {% data variables.product.prodname_dotcom %} repository is at `myorg/myproject` and your release workflow is defined in `release.yml` with an environment of `release`, you should use the following settings for your trusted publisher on PyPI.

   {% note %}

   **Note:** Enter these values carefully. Giving the incorrect user, repository, or workflow
   the ability to publish to your PyPI project is equivalent to sharing an API token.

   {% endnote %}

   - Owner: `myorg`
   - Repository name: `myproject`
   - Workflow name: `release.yml`
   - (Optionally) a {% data variables.product.prodname_actions %} environment name: `release`

## Updating your {% data variables.product.prodname_actions %} workflow

Once your trusted publisher is registered on PyPI, you can update your release workflow to use trusted publishing.

The [`pypa/gh-action-pypi-publish`](https://github.com/marketplace/actions/pypi-publish) action has built-in support for trusted publishing, which can be enabled by giving its containing job the `id-token: write` permission and omitting `username` and `password`.

The following example uses the `pypa/gh-action-pypi-publish` action to exchange an OIDC token for a PyPI API token, which is then used to upload a package's release distributions to PyPI.

```yaml copy
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
