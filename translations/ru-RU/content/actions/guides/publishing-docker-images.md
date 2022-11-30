---
title: Publishing Docker images
intro: 'You can publish Docker images to a registry, such as Docker Hub or {% data variables.product.prodname_registry %}, as part of your continuous integration (CI) workflow.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

This guide shows you how to create a workflow that performs a Docker build, and then publishes Docker images to Docker Hub or {% data variables.product.prodname_registry %}. With a single workflow, you can publish images to a single registry or to multiple registries.

{% note %}

**Note:** If you want to push to another third-party Docker registry, the example in the "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" section can serve as a good template.

{% endnote %}

### Требования

We recommend that you have a basic understanding of workflow configuration options and how to create a workflow file. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

You might also find it helpful to have a basic understanding of the following:

- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"
- "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"

### About image configuration

This guide assumes that you have a complete definition for a Docker image stored in a {% data variables.product.prodname_dotcom %} repository. For example, your repository must contain a _Dockerfile_, and any other files needed to perform a Docker build to create an image.

In this guide, we will use the Docker `build-push-action` action to build the Docker image and push it to one or more Docker registries. For more information, see [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Publishing images to Docker Hub

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action` and `build-push-action` actions to build the Docker image and, if the build succeeds, push the built image to Docker Hub.

To push to Docker Hub, you will need to have a Docker Hub account, and have a Docker Hub repository created. For more information, see "[Pushing a Docker container image to Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" in the Docker documentation.

The `login-action` options required for Docker Hub are:

* `username` and `password`: This is your Docker Hub username and password. We recommend storing your Docker Hub username and password as secrets so they aren't exposed in your workflow file. For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

The `build-push-action` options required for Docker Hub are:
* `tags`: The tag of your new image in the format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. You can set a single tag as shown below, or specify multiple tags in a list.
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.

{% raw %}
```yaml{:copy}
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
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:latest
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publishing images to {% data variables.product.prodname_registry %}

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action` and `build-push-action` actions to build the Docker image, and if the build succeeds, push the built image to {% data variables.product.prodname_registry %}.

The `login-action` options required for {% data variables.product.prodname_registry %} are:
* `registry`: Must be set to `docker.pkg.github.com`.
* `username`: You can use the {% raw %}`${{ github.actor }}`{% endraw %} context to automatically use the username of the user that triggered the workflow run. For more information, see "[Context and expression syntax for GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."
* `password`: You can use the automatically-generated `GITHUB_TOKEN` secret for the password. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

The `build-push-action` options required for {% data variables.product.prodname_registry %} are:
* `tags`: Must be set in the format `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. For example, for an image named `octo-image` stored on {% data variables.product.prodname_dotcom %} at `http://github.com/octo-org/octo-repo`, the `tags` option should be set to `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`. You can set a single tag as shown below, or specify multiple tags in a list.
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: |
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
```

{% data reusables.github-actions.docker-tag-with-ref %}

### Publishing images to Docker Hub and {% data variables.product.prodname_registry %}

In a single workflow, you can publish your Docker image to multiple registries by using the `login-action` and `build-push-action` actions for each registry.

The following example workflow uses the steps from the previous sections ("[Publishing images to Docker Hub](#publishing-images-to-docker-hub)" and "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") to create a single workflow that pushes to both registries.

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:{% raw %}${{ github.ref }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/my-image:${{ github.ref }}{% endraw %}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` twice to log in to both registries, and then uses the `build-push-action` action twice to build and push the Docker image to Docker Hub and {% data variables.product.prodname_registry %}. For both steps, it tags the built Docker image with the Git reference of the workflow event. This workflow is triggered on publishing a {% data variables.product.prodname_dotcom %} release, so the reference for both registries will be the Git tag for the release.
