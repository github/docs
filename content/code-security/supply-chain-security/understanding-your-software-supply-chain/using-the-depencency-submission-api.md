---
title: Using the Dependency submission API
intro: 'You can use the Dependency submission API to submit dependencies for projects that resolve dependencies when the project is built or compiled.'
shortTitle: Dependency submission API
versions:
  feature: dependency-submission-api
---

{% data reusables.dependency-submission.dependency-submission-api-beta %}

## About the Dependency submission API

{% data reusables.dependency-submission.about-dependency-submission %}

For more information about the Dependency submission API, see the [Dependency submission REST API documentation](/rest/dependency-graph/dependency-submission).

## Submitting dependencies at build-time

You can use the Dependency submission API in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built. You workflow should:

- generate a list of dependencies for your project.
- translate the list of dependencies into the format accepted by the Dependency submission API. For more information about the format, see the body parameters for the "Create a repository snapshot" API operation in the [Dependency graph REST API documentation](/rest/dependency-graph/dependency-graph#create-repository-snapshot).
- submit the formatted list of dependencies to the Dependency submission API.

Actions that perform these steps for various ecosystems are available on {% data variables.product.prodname_marketplace %}. todo link to them once available, or tell users how to find them.

For example, this workflow uses the [anchore/sbom-action](https://github.com/marketplace/actions/anchore-sbom-action) action to submit dependencies . Todo change this to match whatever the starter workflow will use, and give more guidance if needed.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Submit dependencies

on:
  push:
    branches:    
      - 'main'

jobs:
  submit-dependencies:
    runs-on: ubuntu-latest
    steps:
    - uses: anchore/sbom-action@bb716408e75840bbb01e839347cd213767269d4a
      with:
        image: ghcr.io/example/image_name:tag
```

Alternatively, you can write your own action to perform these steps. {% data variables.product.product_name %} maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you write an action to perform these steps. For more information about writing an action, see "[Creating actions](/actions/creating-actions)".

todo link to starter workflows once available
