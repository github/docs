---
title: Configuring Docker for use with GitHub Packages
intro: 'You can configure the Docker client to use {% data variables.product.prodname_registry %} to publish and retrieve docker images.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

### About Docker and {% data variables.product.prodname_registry %}

{% warning %}

**Note:** The {% data variables.product.prodname_registry %} Docker registry will be superseded by {% data variables.product.prodname_github_container_registry %}{% if currentVersion != "free-pro-team@latest" %} in a future {% data variables.product.product_name %} release{% endif %}.{% if currentVersion == "free-pro-team@latest" %} To learn how to migrate your existing Docker images and any workflows using them, see "[Migrating to {% data variables.product.prodname_github_container_registry %} for Docker images](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images)" and "[Getting started with {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry)."{% endif %}

{% endwarning %}

When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

{% if currentVersion != "free-pro-team@latest" %}

Before you can use the Docker registry on {% data variables.product.prodname_registry %}, the site administrator for {% data variables.product.product_location_enterprise %} must enable Docker support and subdomain isolation for your instance. For more information, see "[Managing GitHub Packages for your enterprise](/enterprise/admin/packages)."

{% endif %}

### Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Authenticating with a personal access token

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with Docker using the `docker` login command.

To keep your credentials secure, we recommend you save your personal access token in a local file on your computer and use Docker's `--password-stdin` flag, which reads your token from a local file.

{% if currentVersion == "free-pro-team@latest" %}
{% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %}
{% endif %}

{% if currentVersion != "free-pro-team@latest" %}
{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %}
{% endif %}

To use this example login command, replace `USERNAME` with your {% data variables.product.product_name %} username{% if currentVersion != "free-pro-team@latest" %}, `HOSTNAME` with the URL for {% data variables.product.product_location_enterprise %},{% endif %} and `~/TOKEN.txt` with the file path to your personal access token for {% data variables.product.product_name %}.

For more information, see "[Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)."

#### Authenticating with the `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publishing a package

{% data variables.product.prodname_registry %} supports multiple top-level Docker images per repository. A repository can have any number of image tags. You may experience degraded service publishing or installing Docker images larger than 10GB, layers are capped at 5GB each. For more information, see "[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)" in the Docker documentation.

{% data reusables.package_registry.lowercase-name-field %}

{% data reusables.package_registry.viewing-packages %}

1. Determine the image name and ID for your docker image using `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Using the Docker image ID, tag the docker image, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,
{% if currentVersion != "free-pro-team@latest" %} *HOSTNAME* with the hostname of {% data variables.product.product_location_enterprise %},{% endif %} and *VERSION* with package version at build time.
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
3. If you haven't already built a docker image for the package, build the image, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image, *VERSION* with package version at build time,
{% if currentVersion != "free-pro-team@latest" %} *HOSTNAME* with the hostname of {% data variables.product.product_location_enterprise %},{% endif %} and *PATH* to the image if it isn't in the current working directory.s
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %}
4. Publish the image to {% data variables.product.prodname_registry %}.
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% note %}

  **Note:** You must push your image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

  {% endnote %}

#### Example publishing a Docker image

You can publish version 1.0 of the `monalisa` image to the `octocat/octo-app` repository using an image ID.

{% if currentVersion == "free-pro-team@latest" %}
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
$ docker tag c75bebcdd211 docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```

{% endif %}

You can publish a new Docker image for the first time and name it `monalisa`.

{% if currentVersion == "free-pro-team@latest" %}
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
$ docker build -t docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```
{% endif %}

### Installing a package

You can use the `docker pull` command to install a docker image from {% data variables.product.prodname_registry %}, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,{% if currentVersion != "free-pro-team@latest" %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance, {% endif %} and *TAG_NAME* with tag for the image you want to install. {% data reusables.package_registry.lowercase-name-field %}


{% if currentVersion == "free-pro-team@latest" %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %}

{% note %}

**Note:** You must pull the image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

{% endnote %}


### Дополнительная литература

- "[Deleting a package](/packages/publishing-and-managing-packages/deleting-a-package/)"
