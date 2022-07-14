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
shortTitle: Publicar & instalar con acciones
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## Acerca de {% data variables.product.prodname_registry %} con {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)."

Puedes ampliar las capacidades de CI y CD de tu repositorio publicando o instalando paquetes como parte de tu flujo de trabajo.

{% ifversion fpt or ghec %}
### Autenticarse en el {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% endif %}

### Autenticarse en los registros de paquetes en {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %}Si quieres que tu flujo de trabajo se autentique en el {% data variables.product.prodname_registry %} para acceder a un registro de paquete diferente al de {% data variables.product.prodname_container_registry %} en {% data variables.product.product_location %}, entonces{% else %} Para autenticarte en los registros de paquetes en {% data variables.product.product_name %},{% endif %} te recomendamos utilizar el `GITHUB_TOKEN` que crea {% data variables.product.product_name %} automáticamente para tu repositorio cuando habilitas las {% data variables.product.prodname_actions %} en vez de un token de acceso personal para autenticación. You should set the permissions for this access token in the workflow file to grant read access for the `contents` scope and write access for the `packages` scope. For forks, the `GITHUB_TOKEN` is granted read access for the parent repository. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Puedes hacer referencia al `GITHUB_TOKEN` en tu archivo de flujo de trabajo mediante el contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

## Acerca de los permisos y acceso a los paquetes para los paquetes que pertenecen a los repositorios

{% note %}

**Nota:** Los paquetes que pertenecen a repositorios incluyen RubyGems, npm, Apache Maven, NuGet, {% ifversion fpt or ghec %}y Gradle. {% else %}Los paquetes de Gradle y de Docker que utilizan el designador de nombre del paquete `docker.pkg.github.com`.{% endif %}

{% endnote %}

Cuando habilitas las Acciones de GitHub, GitHub instala una App GitHub en tu repositorio. El secreto del `GITHUB_TOKEN` es un token de acceso a la instalación de GitHub App. Puedes utilizar el token de acceso a la instalación para autenticarte en nombre de la GitHub App instalada en tu repositorio. Los permisos del token están limitados al repositorio que contiene tu flujo de trabajo. Para obtener más información, consulta la sección "[Permisos para el GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)".

