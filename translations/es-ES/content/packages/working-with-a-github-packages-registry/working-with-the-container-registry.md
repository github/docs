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

{% ifversion ghes > 3.4 %}

To use the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, your site administrator must first configure {% data variables.product.prodname_registry %} for your instance **and** enable subdomain isolation. For more information, see "[Getting started with GitHub Packages for your enterprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise)" and "[Enabling subdomain isolation](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)."

{% endif %}

## About {% data variables.product.prodname_container_registry %} support

The {% data variables.product.prodname_container_registry %} currently supports the following container image formats:

* [Docker Image Manifest V2, Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) Specifications](https://github.com/opencontainers/image-spec)

When installing or publishing a Docker image, the {% data variables.product.prodname_container_registry %} supports foreign layers, such as Windows images.

## Authenticating to the {% data variables.product.prodname_container_registry %}

{% ifversion fpt or ghec or ghes > 3.4 %}
To authenticate to the {% data variables.product.prodname_container_registry %} (`ghcr.io`) within a {% data variables.product.prodname_actions %} workflow, use the `GITHUB_TOKEN` for the best security and experience. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}
{% endif %}

{% ifversion ghes %}Ensure that you replace `HOSTNAME` with {% data variables.product.product_location_enterprise %} hostname or IP address in the examples below.{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## Pushing container images

This example pushes the latest version of `IMAGE_NAME`.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

This example pushes the `2.5` version of the image.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

When you first publish a package, the default visibility is private. To change the visibility or set access permissions, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

## Pulling container images

### Pull by digest

To ensure you're always using the same image, you can specify the exact container image version you want to pull by the `digest` SHA value.

1. To find the digest SHA value, use `docker inspect` or `docker pull` and copy the SHA value after `Digest:`
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. Remove image locally as needed.
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. Pull the container image with `@YOUR_SHA_VALUE` after the image name.
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### Pull by name

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### Pull by name and version

Docker CLI example showing an image pulled by its name and the `1.14.1` version tag:
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  > {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  ```

### Pull by name and latest version

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## Building container images

This example builds the `hello_docker` image:
  ```shell
  $ docker build -t hello_docker .
  ```

## Tagging container images

1. Find the ID for the Docker image you want to tag.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Tag your Docker image using the image ID and your desired image name and hosting destination.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```
