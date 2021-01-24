---
title: Guía de inciio rápido para GitHub Packages
intro: 'Publica en el {% data variables.product.prodname_registry %} en 5 minutos o menos con {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: verdadero
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### Introducción

Solo necesitas un repositorio existente de {% data variables.product.prodname_dotcom %} para publicar un paquete en el {% data variables.product.prodname_registry %}. En esta guía, crearás un flujo de trabajo de {% data variables.product.prodname_actions %} para probar tu código y luego lo publicarás en el {% data variables.product.prodname_registry %}. Ten la libertad de crear un repositorio nuevo para esta guía de incio rápido. Puedes utilizarlo para probar este flujo de trabajo de {% data variables.product.prodname_actions %}, y los subsecuentes.

### Publicar tu paquete

1. Crea un repositorio nuevo en {% data variables.product.prodname_dotcom %}, agregando el `.gitignore` para Node. Crea un repositorio si te gustaría borrar este paquete posteriormente. Los paquetes públicos no podrán borrarse. Para obtener más información, consulta la sección "[Crear un nuevo repositorio](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clona el repositorio en tu máquina local.
    {% raw %}
    ```shell
    $ git clone https://github.com/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
    {% endraw %}
3. Crea un archivo `index.js` y agrega una alerta básica que diga "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Inicializa un paquete de npm. En el asistente de inicialización de paquetes, ingresa tu paquete con el nombre _`@YOUR-USERNAME/YOUR-REPOSITORY`_, y configura el script de prueba como `exit 0` si no tienes ninguna prueba. Confirma tus cambios y súbelos a
{% data variables.product.prodname_dotcom %}.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...

    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
    {% endraw %}
5. Desde tu repositorio en {% data variables.product.prodname_dotcom %}, crea un archivo nuevo en el directorio `.github/workflows` que se llame `release-package.yml`. Para obtener más información, consulta "[Crear nuevos archivos](/github/managing-files-in-a-repository/creating-new-files)."
6. Copia el siguiente contenido de YAML en el archivo `release-package.yml`.
    {% raw %}
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: https://npm.pkg.github.com/
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    ```
    {% endraw %}
7. Desplázate hasta el final de la página y selecciona **Crear una rama nueva para esta confirmación e iniciar una solicitud de cambios**. Después, para crear una solicitud de cambios, da clic en **Proponer un archivo nuevo**.
8. **Fusiona** la solicitud de cambios.
9. Navega a la pestaña de **Código** y crea un lanzamiento nuevo para probar el flujo de trabajo. Para obtener más información, consulta la sección "[Gestionar los lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)".

El crear un lanzamiento nuevo en tu repositorio activa el flujo de trabajo para compilar y probar tu código. Si las pruebas pasan, entonces el paquete se publicará en {% data variables.product.prodname_registry %}.

### Visualizar tu paquete publicado

Los paquetes se publican a nivel del repositorio. Puedes ver todos los paquetes en un repositorio y buscar un paquete específico.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Instalar un paquete publicado

Ahora que publicaste el paquete, querrás utilizarlo como una dependencia en tus proyectos. Para obtener más información, consulta la sección "[Configurar npm para utilizarlo con el {% data variables.product.prodname_registry %}](/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)".

### Pasos siguientes

El flujo básico que acabas de agregar se ejecuta en cualquier momento que se cree un lanzamiento nuevo en tu repositorio. Pero, este es solo el principio de lo que puedes hacer con {% data variables.product.prodname_registry %}. Puedes publicar tu paquete en varios registros con un solo flujo de trabajo, activar el flujo de trabajo para que se ejecute en eventos diferentes tales como una solicitud de cambios fusionada, administrar contenedores, y más.

El combinar el {% data variables.product.prodname_registry %} y las {% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu proceso de desarrollo de aplicaciones. ¿Listo para comenzar? Aquí hay algunos recursos útiles para llevar a cabo los siguientes pasos con el {% data variables.product.prodname_registry %} y las {% data variables.product.prodname_actions %}:

- "[Aprende sobre el {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" para un tutorial más a fondo de GitHub Packages
- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para un tutorial más a fondo de GitHub Actions
- "[Guías](/packages/guides)" para los casos de uso y ejemplos específicos
