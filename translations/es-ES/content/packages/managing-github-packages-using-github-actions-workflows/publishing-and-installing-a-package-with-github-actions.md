---
title: Publicar e instalar un paquete con GitHub Actions
intro: 'Puedes configurar un flujo de trabajo en {% data variables.product.prodname_actions %} para publicar o instalar automáticamente un paquete desde {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Acerca de {% data variables.product.prodname_registry %} con {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)."

Puedes ampliar las capacidades de CI y CD de tu repositorio publicando o instalando paquetes como parte de tu flujo de trabajo.

{% if currentVersion == "free-pro-team@latest" %}
#### Autenticarse en el {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

Para ver un ejemplo de autenticación, consulta la sección "[Autenticarse con el {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)".

{% endif %}

#### Autenticarse en los registros de paquetes en {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}Si quieres que tu flujo de trabajo se autentique en {% data variables.product.prodname_registry %} para acceder a un registro de paquetes diferente al {% data variables.product.prodname_container_registry %} en {% data variables.product.product_name %}, entonces{% else %}Para autenticarse en los registros de paquetes de {% data variables.product.product_name %},{% endif %} te recomendamos utilizar el `GITHUB_TOKEN` que {% data variables.product.product_name %} crea automáticamente para tu repositorio cuando habilitas las {% data variables.product.prodname_actions %} en vez de un token de acceso personal para autenticación. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}Debes configurar los permisos para este token de acceso en el archivo del flujo de trabajo para otorgar acceso de lectura para el alcance `contents` y acceso de escritura para el de `packages`. {% else %}Tiene permisos de lectura y escritura para los paquetes del repositorio en donde se ejecuta el flujo de trabajo. {% endif %}Para las bifurcaciones, se otorga acceso de lectura al `GITHUB_TOKEN` en el repositorio padre. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Puedes hacer referencia al `GITHUB_TOKEN` en tu archivo de flujo de trabajo mediante el contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

### Acerca de los permisos y acceso a los paquetes para los paquetes que pertenecen a los repositorios

{% note %}

**Nota:** Los paquetes que pertenecen a los repositorios incluyen paquetes de RubyGems, npm, Apache Maven, NuGet, Gradle, y Docker que utilizan el espacio de nombres `docker.pkg.github.com`.

{% endnote %}

Cuando habilitas las Acciones de GitHub, GitHub instala una App GitHub en tu repositorio. El secreto del `GITHUB_TOKEN` es un token de acceso a la instalación de GitHub App. Puedes utilizar el token de acceso a la instalación para autenticarte en nombre de la GitHub App instalada en tu repositorio. Los permisos del token están limitados al repositorio que contiene tu flujo de trabajo. Para obtener más información, consulta la sección "[Permisos para el GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)".

El {% data variables.product.prodname_registry %} te permite subir y extraer paquetes mediante el `GITHUB_TOKEN` que está disponible para un flujo de trabajo de {% data variables.product.prodname_actions %}.

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de los permisos y el acceso de paquetes para el {% data variables.product.prodname_container_registry %}

El {% data variables.product.prodname_container_registry %} (`ghcr.io`) permite a los usuarios crear y administrar contenedores como recursos independientes a nivel organizacional. Los contenedores pueden pertenecer a una organización o a una cuenta de usuario personal y puedes personalizar el acceso para cada uno de tus contenedores por aparte de los permisos del repositorio.

Todos los flujos de trabajo que accedan al {% data variables.product.prodname_container_registry %} deben utilizar el `GITHUB_TOKEN` en vez de un token de acceso personal. Para obtener más información acerca de las mejores prácticas de seguridad, consulta la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

### Configuración de acceso y permisos predeterminados para los contenedores que se modifican a través de los flujos de trabajo

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

### Publicar un paquete mediante una acción

