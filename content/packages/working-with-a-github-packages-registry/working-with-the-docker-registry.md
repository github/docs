---
title: Working with the Docker registry
intro: '{% ifversion fpt or ghec %}The Docker registry has now been replaced by the {% data variables.product.prodname_container_registry %}.{% else %}You can push and pull your Docker images using the {% data variables.product.prodname_registry %} Docker registry.{% endif %}'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Docker registry
---

<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}'s Docker registry (which used the namespace `docker.pkg.github.com`) has been replaced by the {% data variables.product.prodname_container_registry %} (which uses the namespace `https://ghcr.io`). The {% data variables.product.prodname_container_registry %} offers benefits such as granular permissions and storage optimizations for Docker images.

Docker images previously stored in the Docker registry are being automatically migrated into the {% data variables.product.prodname_container_registry %}. For more information, see [AUTOTITLE](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry) and [AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## About Docker support

When installing or publishing a Docker image, the Docker registry does not currently support foreign layers, such as Windows images.

Docker Engine v25 is not compatible with the Docker Registry on {% data variables.product.prodname_ghe_server %}. We recommend using {% data variables.product.prodname_container_registry %} instead. For information on migrating, see [AUTOTITLE](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry).

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with Docker using the `docker` login command.

To keep your credentials secure, we recommend you save your {% data variables.product.pat_generic %} in a local file on your computer and use Docker's `--password-stdin` flag, which reads your token from a local file.

If your instance has subdomain isolation enabled:

{% raw %}

```shell
cat ~/TOKEN.txt | docker login docker.HOSTNAME -u USERNAME --password-stdin
```

{% endraw %}

If your instance has subdomain isolation disabled:

{% raw %}

```shell
cat ~/TOKEN.txt | docker login HOSTNAME -u USERNAME --password-stdin
```

{% endraw %}

To use this example login command, replace `USERNAME` with your {% data variables.product.github %} username, `HOSTNAME` with the URL for {% data variables.location.product_location %}, and `~/TOKEN.txt` with the file path to your {% data variables.product.pat_generic %} for {% data variables.product.github %}.

For more information, see [Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin).

## Publishing an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

> [!NOTE]
> Image names must only use lowercase letters.

{% data variables.product.prodname_registry %} supports multiple top-level Docker images per repository. A repository can have any number of image tags. You may experience degraded service publishing or installing Docker images larger than 10GB, layers are capped at 5GB each. For more information, see [Docker tag](https://docs.docker.com/engine/reference/commandline/tag/) in the Docker documentation.

{% data reusables.package_registry.viewing-packages %}

1. Determine the image name and ID for your docker image using `docker images`.

   ```shell
   $ docker images
   > <&nbsp>
   > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
   > IMAGE_NAME        VERSION    IMAGE_ID       4 weeks ago  1.11MB
   ```

1. Using the Docker image ID, tag the Docker image, replacing OWNER with the name of the personal account or organization that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, HOSTNAME with the hostname of {% data variables.location.product_location %}, and VERSION with package version at build time.

   If your instance has subdomain isolation enabled:

   ```shell
   docker tag IMAGE_ID docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

   If your instance has subdomain isolation disabled:

   ```shell
   docker tag IMAGE_ID HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

1. If you haven't already built a Docker image for the package, build the image, replacing OWNER with the name of the personal account or organization that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, VERSION with package version at build time, HOSTNAME with the hostname of {% data variables.location.product_location %}, and PATH to the image if it isn't in the current working directory.

   If your instance has subdomain isolation enabled:

   ```shell
   docker build -t docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
   ```

   If your instance has subdomain isolation disabled:

   ```shell
   docker build -t HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
   ```

1. Publish the image to {% data variables.product.prodname_registry %}.

   If your instance has subdomain isolation enabled:

   ```shell
   docker push docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

   If your instance has subdomain isolation disabled:

   ```shell
   docker push HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

   > [!NOTE]
   > You must push your image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

### Example publishing a Docker image

These examples assume your instance has subdomain isolation enabled.

You can publish version 1.0 of the `monalisa` image to the `octocat/octo-app` repository using an image ID.

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with OWNER/REPO/IMAGE_NAME
$ docker tag c75bebcdd211 docker.HOSTNAME/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

You can publish a new Docker image for the first time and name it `monalisa`.

```shell
# Build the image with docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.HOSTNAME/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

## Downloading an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

You can use the `docker pull` command to install a docker image from {% data variables.product.prodname_registry %}, replacing OWNER with the name of the personal account or organization that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, HOSTNAME with the host name of {% data variables.location.product_location %}, and TAG_NAME with tag for the image you want to install.

If your instance has subdomain isolation enabled:

```shell
docker pull docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```

If your instance has subdomain isolation disabled:

```shell
docker pull HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```

> [!NOTE]
> You must pull the image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

## Further reading

* [AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)

{% endif %}  <!-- End of main versioning block -->
