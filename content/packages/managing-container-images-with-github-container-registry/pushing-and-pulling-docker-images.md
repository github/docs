---
title: Pushing and pulling Docker images
intro: 'You can store and manage Docker images in {% data variables.product.prodname_github_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

To push and pull container images owned by an organization, an organization admin must enable {% data variables.product.prodname_github_container_registry %} for the organization. For more information, see "[Enabling GitHub Container Registry for your organization](/packages/getting-started-with-github-container-registry/enabling-github-container-registry-for-your-organization)."

### Authenticating to {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### Pushing container images

This example pushes the latest version of `IMAGE-NAME`.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME.latest
  ```

This example pushes the `2.5` version of the image.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:2.5
  ```

When you first publish a package, the default visibility is private. To change the visibility or set access permissions, see "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

### Pulling container images

#### Pull by digest

To ensure you're always using the same image, you can specify the exact container image version you want to pull by the `digest` SHA value.

1. To find the digest SHA value, use `docker inspect` or `docker pull` and copy the SHA value after `Digest:`
  ```shell
  $ docker inspect ghcr.io/OWNER/IMAGE_NAME
  ```
2. Remove image locally as needed.
  ```shell
  $ docker rmi  ghcr.io/OWNER/IMAGE_NAME.latest
  ```

3. Pull the container image with `@YOUR_SHA_VALUE` after the image name.
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

#### Pull by name

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME
  ```

#### Pull by name and version

Docker CLI example showing an image pulled by its name and the `1.14.1` version tag:
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for ghcr.io/orgname/image-name/release:1.14.1
  > ghcr.io/orgname/image-name/release:1.14.1
  ```

#### Pull by name and latest version

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for ghcr.io/user/image-name:latest
  > ghcr.io/user/image-name:latest
  ```

### Building container images

This example builds the `hello_docker` image:
  ```shell
  $ docker build -t hello_docker .
  ```

### Tagging container images

1. Find the ID for the Docker image you want to tag.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Tag your Docker image using the image ID and your desired image name and hosting destination.
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/OWNER/NEW_IMAGE_NAME:latest
  ```
