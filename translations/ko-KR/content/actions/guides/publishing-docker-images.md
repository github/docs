---
title: Publishing Docker images
intro: 'You can publish Docker images to a registry, such as Docker Hub or {% data variables.product.prodname_registry %}, as part of your continuous integration (CI) workflow.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction

This guide shows you how to create a workflow that performs a Docker build, and then publishes Docker images to Docker Hub or {% data variables.product.prodname_registry %}. With a single workflow, you can publish images to a single registry or to multiple registries.

{% note %}

**Note:** If you want to push to another third-party Docker registry, the example in the "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" section can serve as a good template.

{% endnote %}

### 빌드전 요구 사양

We recommend that you have a basic understanding of workflow configuration options and how to create a workflow file. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

You might also find it helpful to have a basic understanding of the following:

- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"
- "[Configuring Docker for use with {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)"

### About image configuration

This guide assumes that you have a complete definition for a Docker image stored in a {% data variables.product.prodname_dotcom %} repository. For example, your repository must contain a _Dockerfile_, and any other files needed to perform a Docker build to create an image.

In this guide, we will use the Docker `build-push-action` action to build the Docker image and push it to one or more Docker registries. For more information, see [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Publishing images to Docker Hub

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `build-push-action` action to build the Docker image and, if the build succeeds, push the built image to Docker Hub.

To push to Docker Hub, you will need to have a Docker Hub account, and have a Docker Hub repository created. For more information, see "[Share images on Docker Hub](https://docs.docker.com/get-started/part3/)" in the Docker documentation.

The `build-push-action` options required for Docker Hub are:

* `username` and `password`: This is your Docker Hub username and password. We recommend storing your Docker Hub username and password as encrypted secrets in your {% data variables.product.prodname_dotcom %} repository so they aren't exposed in your workflow file. For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
* `repository`: Your Docker Hub repository in the format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY`.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publishing images to {% data variables.product.prodname_registry %}

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `build-push-action` action to build the Docker image, and if the build succeeds, push the built image to {% data variables.product.prodname_registry %}.

The `build-push-action` options required for {% data variables.product.prodname_registry %} are:

* `username`: You can use the {% raw %}`${{ github.actor }}`{% endraw %} context to automatically use the username of the user that triggered the workflow run. For more information, see "[Context and expression syntax for GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."
* `password`: You can use the automatically-generated `GITHUB_TOKEN` secret for the password. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."
* `registry`: Must be set to `docker.pkg.github.com`.
* `repository`: Must be set in the format `OWNER/REPOSITORY/IMAGE_NAME`. For example, for an image named `octo-image` stored on {% data variables.product.prodname_dotcom %} at `http://github.com/octo-org/octo-repo`, the `repository` option should be set to `octo-org/octo-repo/octo-image`.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true

```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publishing images to Docker Hub and {% data variables.product.prodname_registry %}

In a single workflow, you can publish your Docker image to multiple registries by using the `build-push-action` action for each registry.

The following example workflow uses the `build-push-action` steps from the previous sections ("[Publishing images to Docker Hub](#publishing-images-to-docker-hub)" and "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") to create a single workflow that pushes to both registries.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true
```
{% endraw %}

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, and uses the `build-push-action` action twice to build and push the Docker image to Docker Hub and {% data variables.product.prodname_registry %}. For both steps, it sets the `build-push-action` option [`tag_with_ref`](https://github.com/marketplace/actions/build-and-push-docker-images#tag_with_ref) to automatically tag the built Docker image with the Git reference of the workflow event. This workflow is triggered on publishing a {% data variables.product.prodname_dotcom %} release, so the reference for both registries will be the Git tag for the release.
