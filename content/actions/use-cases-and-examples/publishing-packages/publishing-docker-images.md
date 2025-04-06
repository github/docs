---
title: Publishing Docker images
shortTitle: Publish Docker images
intro: 'You can publish Docker images to a registry, such as Docker Hub or {% data variables.product.prodname_registry %}, as part of your continuous integration (CI) workflow.'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
  - /actions/publishing-packages/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
layout: inline
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that performs a Docker build, and then publishes Docker images to Docker Hub or {% data variables.product.prodname_registry %}. With a single workflow, you can publish images to a single registry or to multiple registries.

{% note %}

**Note:** If you want to push to another third-party Docker registry, the example in the "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" section can serve as a good template.

{% endnote %}

## Prerequisites

We recommend that you have a basic understanding of workflow configuration options and how to create a workflow file. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

You might also find it helpful to have a basic understanding of the following:

* "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)"
* "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)"{% ifversion fpt or ghec %}
* "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
* "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## About image configuration

This guide assumes that you have a complete definition for a Docker image stored in a {% data variables.product.prodname_dotcom %} repository. For example, your repository must contain a _Dockerfile_, and any other files needed to perform a Docker build to create an image.

{% data reusables.package_registry.about-annotation-keys %} For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#labelling-container-images)."

In this guide, we will use the Docker `build-push-action` action to build the Docker image and push it to one or more Docker registries. For more information, see [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Publishing images to Docker Hub

Each time you create a new release on {% data variables.product.product_name %}, you can trigger a workflow to publish your image. The workflow in the example below runs when the `release` event triggers with the `published` activity type.

In the example workflow below, we use the Docker `login-action` and `build-push-action` actions to build the Docker image and, if the build succeeds, push the built image to Docker Hub.

To push to Docker Hub, you will need to have a Docker Hub account, and have a Docker Hub repository created. For more information, see "[Pushing a Docker container image to Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" in the Docker documentation.

The `login-action` options required for Docker Hub are:
* `username` and `password`: This is your Docker Hub username and password. We recommend storing your Docker Hub username and password as secrets so they aren't exposed in your workflow file. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

The `metadata-action` option required for Docker Hub is:
* `images`: The namespace and name for the Docker image you are building/pushing to Docker Hub.

The `build-push-action` options required for Docker Hub are:
* `tags`: The tag of your new image in the format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. You can set a single tag as shown below, or specify multiple tags in a list.
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
      {% ifversion artifact-attestations %}attestations: write{% endif %}
      {% ifversion artifact-attestations %}id-token: write{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}

      - name: Log in to Docker Hub
        uses: docker/login-action@f4ef78c080cd8ba55a85445d5b36e214a81df20a
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository

      - name: Build and push Docker image
        id: push
        uses: docker/build-push-action@3b5e8027fcad23fda98b2e3ac259d8d67585f671
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}

{% ifversion artifact-attestations %}
      - name: Generate artifact attestation
        uses: actions/attest-build-provenance@v1
        with:
          subject-name: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME}}{% endraw %}
          subject-digest: {% raw %}${{ steps.push.outputs.digest }}{% endraw %}
          push-to-registry: true
{% endif -%}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` to log in to the registry, and then uses the `build-push-action` action to: build a Docker image based on your repository's `Dockerfile`; push the image to Docker Hub, and apply a tag to the image.

{% ifversion artifact-attestations %}{% data reusables.actions.artifact-attestations-step-explanation %}{% endif %}

## Publishing images to {% data variables.product.prodname_registry %}

{% ifversion ghes %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

Each time you create a new release on {% data variables.product.product_name %}, you can trigger a workflow to publish your image. The workflow in the example below runs when a change is pushed to the `release` branch.

In the example workflow below, we use the Docker `login-action`{% ifversion fpt or ghec %}, `metadata-action`,{% endif %} and `build-push-action` actions to build the Docker image, and if the build succeeds, push the built image to {% data variables.product.prodname_registry %}.

The `login-action` options required for {% data variables.product.prodname_registry %} are:
* `registry`: Must be set to {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: You can use the {% raw %}`${{ github.actor }}`{% endraw %} context to automatically use the username of the user that triggered the workflow run. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#github-context)."
* `password`: You can use the automatically-generated `GITHUB_TOKEN` secret for the password. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

{% ifversion fpt or ghec %}
The `metadata-action` option required for {% data variables.product.prodname_registry %} is:
* `images`: The namespace and name for the Docker image you are building.
{% endif %}

The `build-push-action` options required for {% data variables.product.prodname_registry %} are:{% ifversion fpt or ghec %}

* `context`: Defines the build's context as the set of files located in the specified path.{% endif %}
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.{% ifversion fpt or ghec %}
* `tags` and `labels`: These are populated by output from `metadata-action`.{% else %}
* `tags`: Must be set in the format {% ifversion ghes %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   For example, for an image named `octo-image` stored on {% data variables.product.prodname_ghe_server %} at `https://HOSTNAME/octo-org/octo-repo`, the `tags` option should be set to `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   For example, for an image named `octo-image` stored on {% data variables.product.prodname_dotcom %} at `http://github.com/octo-org/octo-repo`, the `tags` option should be set to `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. You can set a single tag as shown below, or specify multiple tags in a list.{% endif %}

{% data reusables.package_registry.publish-docker-image %}

The above workflow is triggered by a push to the "release" branch. It checks out the GitHub repository, and uses the `login-action` to log in to the {% data variables.product.prodname_container_registry %}. It then extracts labels and tags for the Docker image. Finally, it uses the `build-push-action` action to build the image and publish it on the {% data variables.product.prodname_container_registry %}.

## Publishing images to Docker Hub and {% data variables.product.prodname_registry %}

{% ifversion ghes %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

In a single workflow, you can publish your Docker image to multiple registries by using the `login-action` and `build-push-action` actions for each registry.

The following example workflow uses the steps from the previous sections ("[Publishing images to Docker Hub](#publishing-images-to-docker-hub)" and "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") to create a single workflow that pushes to both registries.

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
      {% ifversion artifact-attestations %}attestations: write{% endif %}
      {% ifversion artifact-attestations %}id-token: write{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}

      - name: Log in to Docker Hub
        uses: docker/login-action@f4ef78c080cd8ba55a85445d5b36e214a81df20a
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}

      - name: Log in to the Container registry
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghes %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}

      - name: Build and push Docker images
        id: push
        uses: docker/build-push-action@3b5e8027fcad23fda98b2e3ac259d8d67585f671
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}

{% ifversion artifact-attestations %}
      - name: Generate artifact attestation
        uses: actions/attest-build-provenance@v1
        with:
          subject-name: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME}}{% endraw %}
          subject-digest: {% raw %}${{ steps.push.outputs.digest }}{% endraw %}
          push-to-registry: true
{% endif -%}
```

The above workflow checks out the {% data variables.product.product_name %} repository, uses the `login-action` twice to log in to both registries and generates tags and labels with the `metadata-action` action.
Then the `build-push-action` action builds and pushes the Docker image to Docker Hub and the {% data variables.product.prodname_container_registry %}.

{% ifversion artifact-attestations %}{% data reusables.actions.artifact-attestations-step-explanation %}{% endif %}