Puedes utilizar {% data variables.product.prodname_actions %} para publicar paquetes automáticamente como parte de tu flujo de integración contínua (IC). Este acercamiento a los despliegues contínuos (DC) te permite automatizar la creación de nuevas versiones de los paquetes si el código cumple con tus estándares de calidad. Por ejemplo, podrías crear un flujo de trabajo que ejecute pruebas de IC cada vez que un desarrollador suba código a alguna rama en particular. Si estas pruyebas pasan, el flujo de trabajo puede publicar una versión nueva del paquete en el {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

El siguiente ejemplo ilustra cómo puedes utilizar las {% data variables.product.prodname_actions %} para crear y probar tu app, y luego crear atuomáticamente una imagen de Docker y publicarla en el {% data variables.product.prodname_registry %}:

- Crea un archivo de flujo de trabajo nuevo en tu repositorio (tal como `.github/workflows/deploy-image.yml`), y agrega el siguiente YAML:
  ```yaml{:copy}
  name: Create and publish a package
  on:
    push:
      branches: ['release']
  jobs:
    run-npm-build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: npm install and build webpack
          run: |
            npm install
            npm run build
        - uses: actions/upload-artifact@main
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
      steps: {% raw %}
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}{% endraw %}
        - uses: actions/download-artifact@main
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
      needs: run-npm-test {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
      permissions: 
        contents: read
        packages: write {% endif %}
      steps:
        - name: Checkout
          uses: actions/checkout@v2
        - name: Log in to GitHub Docker Registry
          uses: docker/login-action@v1
          with:
            registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
            username: {% raw %}${{ github.actor }}{% endraw %}
            password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        - name: Build container image
          uses: docker/build-push-action@v2
          with:
            push: true
            tags: |
              {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
              {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
  ```

  La configuración relevante se explica en la siguiente tabla: <table>
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
    Configura el flujo de trabajo de <code>Create and publish a package</code> para que se ejecute cada que se suba un cambio a la rama que se llama <code>release</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/
  ```
  {% endraw %}
  </td>
  <td>
    Este job instala NPM y lo utiliza para crear la app.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - uses: actions/download-artifact@main
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
{% endraw %}
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

  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
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
  </tr> {% endif %}
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Log in to GitHub Docker Registry
    uses: docker/login-action@v1
    with:
      registry: {% endraw %}{% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
      username: ${{ github.actor }}
      password: ${{ secrets.GITHUB_TOKEN }}
  ```
{% endraw %}
  </td>
  <td>
    Crea un paso nuevo que se llame <code>Log in to GitHub Docker Registry</code>, el cual inicia sesión en el registro utilizando la cuenta y contraseña que publicará los paquetes. Una vez que se publica, los paquetes pertenecerán a la cuenta que se define aquí.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Build container image
  ```
{% endraw %}
  </td>
  <td>
    Crea un paso nuevo que se llama <code>Build container image</code>. Este paso se ejecuta como parte del job <code>build-and-push-image</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
uses: docker/build-push-action@v2
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
    Envía los parámetros requeridas a la acción <code>build-push-action</code>. Este se define en las línas siguientes.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
push: true
  ```
{% endraw %}
  </td>
  <td>
    Sube esta imagen al registro si se crea con éxito.
  </td>
  </tr>
  <tr>
  <td>

  ```yaml
tags: |
  {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
  {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
  ```
  </td>
  <td>
    Etiqueta el paquete publicado con la ref de git (por ejemplo, el nombre de la rama que se utilizó para crear el paquete) así como el SHA de confirmación.
  </td>
  </tr>
  </table>

- Este flujo de trabajo nuevo se ejecutará automáticamente cada que subas un cambio a una rama que se llame `release` en el repositorio. Puedes ver el progreso en la pestaña de **Acciones**.
- Unos minutos después de que se complete el flujo de trabajo, el paquete nuevo podrá visualizarse en tu repositorio. Para encontrar tus paquetes disponibles, consulta la sección "[Visualizar los paquetes de un repositorio](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)".


### Instalar un paquete mediante una acción

Puedes instalar paquetes como parte de tu flujo de CI mediante {% data variables.product.prodname_actions %}. Por ejemplo, podrías configurar un flujo de trabajo para que cada vez que un programador suba código a una solicitud de extracción, el flujo de trabajo resuelva las dependencias al descargar e instalar paquetes alojados por el {% data variables.product.prodname_registry %}. Luego, el flujo de trabajo puede ejecutar pruebas de CI que requieran las dependencias.

El instalar los paquetes que hospeda el {% data variables.product.prodname_registry %} a través de las {% data variables.product.prodname_actions %} requiere una configuración mínima o autenticación adicional cuando utilizas un `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} También, la transferencia de datos es gratuita cuando una acción instala un paquete. Para obtener más información, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% if currentVersion == "free-pro-team@latest" %}
### Actualizar un flujo de trabajo que tiene acceso a `ghcr.io`

{% data reusables.package_registry.github-token-security-over-pat %}

El utilizar el `GITHUB_TOKEN` en vez de un PAT, el cual incluya el alcance de `repo`, incrementa la seguridad de tu repositorio, ya que no necesita sutilizar un PAT de vida extendida que ofrezca acceso innecesario al repositorio en donde se ejecuta tu flujo de trabajo. Para obtener más información acerca de las mejores prácticas de seguridad, consulta la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

1. Navega a la página de llegada de tu paquete.
1. En la barra lateral izquierda, haz clic en **Acceso a las acciones**. ![Opción "Acceso a las acciones" en el menú izquierdo](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Para asegurarte de que tu paquete de contenedor tenga acceso a tu flujo de trabajo, debes agregar el repositorio en donde se almacena el flujo de trabajo a tu contenedor. Haz clic en **Agregar repositorio** y busca el repositorio que quieres agregar. ![Botón "Agregar repositorio"](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Nota:** Agregar un repositorio a tu contenedor a través de la opción de menú **Acceso de las acciones** es diferente que conectar tu contenedor a un repositorio. Para obtener más información, consulta las opciones "[Garantizar a tu paquete acceso al flujo de trabajo](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" y "[Conectar un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

  {% endnote %}
3. Opcionalmente, utiliza el menú desplegable de "rol", selecciona el nivel de acceso predeterminado que te gustaría que tuviera el repositorio en tu imagen de contenedor. ![Niveles de acceso de permisos para otorgar a los repositorios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
5. Abre tu archivo de flujo de trabajo. En la línea en donde ingresas a `ghcr.io`, reemplaza tu PAT con {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Por ejemplo, este flujo de trabajo publica un contenedor de Docker utilizando {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} para autenticarse.

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
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}

    {% raw %}steps:
      - uses: actions/checkout@v2

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log into registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/${{ github.repository_owner }}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION{% endraw %}
```

{% endif %}