El {% data variables.product.prodname_registry %} te permite subir y extraer paquetes mediante el `GITHUB_TOKEN` que está disponible para un flujo de trabajo de {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
## Acerca de los permisos y el acceso de paquetes para el {% data variables.product.prodname_container_registry %}

El {% data variables.product.prodname_container_registry %} (`ghcr.io`) permite a los usuarios crear y administrar contenedores como recursos independientes a nivel organizacional. Los contenedores pueden pertenecerle a una cuenta personal o de organización y puedes personalizar el acceso a cada uno de ellos por separado desde los permisos de repositorio.

Todos los flujos de trabajo que accedan al {% data variables.product.prodname_container_registry %} deben utilizar el `GITHUB_TOKEN` en vez de un token de acceso personal. Para obtener más información acerca de las mejores prácticas de seguridad, consulta la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

## Configuración de acceso y permisos predeterminados para los contenedores que se modifican a través de los flujos de trabajo

Cuando creas, instalas, modificas o borras un contenedor a través de un flujo de trabajo, hay algunos permisos y configuraciones de acceso predeterminados que se utilizan para garantizar que los administradores tengan acceso al fluljo de trabajo. También puedes ajustar esta configuración de acceso.

Por ejemplo, predeterminadamente, si un flujo de trabajo crea un contenedor que utilice el `GITHUB_TOKEN`, entonces:
- El contenedor hereda la visibilidad el modelo de permisos del repositorio en donde se ejecuta el flujo de trabajo.
- Los administradores de repositorio donde se ejecuta el flujo de trabajo se convierten en los administradores del contenedor una vez que este se cree.

Estos son más ejemplos de cómo funcionan los permisos predeterminados para los flujos de trabajo que administran paquetes.

| Tarea de flujo de trabajo de {% data variables.product.prodname_actions %} | Acceso y permisos predeterminados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Descargar un contenedor existente                                          | - Si el contenedor es público, cualquier flujo de trabajo que se ejecute en cualquier repositorio puede descargar el contenedor. <br> - Si el contenedor es interno, entonces todos los flujos de trabajo que se ejecuten en un repositorio que pertenezca a la cuenta empresarial podrá descargarlo. Para las organziaciones que pertenecen a una empresa, puedes leer cualquier repositorio en la empresa <br> - Si el contenedor es privado, solo los flujos de trabajo que se ejecuten en los repositorios a los que se les otorga permiso de lectura en dicho contenedor podrán descargarlo. <br> |
| Carga una versión nueva a un contenedor existente                          | - Si el contenedor es privado, interno, o público, solo los flujos de trabajo que se ejecuten en repositorios que tengan el permiso de escritura en dicho contenedor podrán cargar versiones nuevas de este.                                                                                                                                                                                                                                                                                                                                                                                                             |
| Borrar un contenedor o versiones de un contenedor                          | - Si el contenedor es privado, interno o público, solo los flujos de trabajo que se ejecuten en los repositorios a los que se les otorga permiso de borrado podrán borrar las versiones existentes de este.                                                                                                                                                                                                                                                                                                                                                                                                              |

También puedes ajustar el acceso a los contenedores de forma más granular o ajustar el comportamiento de algunos de los permisos predeterminados. Para obtener más información, consulta la sección "[Configurar la visibilidad y el control de accesos de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## Publicar un paquete mediante una acción

Puedes utilizar {% data variables.product.prodname_actions %} para publicar paquetes automáticamente como parte de tu flujo de integración contínua (IC). Este acercamiento a los despliegues contínuos (DC) te permite automatizar la creación de nuevas versiones de los paquetes si el código cumple con tus estándares de calidad. Por ejemplo, podrías crear un flujo de trabajo que ejecute pruebas de IC cada vez que un desarrollador suba código a alguna rama en particular. Si estas pruyebas pasan, el flujo de trabajo puede publicar una versión nueva del paquete en el {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

El siguiente ejemplo ilustra cómo puedes utilizar las {% data variables.product.prodname_actions %} para crear {% ifversion not fpt or ghec %}y probar{% endif %} tu app y luego crear una imagen de Docker automáticamente y publicarla en el {% data variables.product.prodname_registry %}.

Crea un archivo de flujo de trabajo nuevo en tu repositorio (tal como `.github/workflows/deploy-image.yml`), y agrega el siguiente YAML:

{% ifversion fpt or ghec %}
{% data reusables.package_registry.publish-docker-image %}

{% else %}
```yaml{:copy}
name: Create and publish a Docker image

{% data reusables.actions.actions-not-certified-by-github-comment %}

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

La configuración relevante se explica en la siguiente tabla. Para encontrar los detalles completos de cada elemento en un flujo de trabajo, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".

<table>
<tr>
<td>
{% raw %}
```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
  Configura el flujo de trabajo de <code>Crear y publicar una imagen de Docker</code> para que se ejecute cada vez que se sube un cambio a la rama que se llama <code>release</code>.
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
  Este job utiliza <code>npm test</code> para probar el código. El comando <code>needs: run-npm-build</code> hace que este job dependa del job <code>run-npm-build</code>.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
  Este job publica el paquete. El comando <code>needs: run-npm-test</code> hace que este job dependa del job <code>run-npm-test</code>.
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %}
```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
  Configura los permisos que se otorgan al <code>GITHUB_TOKEN</code> para las acciones en este job.
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
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
  Crea un paso que se llama <code>Log in to the {% data variables.product.prodname_container_registry %}</code>, el cual se asienta en el registro utilizando la cuenta y contraseñas que publicarán los paquetes. Una vez que se publica, los paquetes pertenecerán a la cuenta que se define aquí.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
  Este paso utiliza <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> para extrar etiquetas y marcas que se aplicarán a la imagen específica. La <code>id</code> "meta" permite que se referencie la salida de este paso en otro subsecuente. El valor <code>images</code> proporciona el nombre base para las etiquetas y marcadores.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %}
```yaml
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
  Crea un paso nuevo que se llame <code>Log in to GitHub Docker Registry</code>, el cual inicia sesión en el registro utilizando la cuenta y contraseña que publicará los paquetes. Una vez que se publica, los paquetes pertenecerán a la cuenta que se define aquí.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %}
```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
  Crea un paso nuevo que se llama <code>Build and push Docker image</code>. Este paso se ejecuta como parte del job <code>build-and-push-image</code>.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
  Utiliza la acción <code>build-push-action</code> de Docker para crear la imagen, basándose en el <code>Dockerfile</code> de tu repositorio. Si la compilación es exitosa, sube la imagen al {% data variables.product.prodname_registry %}.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
with:
```
{% endraw %}
</td>
<td>
  Envía los parámetros requeridas a la acción <code>build-push-action</code>. Estas se definen en líneas subsecuentes.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
