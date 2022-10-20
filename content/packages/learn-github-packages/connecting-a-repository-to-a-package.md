---
title: Connecting a repository to a package
intro: 'You can connect a repository to a container image on {% data variables.location.product_location %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
---

By connecting a repository to a package, the package landing page will show information and links from the repository, such as the README.

## Connecting a repository to a user-owned package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## Connecting a repository to an organization-owned package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## Connecting a repository to a container image using the command line

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

1. In your Dockerfile, add this line, replacing {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` and `REPO` with your details:

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPO
 ```
 For example, if you're the user `monalisa` and own `my-repo`, and {% data variables.location.product_location %} hostname is `github.companyname.com`, you would add this line to your Dockerfile:
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 For more information, see "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" in the official Docker documentation and "[Pre-defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" in the `opencontainers/image-spec` repository.

2. Build your container image. This example builds an image from the Dockerfile in the current directory and assigns the image name `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Optionally, review details for the Docker image you want to tag.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Tag your Docker image with your desired image name and hosting destination.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  For example:
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. If you haven't already, authenticate to the {% data variables.product.prodname_container_registry %}. For more information, see "[Authenticating to the {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)."
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Push your container image to the {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  For example:
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
