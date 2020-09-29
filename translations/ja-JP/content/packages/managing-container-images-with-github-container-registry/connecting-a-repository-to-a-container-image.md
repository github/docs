---
title: Connecting a repository to a container image
intro: 'You can link a repository with a container image locally and on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

When you link a container image with a repository, the package landing page will show information and links from the repository, such as the README.

To connect a repository and a container image on {% data variables.product.prodname_dotcom %}, they must share the same owner on {% data variables.product.prodname_dotcom %}. For example, both `my_repo` and `hello_docker` are owned by the user `monalisa`:
```shell
https://github.com/monalisa/my_repo
https://github.com/monalisa/hello_docker
```

### Connecting a repository to a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Connecting a repository to an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Connecting a repository to a container image on the command line

1. In your Dockerfile, add this line, replacing `OWNER` and `REPO` with your details:

 ```shell
 LABEL org.opencontainers.image.source https://github.com/<em>OWNER</em>/<em>REPO</em>
 ```
 For example, if you're the user `monalisa` and own `my-repo`, you would add this line to your Dockerfile:
 ```shell
 LABEL org.opencontainers.image.source https://github.com/monalisa/my-repo
 ```
 For more information, see "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" in the official Docker documentation and "[Pre-defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" in the `opencontainers/image-spec` repository.

2. Build your container image. This example builds an image from the Dockerfile in the current directory and assigns the image name `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Optionally, review details for the Docker image you want to tag.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Tag your Docker image with your desired image name and hosting destination.
  ```shell
  $ docker tag IMAGE_NAME ghcr.io/OWNER/NEW_IMAGE_NAME:TAG
  ```
  例:
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/monalisa/hello_docker:latest
  ```

5. If you haven't already, authenticate to {% data variables.product.prodname_github_container_registry %}. For more information, see "[Authenticating to GitHub Container Registry](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-github-container-registry)."
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Push your container image to {% data variables.product.prodname_github_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:TAG
  ```
  例:
  ```shell
  $ docker push ghcr.io/monalisa/hello_docker:latest
  ```
