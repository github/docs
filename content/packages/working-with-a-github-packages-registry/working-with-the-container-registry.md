---
title: Working with the Container registry
intro: 'You can store and manage Docker and OCI images in the {% data variables.product.prodname_container_registry %}, which uses the package namespace `https://{% data reusables.package_registry.container-registry-hostname %}`.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/container-guides-for-github-packages/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.5'
shortTitle: Container registry
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## About the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes %}

To use the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, your site administrator must first configure {% data variables.product.prodname_registry %} for your instance **and** enable subdomain isolation. For more information, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)" and "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)."

{% endif %}

## About {% data variables.product.prodname_container_registry %} support

The {% data variables.product.prodname_container_registry %} currently supports the following container image formats:

* [Docker Image Manifest V2, Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) Specifications](https://github.com/opencontainers/image-spec)

When installing or publishing a Docker image, the {% data variables.product.prodname_container_registry %} supports foreign layers, such as Windows images.

## Authenticating to the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-registries-v2 %}

### Authenticating in a {% data variables.product.prodname_actions %} workflow

This registry supports granular permissions. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

{% data reusables.package_registry.v2-actions-codespaces %}
{% endif %}

### Authenticating with a {% data variables.product.pat_v1 %}

{% ifversion ghes %}Ensure that you replace `HOSTNAME` with {% data variables.location.product_location_enterprise %} hostname or IP address in the examples below.{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## Pushing container images

This example pushes the latest version of `IMAGE_NAME`.

```shell
docker push {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:latest
```

Replace `NAMESPACE` with the name of the personal account or organization to which you want the image to be scoped.

This example pushes the `2.5` version of the image.

```shell
docker push {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:2.5
```

{% data reusables.package_registry.publishing-user-scoped-packages %} You can link a published package to a repository using the user interface or command line. For more information, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

When you push a container image from the command line, the image is not linked to a repository by default. This is the case even if you tag the image with a namespace that matches the name of the repository, such as `{% ifversion fpt or ghec %}ghcr.io{% elsif ghes %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/octocat/my-repo:latest`.

The easiest way to connect a repository to a container package is to publish the package from a workflow using `${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}`, as the repository that contains the workflow is linked automatically. Note that the `GITHUB_TOKEN` will not have permission to push the package if you have previously pushed a package to the same namespace, but have not connected the package to the repository.

To connect a repository when publishing an image from the command line, and to ensure your `GITHUB_TOKEN` has appropriate permissions when using a GitHub Actions workflow, we recommend adding the label `org.opencontainers.image.source` to your `Dockerfile`. For more information, see “[Labelling container images](#labelling-container-images)” in this article and “[AUTOTITLE](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions).”

## Pulling container images

### Pull by digest

To ensure you're always using the same image, you can specify the exact container image version you want to pull by the `digest` SHA value.

1. To find the digest SHA value, use `docker inspect` or `docker pull` and copy the SHA value after `Digest:`

   ```shell
   docker inspect {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME
   ```

   Replace `NAMESPACE` with the name of the personal account or organization to which the image is scoped.
1. Remove image locally as needed.

   ```shell
   docker rmi  {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:latest
   ```

1. Pull the container image with `@YOUR_SHA_VALUE` after the image name.

   ```shell
   docker pull {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
   ```

### Pull by name

```shell
docker pull {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME
```

Replace `NAMESPACE` with the name of the personal account or organization to which the image is scoped.

### Pull by name and version

Docker CLI example showing an image pulled by its name and the `1.14.1` version tag:

```shell
$ docker pull {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:1.14.1
> 5e35bd43cf78: Pull complete
> 0c48c2209aab: Pull complete
> fd45dd1aad5a: Pull complete
> db6eb50c2d36: Pull complete
> Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
> Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME/release:1.14.1
> {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME/release:1.14.1
```

Replace `NAMESPACE` with the name of the personal account or organization to which the image is scoped.

### Pull by name and latest version

```shell
$ docker pull {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:latest
> latest: Pulling from NAMESPACE/IMAGE_NAME
> Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
> Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:latest
> {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE_NAME:latest
```

Replace `NAMESPACE` with the name of the personal account or organization to which the image is scoped.

## Building container images

This example builds the `hello_docker` image:

```shell
docker build -t hello_docker .
```

## Tagging container images

1. Find the ID for the Docker image you want to tag.

   ```shell
   $ docker images
   > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
   > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest            38f737a91f39        47 hours ago        91.7MB
   > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
   ```

1. Tag your Docker image using the image ID and your desired image name and hosting destination.

   ```shell
   docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/NEW_IMAGE_NAME:latest
   ```

Replace `NAMESPACE` with the name of the personal account or organization to which you want the image to be scoped.

## Labelling container images

{% data reusables.package_registry.about-annotation-keys %} Values for supported keys will appear on the package page for the image.

For most images, you can use Docker labels to add the annotation keys to an image. For more information, see [LABEL](https://docs.docker.com/engine/reference/builder/#label) in the official Docker documentation and [Pre-Defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys) in the `opencontainers/image-spec` repository.

For multi-arch images, you can add a description to the image by adding the appropriate annotation key to the `annotations` field in the image's manifest. For more information, see "[Adding a description to multi-arch images](#adding-a-description-to-multi-arch-images)."

The following annotation keys are supported in the {% data variables.product.prodname_container_registry %}.

Key | Description
------|------------
| `org.opencontainers.image.source` | The URL of the repository associated with the package. For more information, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package#connecting-a-repository-to-a-container-image-using-the-command-line)."
| `org.opencontainers.image.description` | A text-only description limited to 512 characters. This description will appear on the package page, below the name of the package.
| `org.opencontainers.image.licenses` | An SPDX license identifier such as "MIT," limited to 256 characters. The license will appear on the package page, in the "Details" sidebar. For more information, see [SPDX License List](https://spdx.org/licenses/).

To add a key as a Docker label, we recommend using the `LABEL` instruction in your `Dockerfile`. For example, if you're the user `octocat` and you own `my-repo`, and your image is distributed under the terms of the MIT license, you would add the following lines to your `Dockerfile`:

```dockerfile
LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/octocat/my-repo
LABEL org.opencontainers.image.description="My container image"
LABEL org.opencontainers.image.licenses=MIT
```

{% data reusables.package_registry.auto-inherit-permissions-note %}

Alternatively, you can add labels to an image at buildtime with the `docker build` command.

```shell
$ docker build \
 --label "org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/octocat/my-repo" \
 --label "org.opencontainers.image.description=My container image" \
 --label "org.opencontainers.image.licenses=MIT"
```

### Adding a description to multi-arch images

A multi-arch image is an image that supports multiple architectures. It works by referencing a list of images, each supporting a different architecture, within a single manifest.

The description that appears on the package page for a multi-arch image is obtained from the `annotations` field in the image's manifest. Like Docker labels, annotations provide a way to associate metadata with an image, and support pre-defined annotation keys. For more information, see [Annotations](https://github.com/opencontainers/image-spec/blob/main/annotations.md) in the `opencontainers/image-spec` repository.

To provide a description for a multi-arch image, set a value for the `org.opencontainers.image.description` key in the `annotations` field of the manifest, as follows.

```json
"annotations": {
  "org.opencontainers.image.description": "My multi-arch image"
}
```

For example, the following {% data variables.product.prodname_actions %} workflow step builds and pushes a multi-arch image. The `outputs` parameter sets the description for the image.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

- name: Build and push Docker image
  uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4
  with:
    context: .
    file: ./Dockerfile
    platforms: {% raw %}${{ matrix.platforms }}{% endraw %}
    push: true
    outputs: type=image,name=target,annotation-index.org.opencontainers.image.description=My multi-arch image
```

## Troubleshooting

* The {% data variables.product.prodname_container_registry %} has a 10 GB size limit for each layer.
* The {% data variables.product.prodname_container_registry %} has a 10 minute timeout limit for uploads.
