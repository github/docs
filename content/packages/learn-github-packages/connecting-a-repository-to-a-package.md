---
title: Connecting a repository to a package
intro: 'You can connect a repository to a package on {% data variables.location.product_location %}.'
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

When you publish a package that is scoped to a personal account or an organization, the package is not linked to a repository by default. If you connect a package to a repository, the package's landing page will show information and links from the repository, such as the README. You can also choose to have the package inherit its access permissions from the linked repository. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

## Connecting a repository to a user-scoped package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
1. Search for and then click the name of the package that you want to manage.
{% data reusables.package_registry.repository_connection_steps %}

## Connecting a repository to an organization-scoped package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
1. Search for and then click the name of the package that you want to manage.
{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes %}

## Connecting a repository to a container image using the command line

{% data reusables.package_registry.auto-inherit-permissions-note %}

{% ifversion ghes %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

1. In your Dockerfile, add this line, replacing {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` and `REPO` with your details:

   ```shell
   LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPO
   ```

   For example, if you're the user `octocat` and own `my-repo`{% ifversion ghes %}, and your {% data variables.location.product_location %} hostname is `github.companyname.com`,{% endif %} you would add this line to your Dockerfile:

   ```shell
   LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/octocat/my-repo
   ```

   For more information, see "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" in the official Docker documentation and "[Pre-defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" in the `opencontainers/image-spec` repository.

1. Build your container image. This example builds an image from the Dockerfile in the current directory and assigns the image name `hello_docker`.

   ```shell
   docker build -t hello_docker .
   ```

1. Optionally, review the details of the Docker image you just created.

   ```shell
   $ docker images
   > REPOSITORY          TAG         IMAGE ID       CREATED         SIZE
   > hello_docker        latest      142e665b1faa   5 seconds ago   125MB
   > redis               latest      afb5e116cac0   3 months ago    111MB
   > alpine              latest      a6215f271958   5 months ago    5.29MB
   ```

1. Assign a name and hosting destination to your Docker image.

   ```shell
   docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/NEW_IMAGE_NAME:TAG
   ```

   Replace `NAMESPACE` with the name of the personal account or organization to which you want the package to be scoped.

   For example:

   ```shell
   docker tag 38f737a91f39 {% ifversion fpt or ghec %}ghcr.io{% elsif ghes %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/octocat/hello_docker:latest
   ```

1. If you haven't already, authenticate to the {% data variables.product.prodname_container_registry %}. For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)."
   {% raw %}

   ```shell
   $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
   > Login Succeeded
   ```

   {% endraw %}
1. Push your container image to the {% data variables.product.prodname_container_registry %}.

   ```shell
   docker push {% data reusables.package_registry.container-registry-hostname %}/NAMESPACE/IMAGE-NAME:TAG
   ```

   For example:

   ```shell
   docker push {% ifversion fpt or ghec %}ghcr.io{% elsif ghes %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/octocat/hello_docker:latest
   ```

{% endif %}
