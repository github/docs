---
title: Configurar Docker para usar con paquetes de GitHub
intro: 'Puedes configurar el cliente Docker para usar {% data variables.product.prodname_registry %} para publicar y recuperar imágenes de docker'
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

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Autenticar a {% data variables.product.prodname_registry %}

{% warning %}

Si todavía no has creado una imagen Docker para el paquete, construye la imagen, reemplazando *OWNER* con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio, *REPOSITORY* con el nombre del repositorio que contiene tu proyecto, *IMAGE_NAME* con el nombre del paquete o la imagen, *VERSION* con la versión del paquete en tiempo de construcción y *PATH* a la imagen si no está en el directorio de trabajo actual.

{% endwarning %}

Puedes autenticarte en {% data variables.product.prodname_registry %} con Docker utilizando el comando de ingreso `docker`.

{% if currentVersion != "free-pro-team@latest" %}

Before you can use the Docker registry on {% data variables.product.prodname_registry %}, the site administrator for {% data variables.product.product_location_enterprise %} must enable Docker support and subdomain isolation for your instance. For more information, see "[Managing GitHub Packages for your enterprise](/enterprise/admin/packages)."

{% endif %}

### Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Autenticando con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticarte en {% data variables.product.prodname_registry %} con Docker utilizando el comando de ingreso `docker`.

Para mantener seguras tus credenciales, te recomendamos que guardes tu token de acceso personal en un archivo local en tu computadora y uses el indicador `--password-stdin` de Docker, que lee tu token desde un archivo local.

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
 $ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Etiqueta la imagen con <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Sube la imagen a {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```
{% endraw %}
{% endif %}

Utiliza este ejemplo de comando de ingreso, reemplaza `USERNAME` con tu nombre de usuario de {% data variables.product.prodname_dotcom %} y `~/TOKEN.txt` con la ruta de archivo a tu token de acceso personal para {% data variables.product.prodname_dotcom %}.

Para obtener más información, consulta "[Inicio de sesión de Docker](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)."

#### Autenticando con el `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar un paquete

{% data variables.product.prodname_registry %} admite varias imágenes Docker de primer nivel por repositorio. Un repositorio puede tener cualquier cantidad de etiquetas de imagen. Puedes experimentar un servicio de menor calidad al publicar o instalar imágenes de Docker de más de 10 GB, las capas tienen un límite de 5 GB cada una. Para obtener más información, consulta "[Etiqueta Docker](https://docs.docker.com/engine/reference/commandline/tag/)" en la documentación de Docker.

{% data reusables.package_registry.lowercase-name-field %}

{% data reusables.package_registry.viewing-packages %}

1. Determina el nombre y la ID de la imagen Docker utilizando `imágenes docker`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Con la ID de la imagen Docker, etiqueta la imagen Docker, reemplazando *OWNER* con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio, *REPOSITORY* con el nombre del repositorio que contiene tu proyecto, *IMAGE_NAME* con el nombre del paquete o la imagen y *VERSION* con la versión del paquete en tiempo de construcción.
{% if currentVersion != "free-pro-team@latest" %} *HOSTNAME* with the hostname of {% data variables.product.product_location_enterprise %},{% endif %} and *VERSION* with package version at build time.
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  ```shell
  Puedes publicar una nueva imagen de Docker por primera vez y nombrarla <code>monalisa</code>.
  ```
.
</code>
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
4. Publicar la imagen para {% data variables.product.prodname_registry %}.
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

  **Nota:** Debes subir tu imagen usando `IMAGE_NAME: VERSION` y no utilizar `IMAGE_NAME: SHA`.

  {% endnote %}

#### Ejemplo de publicación de una imagen Docker

Puedes publicar la versión 1.0 de la imagen `monalisa` al repositorio `octocat/octo-app` usando una ID de imagen.

{% if currentVersion == "free-pro-team@latest" %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Etiqueta la imagen con <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Sube la imagen a {% data variables.product.prodname_registry %}
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

Puedes publicar una nueva imagen de Docker por primera vez y nombrarla `monalisa`.

{% if currentVersion == "free-pro-team@latest" %}
```shell
# Construye la imagen con docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Asume que Dockerfile reside en el directorio de trabajo actual (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Sube la imagen a {% data variables.product.prodname_registry %}
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

### Instalar un paquete

Puedes usar el comando `docker pull` para instalar una imagen Docker desde {% data variables.product.prodname_registry %}, reemplazando *OWNER* con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio *REPOSITORY* con el nombre del repositorio que contiene tu proyecto, *IMAGE_NAME* con el nombre del paquete o la imagen, *TAG_NAME* con la etiqueta para la imagen que deseas instalar. {% data reusables.package_registry.lowercase-name-field %}


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

**Nota:** Debes extraer la imagen utilizando `IMAGE_NAME:VERSION` y no así, utilizando `IMAGE_NAME:SHA`.

{% endnote %}


### Leer más

- "[Eliminar un paquete](/packages/publishing-and-managing-packages/deleting-a-package/)"