context: .
```
{% endraw %}
</td>
<td>
  Define el contexto de la compilación como el conjunto de archivos que se ubican en la ruta específica. Para obtener más información, consulta la sección "<a href="https://github.com/docker/build-push-action#usage">Uso</a>".
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %}
```yaml
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
{% ifversion ghae %}
{% raw %}
```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %}
{% else %}
{% raw %}
```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %}
{% endif %}
</td>
<td>
  Etiqueta la imagen con el SHA de la confirmación que activó el flujo de trabajo.
</td>
</tr>
{% endif %}

</table>

Este flujo de trabajo nuevo se ejecutará automáticamente cada que subas un cambio a una rama que se llame `release` en el repositorio. Puedes ver el progreso en la pestaña de **Acciones**.

Unos minutos después de que se complete el flujo de trabajo, el paquete nuevo podrá visualizarse en tu repositorio. Para encontrar tus paquetes disponibles, consulta la sección "[Visualizar los paquetes de un repositorio](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)".

## Instalar un paquete mediante una acción

Puedes instalar paquetes como parte de tu flujo de CI mediante {% data variables.product.prodname_actions %}. Por ejemplo, podrías configurar un flujo de trabajo para que cada vez que un programador suba código a una solicitud de extracción, el flujo de trabajo resuelva las dependencias al descargar e instalar paquetes alojados por el {% data variables.product.prodname_registry %}. Luego, el flujo de trabajo puede ejecutar pruebas de CI que requieran las dependencias.

El instalar los paquetes que hospeda el {% data variables.product.prodname_registry %} a través de las {% data variables.product.prodname_actions %} requiere una configuración mínima o autenticación adicional cuando utilizas un `GITHUB_TOKEN`.{% ifversion fpt or ghec %} También, la transferencia de datos es gratuita cuando una acción instala un paquete. Para obtener más información, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion fpt or ghec %}
## Actualizar un flujo de trabajo que tiene acceso a `ghcr.io`

El {% data variables.product.prodname_container_registry %} es compatible con el `GITHUB_TOKEN` para una autenticación más fácil y segura en tus flujos de trabajo. Si tu flujo de trabajo está utilizando un token de acceso personal (PAT) para autenticarse en `ghcr.io`, entonces te recomendamos ampliamente que actualices tu flujo de trabajo para utilizar el `GITHUB_TOKEN`.

Para obtener más información sobre el `GITHUB_TOKEN`, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

El utilizar el `GITHUB_TOKEN` en vez de un PAT, el cual incluya el alcance de `repo`, incrementa la seguridad de tu repositorio, ya que no necesita sutilizar un PAT de vida extendida que ofrezca acceso innecesario al repositorio en donde se ejecuta tu flujo de trabajo. Para obtener más información acerca de las mejores prácticas de seguridad, consulta la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

1. Navega a la página de llegada de tu paquete.
1. En la barra lateral izquierda, haz clic en **Acceso a las acciones**. ![Opción "Acceso a las acciones" en el menú izquierdo](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. Para asegurarte de que tu paquete de contenedor tenga acceso a tu flujo de trabajo, debes agregar el repositorio en donde se almacena el flujo de trabajo a tu contenedor. Haz clic en **Agregar repositorio** y busca el repositorio que quieres agregar. ![Botón "Agregar repositorio"](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Nota:** Agregar un repositorio a tu contenedor a través de la opción de menú **Acceso de las acciones** es diferente que conectar tu contenedor a un repositorio. Para obtener más información, consulta las opciones "[Garantizar a tu paquete acceso al flujo de trabajo](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" y "[Conectar un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

  {% endnote %}
1. Opcionalmente, utiliza el menú desplegable de "rol", selecciona el nivel de acceso predeterminado que te gustaría que tuviera el repositorio en tu imagen de contenedor. ![Niveles de acceso de permisos para otorgar a los repositorios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. Abre tu archivo de flujo de trabajo. En la línea en donde ingresas a `ghcr.io`, reemplaza tu PAT con {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Por ejemplo, este flujo de trabajo publica una imagen de Docker utilizando {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} para autenticarse.

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
        # This is where you will update the PAT to GITHUB_TOKEN
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
