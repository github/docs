---
title: Publicar e instalar un paquete con GitHub Actions
intro: 'Puedes configurar un flujo de trabajo en {% data variables.product.prodname_actions %} para publicar o instalar automáticamente un paquete desde {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 80516eb55e9ffc8f2de3f92cf24a7d7f230b8407
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193126'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Acerca de {% data variables.product.prodname_registry %} con {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para más información, vea "[Acerca de {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)".

Puedes ampliar las capacidades de CI y CD de tu repositorio publicando o instalando paquetes como parte de tu flujo de trabajo.

{% ifversion packages-registries-v2 %}
### Autenticación en registros de paquetes con permisos detallados

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### Autenticación en registros de paquetes con permisos del ámbito del repositorio

{% endif %}

{% ifversion packages-registries-v2 %}Algunos registros de {% data variables.product.prodname_registry %} solo admiten permisos del ámbito del repositorio y no admiten permisos detallados. Para obtener una lista de estos registros, consulta "[Acerca de los permisos de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

Si quieres que el flujo de trabajo tenga acceso a un registro de {% data variables.product.prodname_registry %} que no admita permisos detallados, {% else %}Para autenticarte en registros de paquetes en {% data variables.product.product_name %},{% endif %} recomendamos el uso del `GITHUB_TOKEN` que {% data variables.product.product_name %} crea automáticamente para el repositorio al habilitar {% data variables.product.prodname_actions %}. Debes establecer los permisos para este token de acceso en el archivo del flujo de trabajo a fin de conceder acceso de lectura al ámbito `contents` y acceso de escritura al ámbito `packages`. En el caso de las bifurcaciones, a `GITHUB_TOKEN` se le concede acceso de lectura para el repositorio primario. Para más información, vea "[Autenticación con GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Puede hacer referencia al elemento `GITHUB_TOKEN` en el archivo de flujo de trabajo mediante el contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para más información, vea "[Autenticación con GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

## Acerca de los permisos y el acceso a los paquetes

{% ifversion packages-registries-v2 %}

### Paquetes cuyo ámbito son los usuarios o las organizaciones

Los registros que admiten permisos detallados permiten a los usuarios crear y administrar paquetes como recursos independientes en el nivel de la organización. Los paquetes pueden pertenecer a una cuenta organizativa o personal, y puedes personalizar el acceso para cada uno de tus paquetes independientemente de los permisos del repositorio.

Todos los flujos de trabajo que acceden a los registros que admiten permisos detallados deben usar `GITHUB_TOKEN` en lugar de un {% data variables.product.pat_generic %}. Para más información sobre los procedimientos recomendados de seguridad, vea "[Fortalecimiento de la seguridad para Acciones de GitHub](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

### Paquetes cuyo ámbito son los repositorios

{% endif %}

Cuando habilitas las Acciones de GitHub, GitHub instala una App GitHub en tu repositorio. El secreto `GITHUB_TOKEN` es un token de acceso de instalación de aplicación de GitHub. Puedes utilizar el token de acceso a la instalación para autenticarte en nombre de la GitHub App instalada en tu repositorio. Los permisos del token están limitados al repositorio que contiene tu flujo de trabajo. Para más información, vea "[Permisos para GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)".

{% data variables.product.prodname_registry %} permite insertar y extraer paquetes mediante el `GITHUB_TOKEN` disponible para un flujo de trabajo de {% data variables.product.prodname_actions %}.

{% ifversion packages-registries-v2 %}

## Configuración de acceso y permisos predeterminados para los contenedores que se modifican a través de los flujos de trabajo

Cuando creas, instalas, modificas o borras un contenedor a través de un flujo de trabajo, hay algunos permisos y configuraciones de acceso predeterminados que se utilizan para garantizar que los administradores tengan acceso al fluljo de trabajo. También puedes ajustar esta configuración de acceso.

Por ejemplo, de forma predeterminada si un flujo de trabajo crea un contenedor mediante `GITHUB_TOKEN`, después:
- El contenedor hereda la visibilidad el modelo de permisos del repositorio en donde se ejecuta el flujo de trabajo.
- Los administradores de repositorio donde se ejecuta el flujo de trabajo se convierten en los administradores del contenedor una vez que este se cree.

Estos son más ejemplos de cómo funcionan los permisos predeterminados para los flujos de trabajo que administran paquetes.

| Tarea de flujo de trabajo de {% data variables.product.prodname_actions %} | Permisos y acceso predeterminado |
|----|----|
| Descargar un contenedor existente | - Si el contenedor es público, cualquier flujo de trabajo que se ejecute en cualquier repositorio puede descargar el contenedor. <br> - Si el contenedor es interno, todos los flujos de trabajo que se ejecuten en un repositorio que pertenezca a la cuenta de empresa podrán descargarlo. En el caso de las organizaciones propiedad de la empresa, puede leer cualquier repositorio de la empresa. <br> - Si el contenedor es privado, solo los flujos de trabajo que se ejecutan en repositorios a los que se les concede permiso de lectura en ese contenedor pueden descargar el contenedor. <br>
| Carga una versión nueva a un contenedor existente | - Si el contenedor es privado, interno, o público, solo los flujos de trabajo que se ejecuten en repositorios que tengan el permiso de escritura en dicho contenedor podrán cargar versiones nuevas de este.
| Borrar un contenedor o versiones de un contenedor | - Si el contenedor es privado, interno o público, solo los flujos de trabajo que se ejecuten en los repositorios a los que se les otorga permiso de borrado podrán borrar las versiones existentes de este.

También puedes ajustar el acceso a los contenedores de forma más granular o ajustar el comportamiento de algunos de los permisos predeterminados. Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## Publicar un paquete mediante una acción

Puedes utilizar {% data variables.product.prodname_actions %} para publicar paquetes automáticamente como parte de tu flujo de integración contínua (IC). Este acercamiento a los despliegues contínuos (DC) te permite automatizar la creación de nuevas versiones de los paquetes si el código cumple con tus estándares de calidad. Por ejemplo, podrías crear un flujo de trabajo que ejecute pruebas de IC cada vez que un desarrollador suba código a alguna rama en particular. Si estas pruyebas pasan, el flujo de trabajo puede publicar una versión nueva del paquete en el {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

El siguiente ejemplo ilustra cómo puedes utilizar las {% data variables.product.prodname_actions %} para crear {% ifversion not fpt or ghec %}y probar{% endif %} tu app y luego crear una imagen de Docker automáticamente y publicarla en el {% data variables.product.prodname_registry %}.

Cree un archivo de flujo de trabajo en el repositorio (por ejemplo, `.github/workflows/deploy-image.yml`) y agregue el código YAML siguiente:

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: webpack artifacts
          path: public/

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [12.x, 14.x]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

La configuración relevante se explica en la siguiente tabla. Para obtener detalles completos sobre cada elemento de un flujo de trabajo, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
Configura el flujo de trabajo <code>Create and publish a Docker image</code> para que se ejecute cada vez que se inserta un cambio en la rama denominada <code>release</code>.
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  Define dos variables de ambiente personalizadas para el flujo de trabajo. Estas se utilizan para el dominio del {% data variables.product.prodname_container_registry %} y para un nombre para la imagen de Docker que compila este flujo de trabajo.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  Hay solo un job en este flujo de trabajo. Se configura para ejecutarse en la última versión disponible de Ubuntu.
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  Este job instala NPM y lo utiliza para crear la app.
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: webpack artifacts
        path: public
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```

</td>
<td>
Este trabajo usa <code>npm test</code> para probar el código. El comando <code>needs: run-npm-build</code> hace que este trabajo dependa del trabajo <code>run-npm-build</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
Este job publica el paquete. El comando <code>needs: run-npm-test</code> hace que este trabajo dependa del trabajo <code>run-npm-test</code>.
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
Establece los permisos concedidos a <code>GITHUB_TOKEN</code> para las acciones de este trabajo.
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Crea un paso denominado <code>Log in to the {% data variables.product.prodname_container_registry %}</code>, que inicia sesión en el registro mediante la cuenta y la contraseña que publicarán los paquetes. Una vez que se publica, los paquetes pertenecerán a la cuenta que se define aquí.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
En este paso se usa <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> para extraer etiquetas que se aplicarán a la imagen especificada. <code>id</code> "meta" permite hacer referencia a la salida de este paso en un paso posterior. El valor <code>images</code> proporciona el nombre base para las etiquetas.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Crea un paso denominado <code>Log in to GitHub Docker Registry</code>, que inicia sesión en el registro mediante la cuenta y la contraseña que publicarán los paquetes. Una vez que se publica, los paquetes pertenecerán a la cuenta que se define aquí.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
Crea un paso denominado <code>Build and push Docker image</code>. Este paso se ejecuta como parte del trabajo <code>build-and-push-image</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
Usa la acción <code>build-push-action</code> de Docker para compilar la imagen, en función de la propiedad <code>Dockerfile</code> del repositorio. Si la compilación es exitosa, sube la imagen al {% data variables.product.prodname_registry %}.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
Envía los parámetros necesarios a la acción <code>build-push-action</code>. Estas se definen en líneas subsecuentes.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
Define el contexto de la compilación como el conjunto de archivos que se ubican en la ruta específica. Para más información, vea "<a href="https://github.com/docker/build-push-action#usage">Uso</a>".
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
Sube esta imagen al registro si se compila con éxito.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  Agrega las etiquetas y marcadores que se exrayeron en el paso "meta".
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
Etiqueta la imagen con el SHA de la confirmación que activó el flujo de trabajo.
</td>
</tr>
{% endif %}

</table>

Este flujo de trabajo nuevo se ejecutará automáticamente cada vez que inserte un cambio en una rama denominada `release` en el repositorio. Puede ver el progreso en la pestaña **Acciones**.

Unos minutos después de que se complete el flujo de trabajo, el paquete nuevo podrá visualizarse en tu repositorio. Para buscar los paquetes disponibles, vea "[Visualización de los paquetes de un repositorio](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)".

## Instalar un paquete mediante una acción

Puedes instalar paquetes como parte de tu flujo de CI mediante {% data variables.product.prodname_actions %}. Por ejemplo, podrías configurar un flujo de trabajo para que cada vez que un programador suba código a una solicitud de extracción, el flujo de trabajo resuelva las dependencias al descargar e instalar paquetes alojados por el {% data variables.product.prodname_registry %}. Luego, el flujo de trabajo puede ejecutar pruebas de CI que requieran las dependencias.

Para instalar paquetes hospedados por {% data variables.product.prodname_registry %} mediante {% data variables.product.prodname_actions %} se necesita una configuración mínima o autenticación adicional cuando se usa un `GITHUB_TOKEN`.{% ifversion fpt or ghec %} La transferencia de datos también es gratuita cuando una acción instala un paquete. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}
## Actualización de un flujo de trabajo que accede a un registro mediante un {% data variables.product.pat_generic %}

{% data variables.product.prodname_registry %} admite el `GITHUB_TOKEN` para una autenticación más fácil y segura en los flujos de trabajo. Si usas un registro que admite permisos detallados y en el flujo de trabajo se usa un {% data variables.product.pat_generic %} para autenticarse en el registro, se recomienda encarecidamente actualizar el flujo de trabajo para usar el `GITHUB_TOKEN`.

Para más información sobre `GITHUB_TOKEN`, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Al usar `GITHUB_TOKEN` en lugar de un {% data variables.product.pat_v1 %} con el ámbito `repo`, aumenta la seguridad del repositorio, ya que no es necesario usar un {% data variables.product.pat_generic %} de larga duración que ofrezca acceso innecesario al repositorio donde se ejecuta el flujo de trabajo. Para más información sobre los procedimientos recomendados de seguridad, vea "[Fortalecimiento de la seguridad para Acciones de GitHub](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

1. Navega a la página de llegada de tu paquete.
1. En la barra lateral de la izquierda, haga clic en **Acceso a acciones**.
  ![Opción "Acceso a acciones" en el menú de la izquierda](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. Para asegurarte de que tu paquete de contenedor tenga acceso a tu flujo de trabajo, debes agregar el repositorio en donde se almacena el flujo de trabajo a tu contenedor. Haga clic en **Agregar repositorio** y busque el repositorio que quiera agregar.
   ![Botón "Agregar repositorio"](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  **Nota:** Agregar un repositorio al contenedor mediante la opción de menú **Acceso a acciones** es diferente de conectar el contenedor a un repositorio. Para más información, vea "[Garantía del acceso de flujo de trabajo al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" y "[Conexión de un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

  {% endnote %}
1. Opcionalmente, utiliza el menú desplegable de "rol", selecciona el nivel de acceso predeterminado que te gustaría que tuviera el repositorio en tu imagen de contenedor.
  ![Niveles de acceso de permisos para otorgar a los repositorios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. Abre tu archivo de flujo de trabajo. En la línea en la que inicias sesión para el registro, sustituye tu {% data variables.product.pat_generic %} por {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Por ejemplo, este flujo de trabajo publica una imagen de Docker en el {% data variables.product.prodname_container_registry %} y usa {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} para autenticarse.

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the {% data variables.product.pat_generic %} to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
