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
  ghae: '*'
  ghec: '*'
shortTitle: Docker registry
---

<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}'s Docker registry (which used the namespace `docker.pkg.github.com`) has been replaced by the {% data variables.product.prodname_container_registry %} (which uses the namespace `https://ghcr.io`). The {% data variables.product.prodname_container_registry %} offers benefits such as granular permissions and storage optimization for Docker images.

Docker images previously stored in the Docker registry are being automatically migrated into the {% data variables.product.prodname_container_registry %}. For more information, see "[Migrating to the {% data variables.product.prodname_container_registry %} from the Docker registry](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" and "[Working with the {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## About Docker support

When installing or publishing a Docker image, the Docker registry does not currently support foreign layers, such as Windows images.

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with Docker using the `docker` login command.

To keep your credentials secure, we recommend you save your {% data variables.product.pat_generic %} in a local file on your computer and use Docker's `--password-stdin` flag, which reads your token from a local file.

{% ifversion fpt or ghec %}
{% raw %}
  ```shell
  $ cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %}
{% endif %}

{% ifversion ghes or ghae %}
{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}
{% raw %}
 ```shell
 $ cat ~/TOKEN.txt | docker login docker.HOSTNAME -u USERNAME --password-stdin
```
{% endraw %}
{% ifversion ghes %}
If your instance has subdomain isolation disabled:

{% raw %}
 ```shell
 $ cat ~/TOKEN.txt | docker login HOSTNAME -u USERNAME --password-stdin
```
{% endraw %}
{% endif %}

{% endif %}

To use this example login command, replace `USERNAME` with your {% data variables.product.product_name %} username{% ifversion ghes or ghae %}, `HOSTNAME` with the URL for {% data variables.location.product_location %},{% endif %} and `~/TOKEN.txt` with the file path to your {% data variables.product.pat_generic %} for {% data variables.product.product_name %}.

For more information, see "[Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)."

## Publishing an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Note:** Image names must only use lowercase letters.

{% endnote %}

{% data variables.product.prodname_registry %} supports multiple top-level Docker images per repository. A repository can have any number of image tags. You may experience degraded service publishing or installing Docker images larger than 10GB, layers are capped at 5GB each. For more information, see "[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)" in the Docker documentation.

{% data reusables.package_registry.viewing-packages %}

1. Determine the image name and ID for your docker image using `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > IMAGE_NAME        VERSION    IMAGE_ID       4 weeks ago  1.11MB
  ```
2. Using the Docker image ID, tag the docker image, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,{% ifversion ghes or ghae %} *HOSTNAME* with the hostname of {% data variables.location.product_location %},{% endif %} and *VERSION* with package version at build time.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag IMAGE_ID docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% else %}
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  $ docker tag IMAGE_ID docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```shell
  $ docker tag IMAGE_ID HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% endif %}
  {% endif %}
3. If you haven't already built a docker image for the package, build the image, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image, *VERSION* with package version at build time,{% ifversion ghes or ghae %} *HOSTNAME* with the hostname of {% data variables.location.product_location %},{% endif %} and *PATH* to the image if it isn't in the current working directory.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% else %}
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  $ docker build -t docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```shell
  $ docker build -t HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% endif %}
  {% endif %}
4. Publish the image to {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% else %}
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  $ docker push docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```shell
  $ docker push HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% endif %}
  {% endif %}
  {% note %}

  **Note:** You must push your image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

  {% endnote %}

### Example publishing a Docker image

{% ifversion ghes %}
These examples assume your instance has subdomain isolation enabled.
{% endif %}

You can publish version 1.0 of the `monalisa` image to the `octocat/octo-app` repository using an image ID.

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.HOSTNAME/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

{% endif %}

You can publish a new Docker image for the first time and name it `monalisa`.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.HOSTNAME/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```
{% endif %}

## Downloading an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

You can use the `docker pull` command to install a docker image from {% data variables.product.prodname_registry %}, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,{% ifversion ghes or ghae %} *HOSTNAME* with the host name of {% data variables.location.product_location %}, {% endif %} and *TAG_NAME* with tag for the image you want to install.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}
```shell
$ docker pull docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% ifversion ghes %}
If your instance has subdomain isolation disabled:
```shell
$ docker pull HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% endif %}
{% endif %}

{% note %}

**Note:** You must pull the image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

{% endnote %}

## Further reading

- "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)"

{% endif %}  <!-- End of main versioning block -->
